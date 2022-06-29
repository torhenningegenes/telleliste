import Barnegruppe from "./barnegruppe";

function Avdeling(props) {
  //getting props
  const { barn, valgtAvdeling, clicked, setClicked } = props;
  console.log(valgtAvdeling);

  const { label } = valgtAvdeling;
  console.log(label);

  //Filter barn into avdelinger
  let sortedBarn = [];
  function filterAvdeling() {
    sortedBarn = barn.filter((barn) => barn.avdeling === `${label}`);
    console.log(sortedBarn);
  }

  //Function for determening array when selectin avdeling from drop down menu
  filterAvdeling();
  //   console.log(nyArray);
  //   const filteredBarnegrupper = function (barn) {
  //     barn.filter((avdeling) => {
  //       avdeling === `${label}`;
  //     });
  //   };

  //   console.log(filteredBarnegrupper(barn));

  if (!label === "Ingen avdeling valgt") {
    return <div>Du har ikke valgt avdeling din tullebukk!</div>;
  } else {
    return (
      <>
        <h3>Du har valgt: {label}</h3>
        <Barnegruppe
          label={label}
          sortedBarn={sortedBarn}
          clicked={clicked}
          setClicked={setClicked}
        />
      </>
    );
  }
}

export default Avdeling;
