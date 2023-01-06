import { Card, Text, Link } from "@nextui-org/react";

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
        >
          <input
            type="file"
            id="file-input"
            //   ref={#}
            //   onChange={#}
            accept="image/*"
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
