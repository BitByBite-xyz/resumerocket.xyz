import '../styles/globals.css'

import { useEffect } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Head from 'next/head'
import Script from 'next/script'
import {useRouter} from 'next/router'





// 2. Call `createTheme` and pass your custom values
const light = createTheme({
  type: 'light',
  theme: {

  colors: {
    myColor: '#b33aaf'
  }
  }

})

const dark = createTheme({
  type: 'dark',
  theme: {

  colors: {
    myColor: '#b33aaf'
  }
}
})

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    // function to get the current page url and pass it to gtag pageView() function
    const handleRouteChange = (url) => {
     // gtag.pageView(url);
    }
    
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    }
    }, [router.events])


  //console.log(themeObject.theme)


  return ( 
    <>
          <Head>
          <meta
  name='viewport'
  content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
/>
      </Head>

      <NextUIProvider theme={theme}>
      <Component {...pageProps} />
        </NextUIProvider>
    
    </>
  );
}

export default MyApp
