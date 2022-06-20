import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/nav";
import { AppWrapper } from "./AppWrapper";
import { AuthProvider } from "../context/auth-context";
import StartNav from "../components/startNav";
import ProtecedRoutes from "../components/proteced-routes";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const noAuthRequired = ["/", "/login-user", "/new-user"];
  const router = useRouter();
  return (
    <div>
      <AuthProvider>
        <AppWrapper>
          <Head>
            <title>Tellelista</title>
          </Head>
          <StartNav />
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtecedRoutes>
              <Component {...pageProps} />
            </ProtecedRoutes>
          )}
        </AppWrapper>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
