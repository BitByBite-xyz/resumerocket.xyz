import jsPDF from "jspdf";

import { Card, Text } from "@nextui-org/react";
import { IconButton } from "../fileupload/IconButton";
import { DownloadIcon } from "./DownloadIcon";

export default function CoverLetter(props) {
  const downloadCoverLetter = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "letter",
      margins: {
        top: 25.4, // 1 inch
        bottom: 25.4,
        left: 25.4,
        right: 25.4,
      },
    });

    doc.setFont("times", "roman");
    doc.setFontSize(12);

    doc.text(props.text, 25.4, 25.4 + 12); // account for 1 inch margin and font size

    doc.save(
      `${props.company.toLocaleLowerCase()}-${props.jobTitle.toLocaleLowerCase()}-cover-letter.pdf`
    );
  };

  return (
    <Card style={{ padding: "20px 40px 20px 40px" }} css={{ width: 800 }}>
      <IconButton style={{ marginLeft: "93%", marginTop: 10 }}>
        <DownloadIcon onClick={downloadCoverLetter} size={20} fill="#FF0080" />
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
