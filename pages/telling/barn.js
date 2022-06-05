import { Fragment } from "react";
import CountButton from "./button";
import NyTelling from "./nytelling";
function Barn(props) {
  const { id, navn, avdeling } = props;
  //console.log(id, navn);

  return (
    <li
      className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center"
      key={id}
    >
      <div className="navnOgAvdeling">
        <h4>{navn}</h4>
        <h6>{avdeling}</h6>
      </div>
      <CountButton navn={navn} avdeling={avdeling} />
    </li>
  );
}

export default Barn;
