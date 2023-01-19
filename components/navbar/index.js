import { useState } from "react";
import {
  Avatar,
  Button,
  Navbar,
  Dropdown,
  Link,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";

import { AcmeLogo } from "./Logo.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import fbapp from '../../config/firebaseConfig';



export default function CustomNavBar() {
  const router = useRouter();
  const { pathname } = router;

  const [user, setUser] = useState({
    email: '',
    uid: ''
  })
  const authh = getAuth(fbapp);
  const auth = getAuth();
  let uid;
  let userData;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;
      console.log(user,'userr')
      userData = {
        email: user.email,
        uid: user.uid,
      }
      if (user.email !== ''){
        setUser(userData)

      }

      // ...
    } else {
      console.log('uid is none')

      // User is signed out
      // ...
    }
  });


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

      {user.email === '' ? (
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
      ) : (
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar color="primary" text="J" textColor="white" />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Account
              </Dropdown.Item>
              <Dropdown.Item key="system">Cover Letters</Dropdown.Item>
              <Dropdown.Item key="configurations">Settings</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      )}

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
