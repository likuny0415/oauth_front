import type { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import "../styles/nprogress.css";

import Router from "next/router";
import nProgress from "nprogress";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

Router.events.on('routeChangeStart', () => {
  console.log("123123")
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
