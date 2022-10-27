import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import useSWR, { SWRConfig } from "swr";
import '../styles/globals.css'
const clientSideEmotionCache = createEmotionCache();



function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <MDXProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </MDXProvider>
          </ThemeProvider>
        </CacheProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
