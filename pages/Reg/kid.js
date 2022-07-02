import uniqid from "uniqid";
import { Button } from "react-bootstrap";
import CountButton from "./count-button";
import { Fragment } from "react";
function Kid(props) {
  const { key, navn, avdeling, clicked, setClicked, hidden } = props;
  console.log("Fra kids.js " + hidden);
  return (
    <Fragment>
      <li
        className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4"
        key={uniqid}
      >
        <div className="navnOgAvdeling">{navn}</div>
        <div className="navnOgAvdeling">{avdeling}</div>
        <CountButton
          navn={navn}
          avdeling={avdeling}
          clicked={clicked}
          setClicked={setClicked}
        />
      </li>
    </Fragment>
  );
}

export default Kid;
