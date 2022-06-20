import SignUp from "../context/signUp";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";

function Home(props) {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <Container>
        <div className="mt-5 bg-body text-dark mt-5 center">
          <h1 className="">Velkommen til tellelista!</h1>
          {/* <h1>{currentUser.email}</h1> */}
          <h2>Dette er homepage!</h2>
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
