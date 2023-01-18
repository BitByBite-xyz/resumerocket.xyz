import { Grid } from "@nextui-org/react";
import Form from "../components/form/Form.js";

export default function Pricing() {
  return (
    <>
      <Grid.Container>
        <Grid md={4} xs={12}>
          <Form action="Sign up" />
        </Grid>
      </Grid.Container>
    </>
  );
}
