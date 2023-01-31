import { Button, Input, Grid, Text, Row } from "@nextui-org/react";
import SettingNav from "../components/settings/SettingNav";

export default function Account() {
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
                initialValue="jacob@bitbybite.xyz"
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
