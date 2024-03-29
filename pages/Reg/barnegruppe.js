import uniqid from "uniqid";
import Kid from "./kid";

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
  } = props;

  console.log("Hei fra barnegruppe", sortedBarn);
  console.log("Navn: ", sortedBarn["Barnets fornavn"]);
  return (
    <div className="container ">
      {sortedBarn.avdeling != "Ingen avdeling valgt" ? (
        <ul className="flex flex-col justify-center justify-items-center align-items-center pl-0 min-w-min">
          {sortedBarn.map((sortedBarn, index) => {
            return (
              <>
                <Kid
                  key={uniqid()}
                  navn={sortedBarn["Barnets fornavn"]}
                  //avdeling={sortedBarn.avdeling}
                  avdeling={label}
                  clicked={clicked}
                  setClicked={setClicked}
                  setHidden={setHidden}
                  hidden={hidden}
                  label={label}
                />
              </>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
