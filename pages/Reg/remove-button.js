import classes from "./remove-button.module.css";
import uniqid from "uniqid";
function RemoveButton(props) {
  const { sortedBarn, hidden, setHidden } = props;
  let presentBarn = sortedBarn;

  function remove() {
    // Add class hide to li.
    setHidden(true);
    console.log("Removed from list");
    console.log(hidden);
  }

  return (
    <button onClick={remove} className={classes.removeBtn} key={uniqid}>
      X
    </button>
  );
}

export default RemoveButton;
