import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/nav";
import { AppWrapper } from "./AppWrapper";
import { AuthProvider } from "../context/auth-context";

// import Head from "../components/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <AppWrapper>
          <Nav />
          <Component {...pageProps} />
        </AppWrapper>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
