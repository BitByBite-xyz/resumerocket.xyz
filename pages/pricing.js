import { Grid, Text, Spacer } from "@nextui-org/react";
import { getAuth } from "firebase/auth";
import PriceSelection from "../components/pricing/PriceSelection.js";

export default function Pricing() {
  const auth = getAuth();

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
            uid={auth.currentUser?.uid}
          />
        </Grid>
        <Grid md={4} xs={12}>
          <PriceSelection
            plan="Premium"
            price="$29.99"
            amount="month"
            description="Unlimited custom-tailored cover letter generated at the power of a few clicks."
            mode="subscription"
            uid={auth.currentUser?.uid}
          />
        </Grid>
      </Grid.Container>
      {/* <Spacer y={1} />
      <Text size="$lg">
        Our basic plan starts at just $4.99 per resume, which includes a custom
        tailored cover letter. If you're looking for unlimited cover letters,
        our monthly subscription plan is just $29.99 a month. With this plan,
        you'll have the flexibility to create as many custom tailored cover
        letters as you need to help you land your dream job.
      </Text> */}
    </>
  );
}
