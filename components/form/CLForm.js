import { useState } from "react";
import { Card, Input, Grid, Button, Spacer, Loading } from "@nextui-org/react";

export default function CLForm(props) {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    // Temporary delay to simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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
              onChange={(e) => setCompany(e.target.value)}
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
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <Button onClick={handleSubmit} size="lg" css={{ width: "90%" }}>
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
