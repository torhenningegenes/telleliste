import { useAppContext } from "../AppWrapper";
import { useEffect } from "react";

function AntallBarn(props) {
  let { antall } = props;

  return <p>Antall barn:{antall}</p>;
}

export default AntallBarn;
