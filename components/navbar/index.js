import React, { useEffect, useState} from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "./Logo.js";
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

export default function CustomNavBar() {
  const router = useRouter()
  const {pathname} = router;
  const { theme, setTheme } = useTheme()

  
  
  
  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          Resume Rocket
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline"
      
      
      onAction={(actionKey) => {

        switch (actionKey) {
          case 'pricing]':
            router.push('/pricing]');
            break;
          case 'examples':
            //setTheme(theme === 'light' ? 'dark' : 'light')
            router.push('/examples]');

            break;
          case 'help_and_feedback':
            console.log('Mangoes and papayas are $2.79 a pound.');
            alert('coming soon\n\n\n\t\t\t\t\t\t:)')
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          default:
            console.log(`Sorry, we are out of.`);
        }
      
        console.log({ actionKey })
      }}
      
      >
        <Navbar.Link onClick={()=> {
          router.push('/');
        }} isActive={pathname == '/'}
        >
          Create a Cover Letter
        </Navbar.Link>
        <Navbar.Link
          onClick={()=> {
            router.push('/pricing');

          }}

          isActive={pathname === '/pricing'}
          key="pricing"
        >Pricing</Navbar.Link>
        <Navbar.Link key="examples">Examples</Navbar.Link>
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
