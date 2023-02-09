import { Grid, Text, Row, Switch, Spacer } from "@nextui-org/react";
import SettingNav from "../components/settings/SettingNav";

export default function Settings() {
  return (
    <Grid.Container>
      <Grid md={2} xs={4}>
        <SettingNav />
      </Grid>
      <Grid md={10} xs={8}>
        <Grid.Container gap={3}>
          <Grid xs={12}>
            <Text h2>Settings</Text>
          </Grid>
          <Row>
            <Grid md={3} xs={12}>
              <Text h4>Dark Mode</Text>
              <Spacer x={2} />
              <Switch />
            </Grid>
          </Row>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
