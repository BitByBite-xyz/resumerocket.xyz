import { useRouter } from "next/router";
import { Card, Grid, Text, Button, Spacer } from "@nextui-org/react";

export default function PriceSelection(props) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!props.uid) return router.push("/login");
    event.target.submit();
  };

  return (
    <Card css={{ mw: "300px", paddingLeft: "15px" }}>
      <Card.Body css={{ py: "$10", paddingLeft: "15px", paddingRight: "30px" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Text h1 b>
              {props.plan}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text h2>{props.price}</Text>
            <Text css={{ marginLeft: "5px", marginTop: "17px" }}>
              / {props.amount}
            </Text>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <Text>{props.description}</Text>
        <Spacer y={1.5} />
        <form
          action={`https://us-central1-bitbybite-dotxyz.cloudfunctions.net/createCheckoutSession?mode=${props.mode}&uid=${props.uid}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <Button type="submit" size="lg">
            Select
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
