import Link from "next/link";

import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";
import BgImg from "../components/bg-img";
import WriteToDB from "../firebase/writeToDB";

import ReadFromDB from "../firebase/readFromDB";

function Home(props) {
  const { currentUser } = useAuth();
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center flex-column text-dark bg-light "
      >
        <section className="margin--top--medium center bg-white p-3 shadow rounded-1">
          <h1 className="">Velkommen til tellelista!</h1>
          {/* <h1>{currentUser.email}</h1> */}
          <h2>Dette er en beskyttet rute!</h2>
          <Link href={"/Reg"} passHref>
            <Button variant="primary" className="mx-2">
              Ny telling
            </Button>
          </Link>
          <Link href={"/Old-lists"} passHref>
            <Button variant="primary">Finn gammel liste</Button>
          </Link>
        </section>
      </Container>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <div className="container mx-auto flex justify-center">hei på deg</div>
    </>
  );
}

export default Home;
