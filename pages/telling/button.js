import classes from "./button.module.css";
import { useState } from "react";
import { useAppContext } from "../AppWrapper";

function CountButton(props) {
  let [counted, setCounted] = useState(false);
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

  function barnCounted(e) {
    setCounted(true);
    myContext.push({ navn: navn, avdeling: avdeling });
    console.log(myContext);
  }
  function regret() {
    setCounted(counted === false);
    myContext.pop({ navn: navn, avdeling: avdeling });
    console.log(myContext);
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
