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
    event.preventDefault();

    const file = (event.dataTransfer || event.target).files[0];
    setFile(file);
    setFileName(file.name);

    if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => setResume(reader.result);
      reader.onerror = () => setWarning("Error reading file");
    } else if (
      file.type.match(
        /(application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|application\/msword)/
      )
    ) {
      mammoth
        .convertToHtml({ arrayBuffer: file })
        .then((result) =>
          setResume(result.value.replace(/<\/?[^>]+(>|$)/g, ""))
        )
        .catch((error) => setWarning(error.message));
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
    // API request URL and parameters
    const apiUrl =
      "https://us-central1-bitbybite-dotxyz.cloudfunctions.net/extractText";
    const params = new URLSearchParams({ resumeText, jobTitle, company });

    // Check if all fields are filled
    if (!jobTitle || !company || !resumeText) {
      setWarning(
        !jobTitle
          ? "Job Title is required"
          : !company
          ? "Company is required"
          : "Resume is required"
      );
      return;
    }

    // Check if user is logged in and redirect to login page if not
    const user = getAuth().currentUser;
    if (!user) {
      router.push("/login");
      return;
    }

    setWarning("");
    setLoading(true);

    try {
      // Upload resume to Firebase Storage
      const storageRef = ref(storage, `resumes/${user.uid}/${file.name}`);
      await uploadBytesResumable(storageRef, file);

      // Send API request to CF and fetch response
      const response = await fetch(`${apiUrl}?${params}`);
      const data = await response.text();
      setText(data);
    } catch (error) {
      setWarning(error.message);
    } finally {
      setLoading(false);
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
