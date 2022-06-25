import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Barnegruppe from "./barnegruppe";
import AvdelingPage from "./[avdeling]";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select";

function RegKids() {
  const [dropdown, setDropdown] = useState();
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

  // Creating day and date
  const ukedager = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];
  const date = new Date();
  const day = new Date().getDay();
  const currentDay = ukedager[date.getDate()];
  console.log(currentDay);
  const currentDate = date.toLocaleDateString();
  console.log(currentDate);
  const avdelinger = [
    { value: "Avdeling 1", label: "Avdeling 1" },
    { value: "Avdeling 2", label: "Avdeling 2" },
    { value: "Avdeling 3", label: "Avdeling 3" },
  ];
  const router = useRouter();
  let nyArray = [];
  function filterAvdeling() {
    nyArray = barn.filter((barn) => barn.avdeling === "Avdeling 5");
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();
  //   console.log(nyArray);
  const avdelingArray = barn.filter((barn) => barn.avdeling === "Avdeling 8");
  console.log(avdelingArray);

  const avdeling = "";
  // Lage dynamiske paths basert på avdeling key.
  // Populate countlist based on avdeling key

  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="margin--top--medium">Oppmøteliste {currentDate}</h1>
        <Card
          style={{ width: "50rem" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Card.Body>
            <Card.Title className="font-weight-bold">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Select
              className="mb-3"
              options={avdelinger}
              placeholder="Velg avdeling"
              isSearchable
            />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default RegKids;
