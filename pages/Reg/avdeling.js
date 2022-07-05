import Barnegruppe from "./barnegruppe";
import { Fragment } from "react";
import RegButton from "./regbutton";

function Avdeling(props) {
  //getting props
  const {
    barn,
    valgtAvdeling,
    clicked,
    setClicked,
    hidden,
    setHidden,
    kidPresent,
    setKidPresent,
  } = props;

  console.log(valgtAvdeling);

  const { label } = valgtAvdeling;
  console.log(label);

  // //Filter barn into avdelinger
  let sortedBarn = [];
  function filterAvdeling() {
    sortedBarn = barn.filter((barn) => barn.avdeling === `${label}`);
    console.log(sortedBarn);
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();

  // Renders UI conditionally based on choice of "avdeling"
  if (label === "Ingen avdeling valgt") {
    return (
      <Fragment>
        <h5 className="text-center">Ingen avdeling valgt</h5>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h5 className="text-center">Du har valgt: {label}</h5>
        <Barnegruppe
          label={label}
          sortedBarn={sortedBarn}
          clicked={clicked}
          setClicked={setClicked}
          hidden={hidden}
          setHidden={setHidden}
          kidPresent={kidPresent}
          setKidPresent={setKidPresent}
          valgtAvdeling={valgtAvdeling}
        />
      </Fragment>
    );
  }
}

export default Avdeling;
