import Select from "react-select";
import makeAnimated from "react-select";

function DropdownAvdeling(props) {
  //********************* ******************//
  // Getting our props. Barn is sent from index
  const { barn, dbRef, kidPresent, setKidPresent } = props;

  const { valgtAvdeling, setValgtAvdeling, clicked, setClicked } = props;

  // Function for saving "Avdeling"

  // Options for selection
  const avdelinger = [
    { value: "Avdeling 1", label: "1" },
    { value: "Avdeling 2", label: "2" },
    { value: "Avdeling 3", label: "3" },
    { value: "Avdeling 4", label: "4" },
    { value: "Avdeling 5", label: "5" },
    { value: "Avdeling 6", label: "6" },
    { value: "Avdeling 7", label: "7" },
    { value: "Avdeling 8", label: "8" },
  ];
  return (
    <div className="container d-flex align-items-start justify-content-center flex-colum mb-3 ">
      {/* <Card
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
      </Card> */}

      <div className="flex justify-center">
        <div className="bg-sky-500 w-1 rounded-l-lg"></div>
        <div className="block p-6 rounded-r-lg shadow-lg bg-white max-w-sm w-96">
          <h5 className="text-gray-600 text-xl leading-tight font-medium mb-2">
            Vennligst velg avdeling
          </h5>
          <p className="text-gray-500 text-base mb-4">Velg fra listen under</p>
          <Select
            className="mb-3"
            options={avdelinger}
            placeholder="Velg avdeling"
            isSearchable
            onChange={setValgtAvdeling}
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownAvdeling;
