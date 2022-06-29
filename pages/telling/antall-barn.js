import { useAppContext } from "../AppWrapper";
import { useEffect } from "react";

function AntallBarn(props) {
  let { antall } = props;

  return <div>Antall barn:{antall}</div>;
}

export default AntallBarn;
