import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
function NavBar() {
  if (1 < 2) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Link href={"/"} passHref>
            <Navbar.Brand>📝 Tellelista</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href={"/"} passHref>
                <Nav.Link>Hjem</Nav.Link>
              </Link>
              <Link href={"/telling"} passHref>
                <Nav.Link>Ny telling</Nav.Link>
              </Link>
              <span className="position-absolute end-0">
                <Navbar.Text>
                  Logget in som: <a href="#login">Bruker</a>
                </Navbar.Text>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
