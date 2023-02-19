import { useState, useRef } from "react";
import {
  Loading,
  Card,
  Input,
  Button,
  Grid,
  Text,
  Spacer,
} from "@nextui-org/react";
import { useRouter } from "next/router.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebaseConfig.js";

import mammoth from "mammoth";

import FileUpload from "../components/fileupload/FileUpload.js";
import CoverLetter from "../components/coverletter/CoverLetter.js";

export default function Home() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [resumeText, setResume] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState([]);

  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInput = useRef(null);

  const handleDrop = (event) => {
    let file;
    const reader = new FileReader();
    event.preventDefault();

    if (event.dataTransfer !== undefined) {
      file = event.dataTransfer.files[0];
    } else if (event.target !== undefined) {
      file = event.target.files[0];
    }
    setFile(file);
    setFileName(file.name);

    // Extracting text from file
    if (file.type === "text/plain") {
      reader.readAsText(file);
      reader.onload = () => {
        const plainText = reader.result;
        setResume(plainText);
      };
      reader.onerror = () => {
        console.log("Error reading file");
      };
    } else if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "application/msword"
    ) {
      mammoth
        .convertToHtml({ arrayBuffer: file })
        .then((result) => {
          const plainText = result.value.replace(/<\/?[^>]+(>|$)/g, "");
          setResume(plainText);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setWarning("File type must be .docx, .dox or .txt");
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    fileInput.current.reset();
    setFileName("");
    setText("");
    setResume("");
  };

  const handleSubmit = async () => {
    // Call the Google Cloud Function with the file URL
    const apiUrl =
      "https://us-central1-bitbybite-dotxyz.cloudfunctions.net/extractText";
    const params = new URLSearchParams({
      resumeText,
      jobTitle,
      company,
    });
    if (jobTitle !== "" && company !== "" && resumeText !== "") {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          setWarning("");
          setLoading(true);
          const storageRef = ref(storage, `resumes/${user.uid}/${file.name}`);
          // Upload file to Firebase Storage
          uploadBytesResumable(storageRef, file).then(async (snapshot) => {
            try {
              const response = await fetch(`${apiUrl}?${params}`);
              const data = await response.text();

              // Set the text state to the response from the Google Cloud Function
              setText(data);
              setLoading(false);
            } catch (error) {
              setLoading(false);
              console.error(error);
            }
          });
        } else {
          router.push("/login");
        }
      });
    } else {
      setWarning(
        jobTitle === "" ? "Job title required" : "Company name required"
      );
    }
  };

  return (
    <>
      <Text h1>Create Cover Letter</Text>
      <Spacer y={1.5} />
      <Grid.Container>
        <Grid md={5} xs={12}>
          <FileUpload
            fileName={fileName}
            handleDrop={handleDrop}
            handleClick={handleClick}
            formRef={fileInput}
          />
        </Grid>
        <Grid xs={7}>{text ? <CoverLetter text={text} /> : null}</Grid>
        <Grid style={{ position: "absolute", marginTop: 250 }} md={6} xs={9.5}>
          <Card
            style={{ paddingLeft: 23, paddingTop: 15, paddingBottom: 15 }}
            css={{ mw: "450px" }}
          >
            <Card.Body css={{ py: "$10" }}>
              <Grid.Container>
                {warning !== "" ? (
                  <Text
                    color="error"
                    style={{ marginTop: -18, marginBottom: 12 }}
                  >
                    {warning}
                  </Text>
                ) : null}
                <Grid xs={12}>
                  <Input
                    bordered
                    aria-label="Company"
                    placeholder="Company"
                    color="primary"
                    width="90%"
                    size="md"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Grid>
                <Spacer y={1.5} />
                <Grid xs={12}>
                  <Input
                    bordered
                    aria-label="Job Title"
                    placeholder="Job Title"
                    color="primary"
                    width="90%"
                    size="md"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </Grid>
                <Spacer y={1} />
                <Grid xs={12}>
                  <Button
                    onPress={handleSubmit}
                    size="lg"
                    css={{ width: "90%" }}
                  >
                    {loading ? (
                      <Loading color="currentColor" size="sm" />
                    ) : (
                      <>Generate Cover Letter</>
                    )}
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      {!text ? <Spacer y={20} /> : null}{" "}
    </>
  );
}
