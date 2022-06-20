import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function StartNav() {
  // Need to get user from context
  const bruker = "Bruker";
  const avdeling = "Avdeling";
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link href={"/"} passHref>
          <Navbar.Brand>📝 Tellelista - Digital telling</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Link href={"/"} passHref>
              <Nav.Link>Om tellelista</Nav.Link>
            </Link>
          </Nav>
          {/* Adding a new <Nav> element seperates the content in the menu */}
          <Nav>
            {/* <Navbar.Text className="me-2 text-center">
              <a href="#login">{`Hei ${bruker}, ${avdeling}`}</a>
            </Navbar.Text> */}
            <Button
              variant="info"
              as="input"
              type="submit"
              value="Logg inn"
              size="lg"
            />
            Logg-in
            <Button
              variant="outline-info"
              as="input"
              type="submit"
              value="Ny bruker"
              size="lg"
            />
            Ny bruker
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StartNav;
