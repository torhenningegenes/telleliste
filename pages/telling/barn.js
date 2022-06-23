import { Fragment, useState, useRef } from "react";
import CountButton from "./button";
import NyTelling from "./nytelling";
function Barn(props) {
  const { id, navn, avdeling } = props;
  const [totalKids, setTotalKids] = useRef();

  //console.log(id, navn);

  return (
    <>
      <li
        className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4"
        key={id}
      >
        <div className="navnOgAvdeling">
          <h4>{navn}</h4>
          <h6>{avdeling}</h6>
        </div>
        <CountButton
          navn={navn}
          avdeling={avdeling}
          total={totalKids}
          setTotal={setTotalKids}
        />
      </li>
    </>
  );
}

export default Barn;
