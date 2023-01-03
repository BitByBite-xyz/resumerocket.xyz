import { Grid, Text, Spacer } from "@nextui-org/react";
import { Box } from "../components/layout/Box.js";
import Form from "../components/form/Form.js";

export default function Pricing() {
  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      {/* <Text h1>Pricing</Text> */}
      <Grid.Container>
        <Grid xs={4}>
          <Form action="Login" />
        </Grid>
      </Grid.Container>
    </Box>
  );
}
