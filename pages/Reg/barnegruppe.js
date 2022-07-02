import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Kid from "./kid";
import RemoveButton from "./remove-button";
import uniqid from "uniqid";

export default function Barnegruppe(props) {
  // Here we get props
  const { sortedBarn, label, clicked, setClicked, hidden, setHidden } = props;

  return (
    <div>
      <Container>
        <h4>Lag ny telleliste</h4>
        <h5>Tilstede</h5>
        <ul>
          {sortedBarn.map((sortedBarn) => {
            return (
              <Fragment>
                <Kid
                  key={sortedBarn.id}
                  navn={sortedBarn.navn}
                  avdeling={sortedBarn.avdeling}
                  clicked={clicked}
                  setClicked={setClicked}
                />
                <RemoveButton
                  key={uniqid()}
                  sortedBarn={sortedBarn}
                  hidden={hidden}
                  setHidden={setHidden}
                />
              </Fragment>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
