import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/nav";
import { AppWrapper } from "./AppWrapper";
import { AuthProvider } from "../context/auth-context";
import StartNav from "../components/startNav";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <AppWrapper>
          <Head>
            <title>Tellelista</title>
          </Head>
          <StartNav />
          <Component {...pageProps} />
        </AppWrapper>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
