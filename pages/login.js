import { Grid } from "@nextui-org/react";
import Form from "../components/form/Form.js";

export default function Login() {
  return (
    <>
      <Grid.Container>
        <Grid md={4} xs={12}>
          <Form action="Login" />
        </Grid>
      </Grid.Container>
    </>
  );
}
