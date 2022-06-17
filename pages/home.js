import SignUp from "../context/signUp";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="center">
        <h1 className="bg-body text-dark center">Velkommen til tellelista!</h1>
        <StartButton label={label1} className="mt-5 mb-5" />
        <br />
        <StartButton label={label2} className="mb-5" />
      </div>
    </Fragment>
  );
}

export default Home;
