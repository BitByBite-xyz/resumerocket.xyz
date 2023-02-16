import { Card, Text } from "@nextui-org/react";
import { IconButton } from "../fileupload/IconButton";
import { DownloadIcon } from "./DownloadIcon";

export default function CoverLetter(props) {
  return (
    <Card style={{ padding: "0px 40px 20px 40px" }} css={{ width: 800 }}>
      <IconButton style={{ position: "absolute", marginLeft: 540 }}>
        {props.isDownloadAble ? <DownloadIcon size={20} /> : null}
      </IconButton>
      <Card.Body css={{ py: "$10" }}>
        <Text>
          {props.text.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Text>
      </Card.Body>
    </Card>
  );
}
