import { Grid, Link, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          height: "1px",
          backgroundColor: "grey",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "12%",
        }}
      >
        <Grid.Container>
          <Grid xs={4}>
            <Text b>
              &#169; <Link href={"https://bitbybite.xyz/"}>BitByBite</Link> 2023
            </Text>
          </Grid>
          <Grid xs={4}>
            <Link onClick={() => router.push("/tos")}>
              <Text b>Terms of Service</Text>
            </Link>
          </Grid>
          <Grid xs={4}>
            <Text b>Contact us</Text>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
}
