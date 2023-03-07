import jsPDF from "jspdf";

import { Card, Text, Tooltip } from "@nextui-org/react";
import { IconButton } from "../fileupload/IconButton";
import { DownloadIcon } from "./DownloadIcon";

export default function CoverLetter(props) {
  function createPDF(text) {
    // Create a new jsPDF instance
    const doc = new jsPDF({ format: "letter", unit: "mm" });

    // Set the font size and type
    doc.setFontSize(12);
    doc.setFont("times", "roman");

    // Set the maximum width of the text
    const maxWidth = doc.internal.pageSize.getWidth() - 40; // Subtract 20 to account for margins

    // Split the text into an array of lines based on the maximum width
    const lines = doc.splitTextToSize(props.text, maxWidth);

    // Add each line of text to the PDF document
    let y = 20; // Start at 20mm from the top
    lines.forEach((line) => {
      doc.text(line, 20, y);
      y += 6; // Add 5mm between each line
    });

    // Save the PDF document
    doc.save(
      `${props.company.toLocaleLowerCase()}-${props.jobTitle.toLocaleLowerCase()}-cover-letter.pdf`
    );
  }

  return (
    <Card style={{ padding: "8px 40px 20px 40px" }} css={{ width: 800 }}>
      <Card.Body css={{ py: "$10" }}>
        <IconButton style={{ marginLeft: "93%", marginTop: 10 }}>
          <Tooltip content="Download PDF" color="invert" placement="bottom">
            <DownloadIcon onClick={createPDF} size={20} fill="#FF0080" />
          </Tooltip>
        </IconButton>
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
