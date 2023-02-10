import { Card, Grid, Text, Link } from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { IconButton } from "./IconButton";

export default function FileUpload(props) {
  return (
    <Card css={{ mw: "450px", height: "200px" }}>
      <Card.Body>
        <div
          style={{
            position: "absolute",
            width: "90%",
            height: "78%",
            marginLeft: "10px",
            marginTop: "2px",
            borderRadius: "10px",
            border: "1px dashed #ccc",
          }}
          onDrop={props.handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <form ref={props.formRef}>
            <input
              type="file"
              id="file-input"
              //   ref={props.ref}
              onChange={props.handleDrop}
              accept=".docx, .pdf, .txt"
              style={{
                position: "absolute",
                width: "90%",
                height: "78%",
                marginLeft: "10px",
                marginTop: "2px",
                display: "none",
              }}
            />
          </form>
          <Text
            style={{
              position: "absolute",
              marginLeft: "70px",
              marginRight: "70px",
              marginTop: "65px",
            }}
            b
          >
            Drag and drop resume, or{" "}
            <Link onClick={() => document.getElementById("file-input").click()}>
              Browse
            </Link>
          </Text>
          {props.fileName ? (
            <Grid.Container style={{ marginLeft: "70px", marginTop: "100px" }}>
              <Grid xs={5}>
                <Text>{props.fileName}</Text>
              </Grid>
              <Grid xs={1}>
                <IconButton>
                  <DeleteIcon
                    onClick={props.handleClick}
                    size={20}
                    fill="#FF0080"
                  />
                </IconButton>
              </Grid>
            </Grid.Container>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}
