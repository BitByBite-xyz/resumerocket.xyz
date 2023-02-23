import Stripe from "stripe";

import { useState, useEffect } from "react";
import { Table, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../config/firebaseConfig";

import SettingNav from "../components/settings/SettingNav";
import { StyledBadge } from "../components/settings/StyledBadge";

export default function Billing() {
  const auth = getAuth();
  const router = useRouter();

  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      const firebase_user = await getDoc(doc(database, "users", user.uid));
      const stripe_uid = firebase_user.data().stripe_uid;

      const apiUrl = `https://us-central1-bitbybite-dotxyz.cloudfunctions.net/fetchPaymentHistory?stripe_uid=${stripe_uid}`;
      const history = await fetch(apiUrl);
      const result = await history.json();

      setPaymentHistory(result.data);
    });

    return () => unsubscribe();
  }, [auth]);

  const renderPaymentHistory = () => {
    if (paymentHistory.length === 0) {
      return (
        <Table.Row key="1">
          <Table.Cell>No payments</Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      );
    }
    return paymentHistory.map((payment) => (
      <Table.Row key={payment.id}>
        <Table.Cell>{payment.created}</Table.Cell>
        <Table.Cell>${payment.amount / 100}</Table.Cell>
        <Table.Cell>
          <StyledBadge type="success">Success</StyledBadge>
        </Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <Grid.Container>
      <Grid md={2} xs={4}>
        <SettingNav />
      </Grid>
      <Grid md={10} xs={8}>
        <Grid.Container gap={3}>
          <Grid xs={12}>
            <Text h2>Billing</Text>
          </Grid>
          <Grid md={10} xs={12}>
            <Table
              aria-label="Example static collection table"
              css={{
                height: "auto",
                minWidth: 400,
              }}
              selectionMode="single"
            >
              <Table.Header>
                <Table.Column>Invoice</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>{renderPaymentHistory()}</Table.Body>
            </Table>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
