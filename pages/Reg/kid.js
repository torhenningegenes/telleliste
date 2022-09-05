import uniqid from "uniqid";

import { useAppContext } from "../../context/AppWrapper";
import CountButton from "./count-button";
import RemoveButton from "./remove-button";
import { Fragment } from "react";
import { useState } from "react";
function Kid(props) {
  const { navn, avdeling, clicked, setClicked, label } = props;

  const [showKid, setShowKid] = useState(true);

  const countContext = useAppContext();
  let numberCounted = countContext.length;

  return (
    <Fragment>
      {showKid ? (
        <>
          {/* <p>{numberCounted}</p> */}
          <li
            key={uniqid()}
            //className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4 shadow border-0 rounded-1"
            className="h-auto w-72  list-none flex flex-row justify-start  items-center rounded shadow mt-2 "
          >
            <div className="sidebar">
              {clicked ? (
                null()
              ) : (
                <div className=" w-1 h-48  bg-sky-500 rounded-tl rounded-bl"></div>
              )}
            </div>

            <div className="cardItems flex flex-col flex-grow justify-around items-center py-2">
              <div
                className="navnOgAvdeling text-lg uppercase text-gray-700 tracking-wide"
                key={uniqid()}
              >
                {navn}
              </div>
              {/* <div className="navnOgAvdeling text-gray-500" key={uniqid()}>
                {avdeling}
              </div> */}
              <div>
                <CountButton
                  key={uniqid()}
                  navn={navn}
                  avdeling={avdeling}
                  clicked={clicked}
                  setClicked={setClicked}
                  label={label}
                />

                <RemoveButton
                  key={uniqid()}
                  showKid={showKid}
                  setShowKid={setShowKid}
                />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li
          key={uniqid()}
          className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center text-muted mt-4 shadow border-0 rounded-1"
        >
          <div>Ikke til stede</div>
          <div className="navnOgAvdeling">{navn}</div>
          <div className="navnOgAvdeling">{avdeling}</div>
        </li>
      )}
    </Fragment>
  );
}

export default Kid;
