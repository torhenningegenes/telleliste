import uniqid from "uniqid";
import { Button } from "react-bootstrap";
import CountButton from "./count-button";
import RemoveButton from "./remove-button";
import { Fragment } from "react";
import { useState } from "react";
function Kid(props) {
  const { key, navn, avdeling, clicked, setClicked } = props;

  const [showKid, setShowKid] = useState(true);
  return (
    <Fragment>
      {showKid ? (
        <li className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4">
          <div className="navnOgAvdeling">{navn}</div>
          <div className="navnOgAvdeling">{avdeling}</div>
          <CountButton
            key={uniqid()}
            navn={navn}
            avdeling={avdeling}
            clicked={clicked}
            setClicked={setClicked}
          />

          <RemoveButton
            key={uniqid()}
            showKid={showKid}
            setShowKid={setShowKid}
          />
        </li>
      ) : null}
    </Fragment>
  );
}

export default Kid;
