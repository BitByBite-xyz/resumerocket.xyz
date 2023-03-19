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
// import { getDoc, setDoc, doc } from "firebase/firestore";
// import { fbapp, database } from "../../config/firebaseConfig";
import { GoogleIcon } from "../../assets/GoogleIcon.js";

export default function Form(props) {
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    const auth = getAuth();
    setLoading(true);
    try {
      let userCredential;
      if (props.action === "Login") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        setDoc(doc(database, "users", user.uid), {
          uid: user.uid,
          stripe_uid: "",
          email: user.email,
          membership: "none",
        });
      }
      router.push("/home");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMsg("User not found");
          break;
        case "auth/wrong-password":
          setErrorMsg("Wrong password");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("Email already in use");
          break;
        case "auth/invalid-email":
          setErrorMsg("Invalid email");
          break;
        case "auth/weak-password":
          setErrorMsg("Weak password");
          break;
      }
    }
    setLoading(false);
  };

  const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);

      const userRef = doc(database, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(doc(database, "users", user.uid), {
          uid: user.uid,
          stripe_uid: "",
          email: user.email,
          membership: "none",
        });
      }

      router.push("/home");
    } catch (error) {
      console.log(error);
      const { code, message, customData } = error;
      const email = customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Handle errors here
    }
  };

  // If user is logged in, redirect to /home
  // const authh = getAuth(fbapp);
  // onAuthStateChanged(getAuth(), (user) => (user ? router.push("/home") : null));

  return (
    <Card style={{ paddingLeft: 23, marginTop: "10%" }} css={{ mw: "400px" }}>
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Text h1 b>
              {props.action}
            </Text>
          </Grid>
          {errorMsg != "" ? (
            <>
              <Grid xs={12}>
                <Text color="error">{errorMsg}</Text>
              </Grid>
              <Spacer y={1} />
            </>
          ) : null}
          <Spacer y={2.25} />
          <Grid xs={12}>
            <Input
              bordered
              aria-label="Email"
              labelPlaceholder="Email"
              color="primary"
              width="90%"
              size="md"
              // status={errorMsg !== "" ? "error" : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Spacer y={1.75} />
          <Grid xs={12}>
            <Input.Password
              bordered
              aria-label="Password"
              labelPlaceholder="Password"
              color="primary"
              width="90%"
              size="md"
              // status={errorMsg !== "" ? "error" : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Checkbox onPress={() => setRemember(!remember)} size="sm">
              <Text>Remember me</Text>
            </Checkbox>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button onPress={handleSubmit} size="lg" css={{ width: "90%" }}>
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
              onPress={loginWithGoogle}
            >
              Sign in with Google
            </Button>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            {isLogin ? (
              <Text>
                Don&apos;t have an account?{" "}
                <Link onPress={() => router.push("/signup")}>Sign up</Link>
              </Text>
            ) : (
              <Text>
                Already have an account?{" "}
                <Link onPress={() => router.push("/login")}>Login</Link>
              </Text>
            )}
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
