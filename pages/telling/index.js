import { Fragment } from "react";
import { useRouter } from "next/router";

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
      <div className="container mx-auto center">
        <button
          type="button"
          className="btn btn-primary rounded-pill mx-auto "
          onClick={telleKnapp}
        >
          <h3>Ny telling</h3>
        </button>
      </div>
    </Fragment>
  );
}

export default Telling;
