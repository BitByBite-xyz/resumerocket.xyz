import { useState } from "react";
import { Box } from "../components/layout/Box.js";
import { Grid, Text, Spacer } from "@nextui-org/react";
import FileUpload from "../components/fileupload/FileUpload.js";
import CLForm from "../components/form/CLForm.js";
import CoverLetter from "../components/coverletter/CoverLetter.js";

export default function Home() {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    let file;

    if (event.dataTransfer.files[0] !== undefined) {
      file = event.dataTransfer.files[0];
    } else {
      file = event.target.files[0];
    }

    const reader = new FileReader();
    reader.onload = () => {
      console.log("WE MADE IT HERE");
      setText(reader.result);
    };
    reader.readAsText(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked!!");
    setFileName("");
  };
  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Text h1>Create Cover Letter</Text>
      <Spacer y={1.5} />
      <Grid.Container>
        <Grid xs={5}>
          <FileUpload
            fileName={fileName}
            handleDrop={handleDrop}
            handleClick={handleClick}
          />
        </Grid>
        <Grid xs={6}>{text ? <CoverLetter text={text} /> : null}</Grid>
        <Grid style={{ position: "absolute", marginTop: 250 }} xs={6}>
          <CLForm />
        </Grid>
      </Grid.Container>
      {!text ? <Spacer y={20} /> : null}{" "}
    </Box>
  );
}
