import classes from "./button.module.css";
import { useState, useRef } from "react";
import { useAppContext } from "../AppWrapper";

function CountButton(props) {
  //We dont need to use state on the count button
  let [counted, setCounted] = useState(false);
  let totalKids = useRef(0);
  const btnCss = classes.customBtn;
  const regBtn = classes.regretBtn;
  const { navn, avdeling } = props;
  const myContext = useAppContext();
  // console.log(myContext[0].barnTelt);
  // let barnIdClicked;
  // function barnCounted() {
  //   setCounted((current) => !current);
  //   console.log(counted);
  //   // barn id clicked.}

  function barnCounted() {
    setCounted(true);
    myContext.push({ navn: navn, avdeling: avdeling });
    console.log(myContext);
    totalKids.current = totalKids.current + 1;
    console.log("Ref" + totalKids.current);
  }
  function regret() {
    setCounted(counted === false);
    myContext.pop({ navn: navn, avdeling: avdeling });
    console.log(myContext);
    totalKids.current = totalKids.current - 1;
    console.log(totalKids.current);
  }

  return (
    <div>
      <button
        id="countBtn"
        className={`${btnCss}`}
        onClick={barnCounted}
        style={{
          backgroundColor: counted ? "#48e055" : "grey",
          color: counted ? "#276629" : "white",
        }}
      >
        ✓
      </button>

      <button onClick={regret} className={regBtn}>
        X
      </button>
    </div>
  );
}

export default CountButton;
