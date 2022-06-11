import StartButton from "../components/start-button";
import firebase from "../firebase/firebaseConfig";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import SignUp from "../context/signUp";

function Home(props) {
  const label1 = "Ny liste";
  const label2 = "Se gamle lister";
  return (
    <Fragment>
      <div className="center">
        <h1 className="bg-body text-dark center">Velkommen til tellelista!</h1>
        <StartButton label={label1} className="mt-5 mb-5" />
        <br />
        <StartButton label={label2} className="mb-5" />
      </div>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
