import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Fragment from "react";
import Nav from "../components/nav";
import Head from "../components/head";
// import Head from "../components/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
