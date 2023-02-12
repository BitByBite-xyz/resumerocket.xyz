import { Button, Grid, Text, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  const { mode } = router.query;

  return (
    <>
      <Spacer y={4} />
      <Text h1>Success!</Text>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        <Grid md={6} xs={12}>
          {mode == "payment" ? (
            <Text>
              Thank you for purchasing the <b>Basic plan</b> you will now have
              access to custom-tailered cover letter generation.
            </Text>
          ) : (
            <Text>
              Thank you for purchasing the <b>Premium</b> plan you will now have
              access to unlimited custom-tailered cover letter generation.
            </Text>
          )}
        </Grid>
        <Grid md={7} xs={12}>
          <Button size="lg" onPress={() => router.push("/home")}>
            Generate Cover Letter
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
