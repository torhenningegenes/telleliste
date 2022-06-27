import { useState } from "react";
function CountButton(props) {
  const { handleClick } = props;
  let [clicked, setClicked] = useState(false);
  function handleBtnClick() {
    setClicked(true);
    console.log("click");
    if (clicked === true) {
      setClicked(false);
    }
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
        {" "}
        ✓{" "}
      </button>
    </>
  );
}

export default CountButton;
