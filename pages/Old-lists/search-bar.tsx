import { Fragment, useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

function SearchBar(props) {
  const { formState, setFormState } = props;
  let formRef: string = useRef("Søk her");

  // Take value from search. Use string methods like make lower case and remove whitespaces. Then filter on word `.filter(${input})`
  // If ${input} === true render html with list.

  return (
    <Fragment>
      <Container
        className="bg-white shadow p-2
"
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Søk i gamle lister</Form.Label>
            <Form.Control
              type="search"
              placeholder="Søk her"
              value={formState}
              onChange={(e) => setFormState(e.target.value)}
            />
            {/* <Form.Text className="text-muted">Søk</Form.Text> */}
          </Form.Group>

          <Button variant="primary" type="submit" className="rounded btn-lg">
            Søk etter gamle lister
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
}

export default SearchBar;