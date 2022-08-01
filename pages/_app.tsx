import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Listic</title>
        <meta name="description" content="App to organise exam sessions" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
