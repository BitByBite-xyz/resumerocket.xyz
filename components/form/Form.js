import { Link, Card, Input, Grid, Text, Button, Row } from "@nextui-org/react";

export default function Form(props) {
  return (
    <Card style={{ paddingLeft: 15 }} css={{ mw: "350px" }}>
      {/* <Card.Header>
        <Text h2 b>
          {props.action}
        </Text>
      </Card.Header> */}
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container gap={3}>
          <Grid xs={12}>
            <Text h2 b>
              {props.action}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Input width="90%" placeholder="Email" />
          </Grid>
          <Grid xs={12}>
            <Input.Password
              width="90%"
              type="password"
              placeHolder="Password"
            />
          </Grid>
          <Grid xs={12}>
            <Button size="lg" color="secondary">
              {props.action}
            </Button>
          </Grid>
          <Grid xs={12}>
            <Link href="/login">
              <Text>Already have an account? Sign in</Text>
            </Link>
          </Grid>
        </Grid.Container>
      </Card.Body>
      {/* <Card.Footer>
        <Button size="lg" color="secondary">
          Purchase
        </Button>
      </Card.Footer> */}
    </Card>
  );
}
