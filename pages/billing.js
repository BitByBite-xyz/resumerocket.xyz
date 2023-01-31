import { Table, Grid, Text, Row } from "@nextui-org/react";
import SettingNav from "../components/settings/SettingNav";
import { StyledBadge } from "../components/settings/StyledBadge";

export default function Billing() {
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
              <Table.Body>
                <Table.Row key="1">
                  <Table.Cell>Dec 14th 2023</Table.Cell>
                  <Table.Cell>$4.99</Table.Cell>
                  <Table.Cell>
                    <StyledBadge type="pending">Pending</StyledBadge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                  <Table.Cell>Nov 8th 2023</Table.Cell>
                  <Table.Cell>$4.99</Table.Cell>
                  <Table.Cell>
                    <StyledBadge type="success">Success</StyledBadge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                  <Table.Cell>Oct 1st 2023</Table.Cell>
                  <Table.Cell>$4.99</Table.Cell>
                  <Table.Cell>
                    <StyledBadge type="success">Success</StyledBadge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row key="4">
                  <Table.Cell>Sep 23rd 2023</Table.Cell>
                  <Table.Cell>$4.99</Table.Cell>
                  <Table.Cell>
                    <StyledBadge type="success">Success</StyledBadge>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
