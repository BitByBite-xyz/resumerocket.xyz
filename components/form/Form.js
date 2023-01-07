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
import { useRouter } from "next/router";
import { GoogleIcon } from "../../assets/GoogleIcon.js";

export default function Form(props) {
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";

  return (
    <Card style={{ paddingLeft: 23 }} css={{ mw: "400px" }}>
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Text h1 b>
              {props.action}
            </Text>
          </Grid>
          <Spacer y={2.25} />
          <Grid xs={12}>
            <Input
              bordered
              labelPlaceholder="Email"
              color="primary"
              width="90%"
              size="md"
            />
          </Grid>
          <Spacer y={1.75} />
          <Grid xs={12}>
            <Input.Password
              bordered
              labelPlaceholder="Password"
              color="primary"
              width="90%"
              size="md"
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
            {isLogin ? (
              <Text>
                Don&apos;t have an account? <Link href="/signup">Sign up</Link>
              </Text>
            ) : (
              <Text>
                Already have an account? <Link href="/login">Login</Link>
              </Text>
            )}
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
