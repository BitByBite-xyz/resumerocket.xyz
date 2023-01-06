import { Card, Text, Link } from "@nextui-org/react";

export default function FileUpload(props) {
  const handleDrop = (event) => {
    event.preventDefault();
    const file =
      event.dataTransfer !== undefined
        ? event.dataTransfer.files[0]
        : event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // reader.result contains the text of the file
      console.log(reader.result);
    };
    reader.readAsText(file);
  };

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
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            id="file-input"
            //   ref={#}
            onChange={handleDrop}
            // accept=".txt/.pdf"
            accept=".docx, .pdf, .txt"
            // style={{ display: "none" }}
            style={{
              position: "absolute",
              width: "90%",
              height: "78%",
              marginLeft: "10px",
              marginTop: "2px",
              display: "none",
            }}
          />
          <Text
            style={{
              position: "absolute",
              marginLeft: "70px",
              marginTop: "65px",
            }}
            b
          >
            Drag and drop resume, or{" "}
            <Link onClick={() => document.getElementById("file-input").click()}>
              Browse
            </Link>
          </Text>
        </div>
      </Card.Body>
    </Card>
  );
}
