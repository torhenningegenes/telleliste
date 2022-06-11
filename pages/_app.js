import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/nav";
import { AppWrapper } from "./AppWrapper";

// import Head from "../components/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppWrapper>
        <Nav />
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  );
}

export default MyApp;
