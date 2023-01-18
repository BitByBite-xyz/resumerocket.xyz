import { useState, useRef } from "react";
import { Box } from "../components/layout/Box.js";
import { Grid, Text, Spacer } from "@nextui-org/react";
import FileUpload from "../components/fileupload/FileUpload.js";
import CLForm from "../components/form/CLForm.js";
import CoverLetter from "../components/coverletter/CoverLetter.js";
import Header from '../components/navbar';

export default function Home() {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");

  const fileInput = useRef(null);

  const handleDrop = (event) => {
    let file;
    event.preventDefault();

    if (event.dataTransfer !== undefined) {
      file = event.dataTransfer.files[0];
    } else if (event.target !== undefined) {
      file = event.target.files[0];
    }
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setText(reader.result);
    };
    reader.readAsText(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fileInput.current.reset();
    setFileName("");
    setText("");
  };

  return (
    <>
    <Header/>
 
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Text h1>Create Cover Letter</Text>
      <Spacer y={1.5} />
      <Grid.Container>
        <Grid xs={5}>
          <FileUpload
            fileName={fileName}
            handleDrop={handleDrop}
            handleClick={handleClick}
            formRef={fileInput}
          />
        </Grid>
        <Grid xs={6}>{text ? <CoverLetter text={text} /> : null}</Grid>
        <Grid style={{ position: "absolute", marginTop: 250 }} xs={6}>
          <CLForm />
        </Grid>
      </Grid.Container>
      {!text ? <Spacer y={20} /> : null}{" "}
    </Box>
    </>
  );
}
