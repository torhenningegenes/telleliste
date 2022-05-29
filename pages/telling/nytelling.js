import { Fragment } from "react";
import Barn from "./barn";
import classes from "./nytelling.module.css";
import { useState, useRef } from "react";

function NyTelling(props) {
  // Setting useState for holding the state for the button presses.

  const [btnColor, setBtnColor] = useState("");

  // dummy-data for kids.
  const [barn, setBarn] = useState([
    { id: 1, navn: "Aria", tilstede: true },
    { id: 2, navn: "Per", tilstede: true },
    { id: 3, navn: "Olav", tilstede: true },
    { id: 4, navn: "Kari", tilstede: true },
    { id: 5, navn: "Harald", tilstede: true },
    { id: 6, navn: "Sonja", tilstede: true },
    { id: 7, navn: "Mette-Marit", tilstede: true },
    { id: 8, navn: "Haakon", tilstede: true },
    { id: 9, navn: "Magnus", tilstede: true },
    { id: 10, navn: "Ellie", tilstede: true },
    { id: 11, navn: "Nora", tilstede: true },
    { id: 12, navn: "Tor Henning", tilstede: true },
    { id: 13, navn: "Heidi", tilstede: true },
  ]);

  const ids = barn.entries();
  return (
    <Fragment>
      <div className="container ">
        <ul className="list-group text-center d-flex justify-content-center align-items-center">
          {barn.map((barn) => {
            return <Barn key={barn.id} navn={barn.navn} />;
          })}
          <button className="btn btn-info btn-lg mt-5 ">
            Registrer telling
          </button>
        </ul>
      </div>
    </Fragment>
  );
}

export default NyTelling;
