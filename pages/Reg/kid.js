import uniqid from "uniqid";
import { Button } from "react-bootstrap";
import CountButton from "./count-button";
function Kid(props) {
  const { navn, avdeling, clicked, setClicked } = props;

  return (
    <li
      className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4"
      key={uniqid}
    >
      <div className="navnOgAvdeling">{navn}</div>
      <div className="navnOgAvdeling">{avdeling}</div>
      <CountButton
        navn={navn}
        avdeling={avdeling}
        clicked={clicked}
        setClicked={setClicked}
      />
    </li>
  );
}

export default Kid;
