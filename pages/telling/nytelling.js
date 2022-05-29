import { Fragment } from "react";
import Barn from "./barn";
import classes from "./nytelling.module.css";
import { useState, useRef } from "react";

function NyTelling(props) {
  // Setting useState for holding the state for the button presses.

  const [btnColor, setBtnColor] = useState("");

  // dummy-data for kids.
  const [barn, setBarn] = useState([
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
    { id: 13, navn: "Heidi", tilstede: true, avdeling: "Avdeling 8" },
  ]);

  const ids = barn.entries();
  return (
    <Fragment>
      <div className="container-fluid ">
        <ul className="list-group text-center d-flex justify-content-center align-items-center">
          {barn.map((barn) => {
            return (
              <Barn key={barn.id} navn={barn.navn} avdeling={barn.avdeling} />
            );
          })}
          <p>Antall barn: </p>
          <button className="btn btn-info btn-lg mt-5 ">
            Registrer telling
          </button>
        </ul>
      </div>
    </Fragment>
  );
}

export default NyTelling;
