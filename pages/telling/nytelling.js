import { Fragment } from "react";
import Barn from "./barn";

function NyTelling(props) {
  const barn = [
    { id: 1, navn: "Aria", tilstede: true },
    { id: 2, navn: "Per", tilstede: true },
    { id: 3, navn: "Olav", tilstede: true },
    { id: 4, navn: "Kari", tilstede: true },
    { id: 5, navn: "Harald", tilstede: true },
    { id: 6, navn: "Sonja", tilstede: true },
    { id: 7, navn: "Mette-Marit", tilstede: true },
    { id: 8, navn: "Haakon", tilstede: true },
    { id: 9, navn: "Magnus", tilstede: true },
    { id: 10, navn: "Ellie", tilstede: true },
    { id: 11, navn: "Nora", tilstede: true },
    { id: 12, navn: "Tor Henning", tilstede: true },
    { id: 13, navn: "Heidi", tilstede: true },
  ];

  return (
    <Fragment>
      <div className="container">
        <ul className="list-group center">
          {barn.map((b, i) => (
            <li className="list-group-item">
              <Barn key={i} navn={b.navn} />
              <button>Tellt</button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default NyTelling;
