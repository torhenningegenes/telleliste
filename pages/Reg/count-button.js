import { useState } from "react";
import { useAppContext } from "../../context/AppWrapper";

function CountButton(props) {
  const { navn, avdeling } = props;
  let [clicked, setClicked] = useState(false);

  const countContext = useAppContext();
  const totalCounted = countContext.length;
  //console.log(totalCounted);
  // Adds a toast to notify user of how many kids has been counted.s

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
      {clicked ? (
        <button
          className="w-16 h-16 rounded-full border-1 border-green-800 mr-1 ml-1 bg-green-300 text-green-800"
          onClick={handleBtnClick}
        >
          {" "}
          ✓
        </button>
      ) : (
        <button
          className="w-16 h-16 rounded-full  mr-1 ml-1 border-1 border-sky-700 bg-gray-200 text-sky-700  hover:bg-sky-100"
          onClick={handleBtnClick}
        >
          ✓
        </button>
      )}
    </>
  );
}

export default CountButton;
