import { Grid } from "@nextui-org/react";
import Form from "../components/form/Form.js";

export default function Login() {
  return (
    <>
      <Grid.Container>
        <Grid xs={4}>
          <Form action="Login" />
        </Grid>
      </Grid.Container>
    </>
  );
}
