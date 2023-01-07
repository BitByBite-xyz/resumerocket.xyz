import { Card, Input, Grid, Text, Button } from "@nextui-org/react";

export default function CheckoutForm(props) {
  return (
    <Card
      css={{
        mw: "500px",
        paddingLeft: "40px",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
    >
      <Card.Body style={{ width: "90%" }}>
        <Grid.Container gap={1.75}>
          <Grid xs={12}>
            <Text h2>Payment Detail</Text>
          </Grid>
          <Grid xs={12}>
            <Input
              bordered
              label="Full Name"
              placeholder="Full Name"
              color="primary"
              width="100%"
              size="md"
            />
          </Grid>
          <Grid xs={12}>
            <Input
              bordered
              label="Credit Card Number"
              placeholder="XXXX - XXXX - XXXX - XXXX"
              color="primary"
              width="100%"
              size="md"
              pattern="\d*"
              maxlength="16"
            />
          </Grid>
          <Grid xs={6}>
            <Input
              bordered
              label="Expiration Date"
              placeholder="mm / yy"
              color="primary"
              size="md"
              width="95%"
              pattern="\d*"
              maxlength="16"
            />
          </Grid>
          <Grid xs={6}>
            <Input
              bordered
              label="CVV"
              placeholder="XXX"
              color="primary"
              size="md"
              width="100%"
              pattern="\d*"
              maxlength="16"
            />
          </Grid>
          <Grid xs={10}>
            <Text>Subtotal</Text>
          </Grid>
          <Grid xs={2}>
            <div style={{ width: "100% ", textAlign: "right" }}>
              {props.plan == "basic" ? <Text>$4.99</Text> : <Text>$29.99</Text>}
            </div>
          </Grid>
          <Grid xs={10}>
            <Text>Taxes</Text>
          </Grid>
          <Grid xs={2} style={{ textAlign: "right" }}>
            <div style={{ width: "100% ", textAlign: "right" }}>
              {props.plan == "basic" ? <Text>$0.31</Text> : <Text>$1.87</Text>}
            </div>
          </Grid>
          <Grid xs={12}>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#D3D3D3",
              }}
            />
          </Grid>
          <Grid xs={10}>
            <Text>Total Amount</Text>
          </Grid>
          <Grid xs={2} style={{ textAlign: "right" }}>
            <div style={{ width: "100% ", textAlign: "right" }}>
              {props.plan == "basic" ? <Text>$5.31</Text> : <Text>$31.86</Text>}
            </div>
          </Grid>
          <Grid xs={12}>
            <Button size="lg" css={{ width: "100%" }}>
              Make Payment
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
