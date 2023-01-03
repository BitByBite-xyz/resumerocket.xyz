import { Grid, Text, Spacer } from "@nextui-org/react";
import { Box } from "../components/layout/Box.js";
import PriceSelection from "../components/pricing/PriceSelection.js";

export default function Pricing() {
  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Text h1>Pricing</Text>
      <Grid.Container>
        <Grid xs={4}>
          <PriceSelection
            plan="Basic"
            price="$4.99 / cover letter"
            description="A fixed price for each custom-tailored cover letters generated at the power of a few clicks."
          />
        </Grid>
        <Grid xs={4}>
          <PriceSelection
            plan="Premium"
            price="$29.99 / month"
            description="Unlimited custom-tailored cover letter generated at the power of a few clicks."
          />
        </Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Text size="$lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis. Augue neque gravida in fermentum et sollicitudin ac
        orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
        egestas sed sed risus pretium quam vulputate. Interdum velit euismod in
        pellentesque massa placerat duis ultricies.
      </Text>
    </Box>
  );
}
