import { useState } from "react";
import {
  Link,
  Card,
  Input,
  Grid,
  Text,
  Button,
  Checkbox,
  Spacer,
  Loading,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { GoogleIcon } from "../../assets/GoogleIcon.js";

export default function Form(props) {
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";

  const [loading, setLoading] = useState(false);

  return (
    <Card style={{ paddingLeft: 23, marginTop: "10%" }} css={{ mw: "400px" }}>
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
            <Button
              onClick={() => setLoading(!loading)}
              size="lg"
              css={{ width: "90%" }}
            >
              {loading ? (
                <Loading color="currentColor" size="sm" />
              ) : (
                <>{props.action}</>
              )}
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
                Don&apos;t have an account?{" "}
                <Link onClick={() => router.push("/signup")}>Sign up</Link>
              </Text>
            ) : (
              <Text>
                Already have an account?{" "}
                <Link onClick={() => router.push("/login")}>Login</Link>
              </Text>
            )}
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
