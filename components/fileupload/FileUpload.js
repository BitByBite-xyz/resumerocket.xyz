import { Card, Text, Link } from "@nextui-org/react";

export default function FileUpload(props) {
  return (
    <Card css={{ mw: "450px", height: "200px" }}>
      <Card.Body>
        <input
          type="file"
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
            border: "1px dashed #ccc",
            borderRadius: "10px",
          }}
        />
        <Text
          style={{
            position: "absolute",
            marginLeft: "85px",
            marginTop: "65px",
          }}
          b
        >
          Drag and drop resume, or <Link>Browse</Link>
        </Text>
      </Card.Body>
    </Card>
  );
}
