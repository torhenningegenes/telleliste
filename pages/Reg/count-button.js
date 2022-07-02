import { useState } from "react";
import { useAppContext } from "../AppWrapper";

function CountButton(props) {
  const { navn, avdeling } = props;
  let [clicked, setClicked] = useState(false);
  const countContext = useAppContext();

  function handleBtnClick() {
    // Changing state.

    if (clicked === true) {
      setClicked(false);
      countContext.pop({ navn: navn, avdeling: avdeling });
      console.log(countContext);
    } else {
      setClicked(true);
      countContext.push({ navn: navn, avdeling: avdeling });
      console.log(countContext);
    }

    // Pushing kids clicked to new array. Populate countlist from that array
  }
  return (
    <>
      <button
        className="customBtn"
        onClick={handleBtnClick}
        style={{
          backgroundColor: clicked ? "#48e055" : "#B7B7B7",
          color: clicked ? "#276629" : "white",
        }}
      >
        ✓
      </button>
    </>
  );
}

export default CountButton;
