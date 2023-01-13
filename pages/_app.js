import { useRouter } from "next/router";
import {
  createTheme,
  NextUIProvider,
  Link,
  Spacer,
  Grid,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CustomNavBar } from "../components/navbar/CustomNavBar.js";
import Head from "next/head";
import Footer from "../components/footer/Footer.js";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
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
              <Link onClick={() => router.push("/home")}>Home</Link>
            </Grid>
            <Grid xs={2}>
              <Link onClick={() => router.push("/pricing")}>Pricing</Link>
            </Grid>
            <Grid xs={2}>
              <Link onClick={() => router.push("/signup")}>Signup</Link>
            </Grid>
          </Grid.Container>
          <div style={{ width: "90%", marginLeft: "3%", minHeight: "100vh" }}>
            <Component {...pageProps} />
          </div>
          <Footer />
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
