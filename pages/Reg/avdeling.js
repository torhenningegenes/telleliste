import Barnegruppe from "./barnegruppe";
import { Fragment, useState, useEffect } from "react";
import RegButton from "./regbutton";

import uniqid from "uniqid";

function Avdeling(props) {
  //***************** State *******************/

  const [labelToContext, setlabelToContext] = useState("");
  //***********************************************/

  //***************** Props *******************/

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
  //***********************************************/

  //***************** Context *******************/

  //***********************************************/

  //***************** Variables *******************/

  const { label } = valgtAvdeling;

  //***********************************************/

  //***************** Functions *******************/

  // //Filter barn into avdelinger
  let sortedBarn = [];
  function filterAvdeling() {
    sortedBarn = barn.filter((barn) => barn.avdeling === `${label}`);
    console.log("Hei fra sorted", sortedBarn);
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();
  //Function for setting "avdeling" label to context

  // useEffect(() => {
  //   setlabelToContext(label);
  //   myContext.push(labelToContext);
  //   console.log("Hei fra context label", myContext);
  // }, []);

  // const setAvdelingToContext = function () {
  //   if (label != "Ingen avdeling valgt") {
  //     console.log(label);
  //     myContext.push(label);
  //     console.log("Hei fra context label", myContext);
  //   }
  // };

  //***********************************************/

  // Renders UI conditionally based on choice of "avdeling"
  if (label === "Ingen avdeling valgt") {
    return (
      <Fragment>
        <h5 className="text-center text-gray-700 uppercase mt-3">
          Ingen avdeling valgt
        </h5>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h5 className="text-center">Du har valgt: {label}</h5>
        <Barnegruppe
          key={uniqid()}
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
