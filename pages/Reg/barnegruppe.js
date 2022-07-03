import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Kid from "./kid";

import uniqid from "uniqid";

export default function Barnegruppe(props) {
  // Here we get props
  const { sortedBarn, label, clicked, setClicked, hidden, setHidden, key } =
    props;

  // Hide Kid if not present.

  return (
    <div>
      <Container>
        <h4>Lag ny telleliste</h4>
        <h5>Tilstede</h5>
        <ul>
          {sortedBarn.map((sortedBarn, index) => {
            return (
              <Fragment>
                <Kid
                  key={index}
                  navn={sortedBarn.navn}
                  avdeling={sortedBarn.avdeling}
                  clicked={clicked}
                  setClicked={setClicked}
                  setHidden={setHidden}
                  hidden={hidden}
                />
              </Fragment>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
