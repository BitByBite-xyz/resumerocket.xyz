import { useEffect } from "react";
import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Box } from "../components/layout/Box.js";
import fbb from "../config/firebaseConfig.js";
import Footer from "../components/footer/Footer.js";
import Header from "../components/navbar";
import Head from "next/head";
import { getAuth } from "firebase/auth";
import Script from "next/script";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Initialize Firebase
    const auth = getAuth(fbb);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <NextUIProvider
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <Header />
        <div style={{ minHeight: "100vh", width: "90%", marginLeft: "3%" }}>
          <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
            <Component {...pageProps} />
          </Box>
        </div>
        <Spacer y={2} />
        <Footer />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
