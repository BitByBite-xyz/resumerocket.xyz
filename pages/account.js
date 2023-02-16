import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Grid, Text, Row } from "@nextui-org/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SettingNav from "../components/settings/SettingNav";

export default function Account() {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        if (user.email !== "") {
          setUser({
            email: user.email,
            uid: user.uid,
          });
        }
      } else {
        // If user is not logged in, redirect to login page
        router.push("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, router]);

  return (
    <Grid.Container>
      <Grid md={2} xs={4}>
        <SettingNav />
      </Grid>
      <Grid md={10} xs={8}>
        <Grid.Container gap={3}>
          <Grid xs={12}>
            <Text h2>Account</Text>
          </Grid>
          <Row>
            <Grid md={3} xs={12}>
              <Input
                bordered
                label="Email"
                initialValue={user.email}
                color="primary"
                width="100%"
                size="md"
                readOnly={true}
              />
            </Grid>
          </Row>
          <Row>
            <Grid md={3} xs={12}>
              <Input.Password
                bordered
                aria-label="Password"
                label="Password"
                initialValue="password123"
                color="primary"
                width="100%"
                size="md"
                readOnly={true}
              />
            </Grid>
          </Row>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
