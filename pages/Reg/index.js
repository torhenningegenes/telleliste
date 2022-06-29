import DropdownAvdeling from "../../components/layout/dropdown-avdeling";
import { Container, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Barnegruppe from "./barnegruppe";
import AvdelingPage from "./[avdeling]";
import { useState } from "react";
import CurrentDate from "../../components/current-date";
import Avdeling from "./avdeling";
import BgImg from "../../components/bg-img";

function RegKids() {
  const [isLoading, setIsLoading] = useState("Loading...");
  const [valgtAvdeling, setValgtAvdeling] = useState({
    value: "Ingen avdeling valgt",
    label: "Ingen avdeling valgt",
  });
  const [clicked, setClicked] = useState(false);
  // Here there will be a API-call to the firebase server for fetching the children. For Now we use dummy data.
  // One page per department. passing kids as props
  const barn = [
    { id: 1, navn: "Louise", tilstede: true, avdeling: "Avdeling 1" },
    { id: 2, navn: "Lars", tilstede: true, avdeling: "Avdeling 1" },
    { id: 3, navn: "Mette", tilstede: true, avdeling: "Avdeling 1" },
    { id: 4, navn: "Niklas", tilstede: true, avdeling: "Avdeling 1" },
    { id: 5, navn: "Lily", tilstede: true, avdeling: "Avdeling 1" },
    { id: 6, navn: "Tobias", tilstede: true, avdeling: "Avdeling 1" },
    { id: 7, navn: "Andreas", tilstede: true, avdeling: "Avdeling 1" },
    { id: 9, navn: "Marte", tilstede: true, avdeling: "Avdeling 1" },
    { id: 8, navn: "Isolde", tilstede: true, avdeling: "Avdeling 1'" },
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

  const router = useRouter();

  let nyArray = [];
  function filterAvdeling() {
    nyArray = barn.filter((barn) => barn.avdeling === "Avdeling 5");
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();
  //   console.log(nyArray);
  const avdelingArray = barn.filter((barn) => barn.avdeling === "Avdeling 8");
  //   console.log(avdelingArray);

  const avdeling = "";
  // Lage dynamiske paths basert på avdeling key.
  // Populate countlist based on avdeling key
  // When the user chooses department, remove

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <BgImg />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="margin--top--medium d-flex align-items-center justify-content-center">
          Oppmøteliste <CurrentDate />
        </h1>
        <DropdownAvdeling
          barn={barn}
          valgtAvdeling={valgtAvdeling}
          setValgtAvdeling={setValgtAvdeling}
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>
    </Container>
  );
}

export default RegKids;
