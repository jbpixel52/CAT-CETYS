import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
    </>
  );
}

export default MyApp;
