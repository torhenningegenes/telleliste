import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
function NavBar() {
  // Need to get user from context
  const bruker = "Bruker";
  const avdeling = "Avdeling";

  if (1 < 2) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Link href={"/"} passHref>
            <Navbar.Brand>📝 Tellelista</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
            </Nav>
            {/* Adding a new <Nav> element seperates the content in the menu */}
            <Nav>
              <Navbar.Text className="me-2 text-center">
                <a href="#login">{`Hei ${bruker}, ${avdeling}`}</a>
              </Navbar.Text>
              <Button
                variant="outline-info"
                as="input"
                type="submit"
                value="Logout"
                size="sm"
              />
              Logout
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
