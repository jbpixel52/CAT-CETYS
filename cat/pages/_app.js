import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {Header} from '../components/header/header'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <Header title="CAT 🙀"/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
