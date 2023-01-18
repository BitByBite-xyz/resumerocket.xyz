import { useEffect } from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Footer from "../components/footer/Footer.js";

import Head from "next/head";
import { useRouter } from "next/router";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   // function to get the current page url and pass it to gtag pageView() function
  //   const handleRouteChange = (url) => {};

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   router.events.on("hashChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     router.events.off("hashChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

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
        <div style={{ minHeight: "100vh" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
