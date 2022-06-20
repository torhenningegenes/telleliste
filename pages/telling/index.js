import { Fragment } from "react";
import { useRouter } from "next/router";
import NyTelling from "./nytelling";
import Footer from "../../components/footer";

function Telling(props) {
  const router = useRouter();

  function sendTilTelleside() {
    const tellingUrl = `/telling/nytelling`;
    router.push(tellingUrl);
  }

  function telleKnapp(e) {
    e.preventDefault();
    console.log("click");
    sendTilTelleside();
  }
  return (
    <Fragment>
      <div className="container-fluid mx-auto center bg-light">
        <NyTelling />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Telling;
