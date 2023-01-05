import {
  Link,
  Card,
  Input,
  Grid,
  Text,
  Button,
  Checkbox,
  Spacer,
} from "@nextui-org/react";

export default function CLForm(props) {
  return (
    <Card
      style={{ paddingLeft: 23, paddingTop: 15, paddingBottom: 15 }}
      css={{ mw: "450px" }}
    >
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Input size="lg" width="90%" placeholder="Company" />
          </Grid>
          <Spacer y={1.5} />
          <Grid xs={12}>
            <Input size="lg" width="90%" placeHolder="Job Title" />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button size="lg" css={{ width: "90%" }}>
              Generate Cover Letter
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
