import { Link, Card, Input, Grid, Text, Button, Row } from "@nextui-org/react";

export default function Form(props) {
  return (
    <Card style={{ paddingLeft: 23 }} css={{ mw: "400px" }}>
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container gap={3.5}>
          <Grid xs={12}>
            <Text h1 b>
              {props.action}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Input size="lg" width="90%" placeholder="Email" />
          </Grid>
          <Grid xs={12}>
            <Input.Password
              size="lg"
              width="90%"
              type="password"
              placeHolder="Password"
            />
          </Grid>
          <Grid xs={12}>
            <Button size="lg" css={{ width: "90%" }}>
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
    </Card>
  );
}
