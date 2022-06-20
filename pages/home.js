import SignUp from "../context/signUp";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <Fragment>
      <Container>
        <div className="mt-5">
          <h1 className="bg-body text-dark mt-5 center">
            Velkommen til tellelista!
          </h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
