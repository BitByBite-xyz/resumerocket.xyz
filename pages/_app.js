// 1. import `NextUIProvider` component
import {
  createTheme,
  NextUIProvider,
  Link,
  StyledGridContainer,
  Grid,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CustomNavBar } from "../components/navbar/CustomNavBar.js";
import Head from "next/head";
import Script from "next/script";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  /* theme: {
     colors: { ...}, // optional
   }*/
});

const darkTheme = createTheme({
  type: "dark",
  /* theme: {
     colors: { ...}, // optional
   }*/
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Grid.Container>
            <Grid xs={2}>
              <Link href="/home">Home</Link>
            </Grid>
            <Grid xs={2}>
              <Link href="/pricing">Pricing</Link>
            </Grid>
            <Grid xs={2}>
              <Link href="/signup">Signup</Link>
            </Grid>
          </Grid.Container>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>

      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
    </>
  );
}

export default MyApp;
