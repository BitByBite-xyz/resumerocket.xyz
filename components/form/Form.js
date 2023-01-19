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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import fbapp from "../../config/firebaseConfig";
import { GoogleIcon } from "../../assets/GoogleIcon.js";

export default function Form(props) {
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    const auth = getAuth();
    if (props.action === "Login") {
      // Login existing user
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          router.push("/home");
          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      // Sign up new user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          router.push("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // Login successful -> route to /home
        router.push("/home");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // If user is logged in, redirect to /home
  const authh = getAuth(fbapp);
  onAuthStateChanged(getAuth(), (user) => (user ? router.push("/home") : null));

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Checkbox onClick={() => setRemember(!remember)} size="sm">
              <Text>Remember me</Text>
            </Checkbox>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button onClick={handleSubmit} size="lg" css={{ width: "90%" }}>
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
              onClick={loginWithGoogle}
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
