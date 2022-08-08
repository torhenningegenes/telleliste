import DropdownAvdeling from "./dropdown-avdeling";
import { Container, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import uniqid from "uniqid";
import Avdeling from "./avdeling";
import { useState } from "react";
import CurrentDate from "../../components/current-date";
import RegButton from "./regbutton";

function RegKids() {
  const [isLoading, setIsLoading] = useState("Loading...");
  const [valgtAvdeling, setValgtAvdeling] = useState({
    value: "Ingen avdeling valgt",
    label: "Ingen avdeling valgt",
  });
  const [clicked, setClicked] = useState(false);
  const [counted, setCounted] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [kidPresent, setKidPresent] = useState(valgtAvdeling);

  // Labels for regButton
  const regAttendence = "Registrer oppmøte";
  const regCount = "Registrer telling";

  // Here there will be a API-call to the firebase server for fetching the children. For Now we use dummy data.
  // One page per department. passing kids as props
  const barn = [
    { id: uniqid(), navn: "Louise", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Lars", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Mette", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Niklas", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Lily", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Tobias", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Andreas", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Marte", tilstede: true, avdeling: "Avdeling 1" },
    { id: uniqid(), navn: "Isolde", tilstede: true, avdeling: "Avdeling 1'" },
    { id: uniqid(), navn: "Aria", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Per", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Olav", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Kari", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Harald", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Sonja", tilstede: true, avdeling: "Avdeling 8" },
    {
      id: uniqid(),
      navn: "Mette-Marit",
      tilstede: true,
      avdeling: "Avdeling 8",
    },
    { id: uniqid(), navn: "Haakon", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Magnus", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Ellie", tilstede: true, avdeling: "Avdeling 8" },
    { id: uniqid(), navn: "Nora", tilstede: true, avdeling: "Avdeling 8" },
    {
      id: uniqid(),
      navn: "Tor Henning",
      tilstede: true,
      avdeling: "Avdeling 8",
    },
    { id: uniqid(), navn: "Stian", tilstede: true, avdeling: "Avdeling 5" },
    { id: uniqid(), navn: "Lisbet", tilstede: true, avdeling: "Avdeling 5" },
    { id: uniqid(), navn: "Joakim", tilstede: true, avdeling: "Avdeling 5" },
    { id: uniqid(), navn: "Michael", tilstede: true, avdeling: "Avdeling 5" },
    { id: uniqid(), navn: "Christian", tilstede: true, avdeling: "Avdeling 5" },
  ];

  const router = useRouter();

  // let nyArray = [];
  // function filterAvdeling() {
  //   nyArray = barn.filter((barn) => barn.avdeling === "Avdeling 5");
  // }

  // //Function for determening array when selectin avdeling from drop down menu
  // filterAvdeling();
  // //   console.log(nyArray);
  // const avdelingArray = barn.filter((barn) => barn.avdeling === "Avdeling 8");
  //   console.log(avdelingArray);

  const avdeling = "";
  // Lage dynamiske paths basert på avdeling key.
  // Populate countlist based on avdeling key
  // When the user chooses department, remove

  return (
    <>
      <div className=" container d-flex flex-column align-items-center justify-content-center h-100 bg-light ">
        <h1 className="text-dark margin--top--medium d-flex align-items-center justify-content-center">
          {regCount}
        </h1>
        <h3>
          <CurrentDate />
        </h3>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <DropdownAvdeling
            barn={barn}
            valgtAvdeling={valgtAvdeling}
            setValgtAvdeling={setValgtAvdeling}
            clicked={clicked}
            setClicked={setClicked}
            kidPresent={kidPresent}
            setKidPresent={setKidPresent}
          />
          <Card
            style={{ width: "30rem" }}
            className="d-flex align-items-center justify-content-center text-center mt-3 mb-3 shadow rounded"
          >
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Avdeling
                valgtAvdeling={valgtAvdeling}
                barn={barn}
                clicked={clicked}
                setClicked={setClicked}
                hidden={hidden}
                setHidden={setHidden}
                kidPresent={kidPresent}
                setKidPresent={setKidPresent}
              />
              <RegButton
                clicked={clicked}
                setClicked={setClicked}
                valgtAvdeling={valgtAvdeling}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RegKids;
