import { Card, Text } from "@nextui-org/react";

export default function CoverLetter(props) {
  return (
    <Card style={{ padding: "10px 40px 40px 40px" }} css={{ width: 800 }}>
      <Card.Body css={{ py: "$10" }}>
        <Text>{props.text}</Text>
      </Card.Body>
    </Card>
  );
}
