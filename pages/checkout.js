import { Box } from "../components/layout/Box.js";
import { Spacer } from "@nextui-org/react";
import CheckoutForm from "../components/form/CheckoutForm";

export default function Checkout({ plan }) {
  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Spacer y={3} />
      <CheckoutForm plan={plan} />
    </Box>
  );
}

Checkout.getInitialProps = ({ query }) => {
  return {
    plan: query.plan,
  };
};
