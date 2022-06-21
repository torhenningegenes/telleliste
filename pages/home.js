import SignUp from "../context/signUp";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";
import BgImg from "../components/bg-img";

function Home(props) {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <Container>
        <BgImg />
        <div className="bg-transparent text-light center overlay margin--top--medium ">
          <h1 className="">Velkommen til tellelista!</h1>
          {/* <h1>{currentUser.email}</h1> */}
          <h2>Dette er en beskyttet rute!</h2>
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
