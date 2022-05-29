import classes from "./button.module.css";
import { useState } from "react";
function CountButton() {
  let [counted, setCounted] = useState(false);
  let btnCss = classes.customBtn;

  let barnIdClicked;
  function barnCounted() {
    setCounted((current) => !current);
    console.log(counted);
    // barn id clicked.
  }
  return (
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
  );
}

export default CountButton;
