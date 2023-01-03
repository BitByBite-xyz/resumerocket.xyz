import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function PriceSelection(props) {
  return (
    <Card style={{ paddingLeft: 15 }} css={{ mw: "300px" }}>
      <Card.Header>
        <Grid.Container>
          <Grid xs={12}>
            <Text h2 b>
              {props.plan}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text>{props.price}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$10" }}>
        <Text>{props.description}</Text>
      </Card.Body>
      <Card.Footer>
        <Button size="lg" color="secondary">
          Purchase
        </Button>
      </Card.Footer>
    </Card>
  );
}
