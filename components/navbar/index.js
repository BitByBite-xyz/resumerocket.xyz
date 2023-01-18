import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "./Logo.js";

export default function CustomNavBar() {
  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          Resume Rocket
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link isActive href="/">
          Create a Cover Letter
        </Navbar.Link>
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/examples">Examples</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
