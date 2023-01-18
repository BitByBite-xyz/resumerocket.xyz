import React, { useEffect, useState } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "./Logo.js";
import { useRouter } from "next/router";

export default function CustomNavBar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand onClick={() => router.push("/")}>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          Resume Rocket
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link
          onClick={() => {
            router.push("/home");
          }}
          isActive={pathname == "/home"}
        >
          Create a Cover Letter
        </Navbar.Link>
        <Navbar.Link
          onClick={() => {
            router.push("/pricing");
          }}
          isActive={pathname === "/pricing"}
          key="pricing"
        >
          Pricing
        </Navbar.Link>
        <Navbar.Link
          key="examples"
          isActive={pathname === "/login"}
          onClick={() => {
            router.push("/login");
          }}
        >
          Examples
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" onClick={() => router.push("/login")}>
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} onClick={() => router.push("/signup")}>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem isActive={pathname === "/home"}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            onClick={() => router.push("/home")}
          >
            Create a Cover Letter
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem isActive={pathname === "/pricing"}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            onClick={() => router.push("/pricing")}
          >
            Pricing
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            onClick={() => router.push("/login")}
          >
            Examples
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
