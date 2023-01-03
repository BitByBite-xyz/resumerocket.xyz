// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Head from 'next/head'
import Script from 'next/script'


// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  /* theme: {
     colors: { ...}, // optional
   }*/
})

const darkTheme = createTheme({
  type: 'dark',
  /* theme: {
     colors: { ...}, // optional
   }*/
})

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <>
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>

        <Component {...pageProps} />
      </NextUIProvider>

    </NextThemesProvider>


  <Head>
          <meta
  name='viewport'
  content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
/>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1E858JGC2R`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1E858JGC2R', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  </>
  );
}

export default MyApp;