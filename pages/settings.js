import {
  useTheme,
  changeTheme,
  Grid,
  Text,
  Row,
  Switch,
  Spacer,
} from "@nextui-org/react";
import SettingNav from "../components/settings/SettingNav";

export default function Settings() {
  const { isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme);
    changeTheme(nextTheme);
  };
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
              <Switch checked={isDark} onChange={handleChange} />
            </Grid>
          </Row>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
