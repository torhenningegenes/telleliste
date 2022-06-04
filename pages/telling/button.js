import classes from "./button.module.css";
import { useState } from "react";

function CountButton() {
  let [counted, setCounted] = useState(false);
  const btnCss = classes.customBtn;
  const regBtn = classes.regretBtn;

  // let barnIdClicked;
  // function barnCounted() {
  //   setCounted((current) => !current);
  //   console.log(counted);
  //   // barn id clicked.}

  function barnCounted(e) {
    setCounted((counted = true));
  }
  function regret() {
    setCounted((counted = false));
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
        isKidCounted={counted}
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
