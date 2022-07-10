import { Form, Button, Container } from "react-bootstrap";
import { Fragment } from "react";

function SearchBar() {
  return (
    <Fragment>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Søk i gamle lister</Form.Label>
            <Form.Control type="email" placeholder="Søk her" />
            {/* <Form.Text className="text-muted">Søk</Form.Text> */}
          </Form.Group>

          <Button variant="primary" type="submit" className="rounded btn-lg">
            Søk
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
}

export default SearchBar;
