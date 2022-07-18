import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <title>Hero Arena</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
