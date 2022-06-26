import { Container, Card, Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select";

function Dropdown() {
  const avdelinger = [
    { value: "Avdeling 1", label: "Avdeling 1" },
    { value: "Avdeling 2", label: "Avdeling 2" },
    { value: "Avdeling 3", label: "Avdeling 3" },
  ];
  return (
    <Container className="d-flex align-items-center justify-content-center ">
      <Card
        style={{ width: "50rem" }}
        className="d-flex align-items-center justify-content-center mt-3 mb-3"
      >
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <h2> Vennligst velg avdeling</h2>
          </Card.Title>
          <Card.Text>Velg fra listen under</Card.Text>
          <Select
            className="mb-3"
            options={avdelinger}
            placeholder="Velg avdeling"
            isSearchable
          />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dropdown;
