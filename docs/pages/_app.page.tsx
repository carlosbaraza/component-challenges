// Dashvar
import "dashvar/dist/base.css";
import "dashvar/dist/dashvar-helpers";
import "dashvar/dist/dashvar.css";

// Other imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/component-challenges/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Are you ready to prove you can build any component? Learn new web APIs and tricks along the way."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
