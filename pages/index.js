import { Container, Button } from "react-bootstrap";
import { Fragment } from "react";
import Footer from "../components/layout/footer";
import Link from "next/link";
import BgImg from "../components/bg-img";
import { useAuth } from "../context/auth-context";
import { useRouter } from "next/router";

function Home(props) {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (currentUser) {
    console.log(`${currentUser.email} is logged in`);
    // router.push("/home");
  }
  return (
    <Fragment>
      <Container
        className="d-flex align-items-center flex-column text-light container-fluid bg-transparent
        "
      >
        <BgImg />
        <h1 className="text-center main__header shadow-lg mb-5 telle--lista--heading1">
          Velkommen til Tellelista for barnehage
        </h1>

        <Link href={"/login-user"} passHref>
          <Button variant="light" className="center btn btn-lg mb-5 text-dark">
            Login
          </Button>
        </Link>

        <Link href={"/new-user"} passHref>
          <Button variant="light" className="center btn btn-lg text-dark">
            Ny bruker
          </Button>
        </Link>
      </Container>
    </Fragment>
  );
}

export default Home;
