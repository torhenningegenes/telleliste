import { Container, Card, Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select";
import Avdeling from "./avdeling";

function DropdownAvdeling(props) {
  //********************* ******************//
  // Getting our props. Barn is sent from index
  const { barn, kidPresent, setKidPresent } = props;

  const { valgtAvdeling, setValgtAvdeling, clicked, setClicked } = props;

  //********************* ******************//
  // if ref.value.current = avdeling 1 do filter avdeling avdeling 1.
  let nyArray = [];
  function filterAvdeling() {
    nyArray = barn.filter((barn) => barn.avdeling === "Avdeling 5");
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();
  // console.log(nyArray);

  // Function for saving "Avdeling"

  //********************* ******************//
  // make a object based on avdelinger in barn.
  function createOptions(barn) {
    // console.log("Hei fra values " + Object.values(barn));
  }
  createOptions(barn);

  //********************* ******************//
  // Options for selection
  const avdelinger = [
    { value: "Avdeling 1", label: "Avdeling 1" },
    { value: "Avdeling 2", label: "Avdeling 2" },
    { value: "Avdeling 3", label: "Avdeling 3" },
    { value: "Avdeling 4", label: "Avdeling 4" },
    { value: "Avdeling 5", label: "Avdeling 5" },
    { value: "Avdeling 6", label: "Avdeling 6" },
    { value: "Avdeling 7", label: "Avdeling 7" },
    { value: "Avdeling 8", label: "Avdeling 8" },
  ];
  return (
    <Container className="d-flex align-items-start justify-content-center flex-colum ">
      <Card
        style={{ width: "30rem" }}
        className="d-flex align-items-center justify-content-center mt-3 mb-3 shadow rounded"
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
            onChange={setValgtAvdeling}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DropdownAvdeling;
