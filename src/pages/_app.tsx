import '../styles/global.css';
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();



type MyAppProps = {
  session: Session,
  Component: undefined,
  pageProps: undefined,
}

const MyApp = ({ session, Component, ...pageProps }: MyAppProps) => {

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp
