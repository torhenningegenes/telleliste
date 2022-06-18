import SignUp from "../context/signUp";
import { Fragment } from "react";

function Home(props) {
  return (
    <Fragment>
      <div
        className="center bg-light
"
      >
        <h1 className="bg-body text-dark center mainHeader">
          Velkommen til tellelista!
        </h1>
        <StartButton label={props.label1} className="mt-auto mb-5" />
        <br />
        <StartButton label={label2} className="mb-5" />
      </div>
    </Fragment>
  );
}

export default Home;
