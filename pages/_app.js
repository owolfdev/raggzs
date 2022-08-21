import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raggzs</title>
        <meta name="description" content="Canvas bags and t-shirts" />
        <link rel="icon" href="/images/icon/skull.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
