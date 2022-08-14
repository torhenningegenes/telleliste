import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

import { AppWrapper } from "../context/AppWrapper";
import { AuthProvider } from "../context/auth-context";
import StartNav from "../components/layout/startNav";
import NavBar from "../components/layout/nav";
import ProtecedRoutes from "../components/proteced-routes";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/layout/bg-color";

function MyApp({ Component, pageProps }) {
  const noAuthRequired = ["/home", "/login-user", "/new-user"];
  const router = useRouter();
  return (
    <>
      <AuthProvider>
        <AppWrapper>
          <Head>
            <title>Tellelisten for barnehage</title>
          </Head>

          <StartNav />
          <NavBar />

          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtecedRoutes>
              <Component {...pageProps} />
            </ProtecedRoutes>
          )}
        </AppWrapper>
      </AuthProvider>
    </>
  );
}

export default MyApp;
