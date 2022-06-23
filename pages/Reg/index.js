import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";

function RegKids() {
  // Here there will be a API-call to the firebase server for fetching the children. For Now we use dummy data.
  // One page per department. passing kids as props
  const barn = [
    { id: 1, navn: "Aria", tilstede: true, avdeling: "Avdeling 8" },
    { id: 2, navn: "Per", tilstede: true, avdeling: "Avdeling 8" },
    { id: 3, navn: "Olav", tilstede: true, avdeling: "Avdeling 8" },
    { id: 4, navn: "Kari", tilstede: true, avdeling: "Avdeling 8" },
    { id: 5, navn: "Harald", tilstede: true, avdeling: "Avdeling 8" },
    { id: 6, navn: "Sonja", tilstede: true, avdeling: "Avdeling 8" },
    { id: 7, navn: "Mette-Marit", tilstede: true, avdeling: "Avdeling 8" },
    { id: 8, navn: "Haakon", tilstede: true, avdeling: "Avdeling 8" },
    { id: 9, navn: "Magnus", tilstede: true, avdeling: "Avdeling 8" },
    { id: 10, navn: "Ellie", tilstede: true, avdeling: "Avdeling 8" },
    { id: 11, navn: "Nora", tilstede: true, avdeling: "Avdeling 8" },
    { id: 12, navn: "Tor Henning", tilstede: true, avdeling: "Avdeling 8" },
    { id: 13, navn: "Stian", tilstede: true, avdeling: "Avdeling 5" },
    { id: 13, navn: "Lisbet", tilstede: true, avdeling: "Avdeling 5" },
    { id: 13, navn: "Joakim", tilstede: true, avdeling: "Avdeling 5" },
    { id: 13, navn: "Michael", tilstede: true, avdeling: "Avdeling 5" },
    { id: 13, navn: "Christian", tilstede: true, avdeling: "Avdeling 5" },
  ];

  barn[2].tilstede = false;
  const testBarn = barn[2];
  console.log(barn[2].tilstede);

  return (
    <Container>
      <div>
        <h1 className="margin--top--medium">Registrere kids</h1>
        <DropdownButton
          variant="outline-secondary"
          title="Velg avdeling"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Avdeling 1</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 2</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 3</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 4</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 5</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 6</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 7</Dropdown.Item>
          <Dropdown.Item href="#">Avdeling 8</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <div></div>
      </div>
    </Container>
  );
}

export default RegKids;
