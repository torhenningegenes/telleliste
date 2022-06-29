import Link from "next/link";

import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";
import BgImg from "../components/bg-img";

function Home(props) {
  const { currentUser } = useAuth();
  return (
    <>
      <Container className="d-flex align-items-center flex-column text-light">
        <BgImg />
        <section className="margin--top--medium center">
          <h1 className="">Velkommen til tellelista!</h1>
          {/* <h1>{currentUser.email}</h1> */}
          <h2>Dette er en beskyttet rute!</h2>
          <Link href={"/Reg"} passHref>
            <Button variant="light">Registrer barnegruppe</Button>
          </Link>
        </section>
      </Container>
    </>
  );
}

export default Home;
