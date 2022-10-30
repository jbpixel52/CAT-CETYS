import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Head>
         <title>CAT😺</title>
        </Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Component {...pageProps} />
        <ReactQueryDevtoolsPanel/>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
