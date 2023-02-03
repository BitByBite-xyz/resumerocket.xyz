import { useRouter } from "next/router";
import { Grid, Text, Spacer } from "@nextui-org/react";
import PriceSelection from "../components/pricing/PriceSelection.js";

export default function Pricing() {
  const router = useRouter();
  return (
    <>
      <Text h1>Pricing</Text>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        <Grid md={4} xs={12}>
          <PriceSelection
            plan="Basic"
            price="$4.99"
            amount="cover letter"
            description="A fixed price for each custom-tailored cover letters generated at the power of a few clicks."
            mode="payment"
          />
        </Grid>
        <Grid md={4} xs={12}>
          <PriceSelection
            plan="Premium"
            price="$29.99"
            amount="month"
            description="Unlimited custom-tailored cover letter generated at the power of a few clicks."
            mode="subscription"
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
    </>
  );
}
