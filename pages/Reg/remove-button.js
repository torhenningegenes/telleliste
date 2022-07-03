import classes from "./remove-button.module.css";
import uniqid from "uniqid";
function RemoveButton(props) {
  const { sortedBarn, showKid, setShowKid } = props;

  function remove() {
    // Add class hide to li.
    setShowKid(false);
    showKid ? console.log("True") : console.log("Not true");
    console.log("Removed from list");
    console.log(showKid);
  }

  return (
    <button onClick={remove} className={classes.removeBtn} key={uniqid}>
      X
    </button>
  );
}

export default RemoveButton;
