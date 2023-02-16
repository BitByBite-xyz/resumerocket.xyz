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

import FileUpload from "../components/fileupload/FileUpload.js";
import CoverLetter from "../components/coverletter/CoverLetter.js";

export default function Home() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState([]);

  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [loading, setLoading] = useState(false);

  const fileInput = useRef(null);

  const handleDrop = (event) => {
    let file;
    event.preventDefault();

    if (event.dataTransfer !== undefined) {
      file = event.dataTransfer.files[0];
    } else if (event.target !== undefined) {
      file = event.target.files[0];
    }
    setFile(file);
    setFileName(file.name);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fileInput.current.reset();
    setFileName("");
    setText("");
  };

  const handleSubmit = () => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const storageRef = ref(storage, `resumes/${user.uid}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        setLoading(true);

        // Upload file to Firebase Storage
        uploadBytesResumable(storageRef, file).then(async (snapshot) => {
          // Get the download URL of the uploaded file
          const path = `resumes/${user.uid}/${file.name}`;

          // Call the Google Cloud Function with the file URL
          const apiUrl =
            "https://us-central1-bitbybite-dotxyz.cloudfunctions.net/extractDocxText";
          const params = new URLSearchParams({ path, jobTitle, company });

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
