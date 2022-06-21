import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { useAuth } from "../context/auth-context";
import { useRouter } from "next/router";

function StartNav() {
  // Need to get user from context
  const { currentUser, logOut } = useAuth();
  console.log(currentUser);
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link href={"/home"} passHref>
          <Navbar.Brand>📝 Tellelista</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Link href={"/"} passHref>
              <Nav.Link>Om tellelista</Nav.Link>
            </Link>
          </Nav>
          {/* Adding a new <Nav> element seperates the content in the menu */}
          <Nav className="me-auto text-center">
            <Link href={"/"} passHref>
              <Nav.Link>Hjem</Nav.Link>
            </Link>
            <Link href={"/telling"} passHref>
              <Nav.Link>Ny telling</Nav.Link>
            </Link>
            <Link href={"/"} passHref>
              <Nav.Link>Gamle lister</Nav.Link>
            </Link>
            {currentUser ? (
              <Button
                variant="outline-info"
                valu="Logg ut"
                onClick={() => {
                  logOut();
                  router.push("/");
                }}
              >
                Logg ut
              </Button>
            ) : (
              <>
                <Link href={"/login-user"} passHref>
                  <Button
                    className=" mb-2 me-2"
                    variant="info"
                    as="input"
                    type="submit"
                    value="Logg inn"
                  />
                </Link>

                <Link href={"/new-user"} passHref>
                  <Button
                    className=" mb-2"
                    variant="outline-info"
                    as="input"
                    type="submit"
                    value="Ny bruker"
                  />
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StartNav;
