import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Fragment from "react";
import Nav from "../components/nav";
import { AppWrapper } from "./AppWrapper";
import Head from "../components/head";

// import Head from "../components/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Nav />
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
