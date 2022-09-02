import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

import { useRouter } from "next/router";

import Head from "next/head";
import { AppWrapper } from "../context/AppWrapper";
import { AuthProvider } from "../context/auth-context";

import NavBar from "../components/layout/nav";
import ProtecedRoutes from "../components/proteced-routes";
import Footer from "../components/layout/bg-color";
import ScreenSize from "../components/layout/Screen-Size";

function MyApp({ Component, pageProps }) {
  const noAuthRequired = ["/home", "/login-user", "/new-user"];
  const router = useRouter();
  return (
    <>
      <AuthProvider>
        <AppWrapper>
          {/* <ScreenSize /> */}
          <Head>
            <title>Tellelisten for barnehage</title>
          </Head>

          <NavBar />

          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtecedRoutes>
              <Component {...pageProps} />
            </ProtecedRoutes>
          )}
          <Footer />
        </AppWrapper>
      </AuthProvider>
    </>
  );
}

export default MyApp;
