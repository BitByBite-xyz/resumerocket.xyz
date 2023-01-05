import {
  Link,
  Card,
  Input,
  Grid,
  Text,
  Button,
  Checkbox,
  Spacer,
} from "@nextui-org/react";
import { GoogleIcon } from "../../assets/GoogleIcon.js";

export default function Form(props) {
  return (
    <Card style={{ paddingLeft: 23 }} css={{ mw: "400px" }}>
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Text h1 b>
              {props.action}
            </Text>
          </Grid>
          <Spacer y={2} />
          <Grid xs={12}>
            <Input size="lg" width="90%" placeholder="Email" />
          </Grid>
          <Spacer y={1.5} />
          <Grid xs={12}>
            <Input.Password
              size="lg"
              width="90%"
              type="password"
              placeHolder="Password"
            />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Checkbox size="sm">
              <Text>Remember me</Text>
            </Checkbox>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button size="lg" css={{ width: "90%" }}>
              {props.action}
            </Button>
          </Grid>
          <Spacer y={0.75} />
          <Grid xs={12}>
            <Button
              size="lg"
              color="white"
              icon={<GoogleIcon />}
              css={{ width: "90%" }}
              auto
              ghost
            >
              Sign in with Google
            </Button>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Text>
              Don't have an account? <Link href="/signup">Sign up</Link>
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
