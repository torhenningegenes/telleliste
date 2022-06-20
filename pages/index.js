import StartButton from "../components/start-button";
import firebase from "../firebase/firebaseConfig";
import { Container, Button } from "react-bootstrap";
import { Fragment } from "react";
import Footer from "../components/footer";
import Link from "next/link";
import SignUp from "../context/signUp";
import BgImg from "../components/bg-img";

function Home(props) {
  const label1 = "Ny liste";
  const label2 = "Se gamle lister";
  return (
    <Fragment>
      <BgImg />
      <Container
        className="d-flex align-items-center  flex-column text-light bg-transparent overlay
"
      >
        <h1 className="text-center main__header shadow-lg ">
          Velkommen til Tellelista
        </h1>

        <Link href={"/login-user"} passHref>
          <Button className="center btn btn-lg">Login</Button>
        </Link>
        <h4 className="mt-4">Eller opprett ny bruker</h4>
        <Link href={"/new-user"} passHref>
          <Button className="center btn btn-lg">Ny bruker</Button>
        </Link>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Home;
