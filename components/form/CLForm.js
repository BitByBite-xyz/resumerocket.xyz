import { useState } from "react";
import { Card, Input, Grid, Button, Spacer, Loading } from "@nextui-org/react";

export default function CLForm(props) {
  const [loading, setLoading] = useState(false);
  return (
    <Card
      style={{ paddingLeft: 23, paddingTop: 15, paddingBottom: 15 }}
      css={{ mw: "450px" }}
    >
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Input
              bordered
              placeholder="Company"
              color="primary"
              width="90%"
              size="md"
            />
          </Grid>
          <Spacer y={1.5} />
          <Grid xs={12}>
            <Input
              bordered
              placeholder="Job Title"
              color="primary"
              width="90%"
              size="md"
            />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button
              onClick={() => setLoading(!loading)}
              size="lg"
              css={{ width: "90%" }}
            >
              {loading ? (
                <Loading color="currentColor" size="sm" />
              ) : (
                <>Generate Cover Letter</>
              )}
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
