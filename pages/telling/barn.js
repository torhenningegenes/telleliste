import { Fragment } from "react";
import CountButton from "./button";
import NyTelling from "./nytelling";
function Barn(props) {
  const { id, navn } = props;
  console.log(id, navn);

  return (
    <Fragment>
      <li className="list-group-item list-barn" key={id}>
        <h3>{navn}</h3>
        <CountButton />
      </li>
    </Fragment>
  );
}

export default Barn;
