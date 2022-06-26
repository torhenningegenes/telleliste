import Kid from "./kid";
export default function Barnegruppe(props) {
  // Here we get props
  const { sortedBarn, label } = props;

  return (
    <div>
      <h3>Barnegruppe</h3>
      <ul>
        {" "}
        {sortedBarn.map((sortedBarn) => {
          return (
            <Kid
              key={sortedBarn.id}
              navn={sortedBarn.navn}
              avdeling={sortedBarn.avdeling}
            />
          );
        })}
      </ul>
    </div>
  );
}
