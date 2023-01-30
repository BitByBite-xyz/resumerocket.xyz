import { useState } from "react";
import { Button, Input, Grid, Text, Row } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Account() {
  const [isEditingEmail, changeEmail] = useState(true);
  const [isEditingPass, changePass] = useState(true);

  const router = useRouter();

  return (
    <Grid.Container>
      <Grid md={2} xs={4}>
        <Button.Group
          style={{ position: "fixed", marginTop: 30 }}
          size="lg"
          vertical
          flat
        >
          <Button onClick={() => router.push("/account")}>Account</Button>
          <Button>Billing</Button>
          <Button>Settings</Button>
        </Button.Group>
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
                initialValue="jacob@bitbybite.xyz"
                color="primary"
                width="100%"
                size="md"
                readOnly={isEditingEmail}
              />
            </Grid>
          </Row>
          <Row>
            <Grid md={3} xs={12}>
              <Input.Password
                bordered
                label="Password"
                initialValue="password123"
                color="primary"
                width="100%"
                size="md"
                readOnly={isEditingPass}
              />
            </Grid>
          </Row>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
