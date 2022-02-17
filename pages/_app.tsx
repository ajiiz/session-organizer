import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>session-organizer</title>
        <meta name="description" content="App to organise exam sessions" />
      </Head>{" "}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
