import { Spacer } from "@nextui-org/react";
import CheckoutForm from "../components/form/CheckoutForm";

export default function Checkout({ plan }) {
  return (
    <>
      <Spacer y={3} />
      <CheckoutForm plan={plan} />
    </>
  );
}

Checkout.getInitialProps = ({ query }) => {
  return {
    plan: query.plan,
  };
};
