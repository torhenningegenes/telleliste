import { useState } from "react";
import { useAppContext } from "../AppWrapper";

function CountButton(props) {
  const { navn, avdeling } = props;
  let [clicked, setClicked] = useState(false);
  const countContext = useAppContext();

  function handleBtnClick() {
    // Changing state.
    setClicked(true);
    countContext.push({ navn: navn, avdeling: avdeling });
    console.log(countContext);
    if (clicked === true) {
      setClicked(false);
    }

    // Pushing kids clicked to new array. Populate countlist from that array
  }
  return (
    <>
      {" "}
      <button
        className="customBtn"
        onClick={handleBtnClick}
        style={{
          backgroundColor: clicked ? "#48e055" : "grey",
          color: clicked ? "#276629" : "white",
        }}
      >
        ✓
      </button>
    </>
  );
}

export default CountButton;
