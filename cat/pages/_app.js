import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {Header} from '../components/header/header'
import { ThemeProvider } from "@emotion/react";
import theme from '../styles/theme'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <ThemeProvider theme={theme}>
      <Header title="CAT 🙀"/>
      <Component {...pageProps} />
    </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
