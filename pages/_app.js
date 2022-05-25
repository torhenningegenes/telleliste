import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Fragment from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
