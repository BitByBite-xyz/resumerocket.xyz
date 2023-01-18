import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Navbar, Text, Avatar, Dropdown, Input, Spacer } from "@nextui-org/react";
import { useTheme } from 'next-themes'

import { SearchIcon } from "./SearchIcon.js";
import Image from 'next/image'
import img from './icon.png'
import s from './s.svg'
import { Sun } from './sun.js'
import { Moon } from './moon.js'

const variants = [
  "default",
  "highlight",
  "highlight-solid",
  "underline",
  "highlight-rounded",
  "highlight-solid-rounded",
  "underline-rounded",
];

export default function App() {
  const [variant, setVariant] = useState("static");
  const router = useRouter()
  console.log(router)
  const { theme, setTheme } = useTheme()





  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Image
            src={img}
            height={36}
            width={36}
            layout='fixed'
            onClick={() => {
              router.replace('/')
            }}




          />
          <Spacer x={0.2} />

          <Text
            b color="inherit"
            css={{
              textGradient: "45deg, $purple500 -20%, $pink600 50%", marginLeft: 4
            }}
            weight="bold"
            hideIn="xs"

          >
            MusicBridge
          </Text>
        </Navbar.Brand>



        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Content activeColor={'myColor'} >



          </Navbar.Content>

          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="gradient"
                  size="lg"
                  src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPjxwYXRoIGZpbGw9IiNiNmM5ZDYiIHN0cm9rZT0iIzc4OGI5YyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNS4yLDM2LjZjLTAuNSwwLTAuOS0wLjItMS4zLTAuNWMtMC4zLTAuMy0wLjUtMC44LTAuNS0xLjNzMC4yLTAuOSwwLjUtMS4zbDE2LjItMTUuNGwxLjgsMS44TDYuNSwzNi4xCUM2LjIsMzYuNCw1LjcsMzYuNiw1LjIsMzYuNnoiLz48cGF0aCBmaWxsPSIjZDFlZGZmIiBzdHJva2U9IiM3ODhiOWMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI1LjUsMjUuNGMtNiwwLTEwLjktNC45LTEwLjktMTAuOVMxOS41LDMuNiwyNS41LDMuNnMxMC45LDQuOSwxMC45LDEwLjlTMzEuNSwyNS40LDI1LjUsMjUuNHoiLz48L3N2Zz4=`}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => {

                switch (actionKey) {
                  case 'search':
                    router.push('/search');
                    break;
                  case 'toggleDark':
                    setTheme(theme === 'light' ? 'dark' : 'light')
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
              <Dropdown.Item key="search" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Search for songs
                </Text>
              </Dropdown.Item>
              {/*<Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>*/}
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item placement={'right'} icon={theme === 'light' ? <Moon size={22} fill="black" /> : <Sun size={22} fill="#FAF9F6" />} key="toggleDark" withDivider >
                {`${theme === 'light' ? 'dark' : 'light'}`} mode
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>

    </>
  );
}
