import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Kid from "./kid";

import uniqid from "uniqid";
import RegButton from "./regbutton";

export default function Barnegruppe(props) {
  // Here we get props
  const {
    valgtAvdeling,
    sortedBarn,
    label,
    clicked,
    setClicked,
    hidden,
    setHidden,
    key,
  } = props;

  return (
    <div>
      {sortedBarn.avdeling != "Ingen avdeling valgt" ? (
        <Container>
          <ul>
            {sortedBarn.map((sortedBarn, index) => {
              return (
                <Fragment>
                  <Kid
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
      ) : null}
    </div>
  );
}
