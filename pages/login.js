import { Grid } from "@nextui-org/react";
import { Box } from "../components/layout/Box.js";
import Form from "../components/form/Form.js";
import Header from '../components/navbar';

export default function Login() {
  return (
    <>
    <Header/>

    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Grid.Container>
        <Grid xs={4}>
          <Form action="Login" />
        </Grid>
      </Grid.Container>
    </Box>
    </>
  );
}
