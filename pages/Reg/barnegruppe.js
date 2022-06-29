import { Container } from "react-bootstrap";
import Kid from "./kid";
export default function Barnegruppe(props) {
  // Here we get props
  const { sortedBarn, label, clicked, setClicked } = props;

  return (
    <div>
      <Container>
        <h4>Lag ny telleliste</h4>
        <h5>Tilstede</h5>
        <ul>
          {sortedBarn.map((sortedBarn) => {
            return (
              <Kid
                key={sortedBarn.id}
                navn={sortedBarn.navn}
                avdeling={sortedBarn.avdeling}
                clicked={clicked}
                setClicked={setClicked}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
