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

      <div className="container justify-center font-sans flex flex-col mt-6 h-36 bg-gray-200 ">
        <div className="h-12 w-64 bg-white rounded-t-lg">
          <div className=" text-gray-600 mt-2 ml-9 text-left text-lg tracking-wider">
            Avdeling 5
          </div>
        </div>
        <div className="h-12 w-64 bg-blue-500 rounded-b-lg flex flex-row align-baseline justify-around">
          <div className="text-blue-100 mt-3 ml-3 tracking-wider">
            Se hele listen
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-3 mr-7 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Home;
