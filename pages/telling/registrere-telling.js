import { setUseAppContext, useAppContext } from "../AppWrapper";

function RegistrereTelling(props) {
  //Getting context
  const myContext = useAppContext();
  // total count
  let totalKids = myContext.lenght;

  // Creating date object.
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("nb-No", options);
  const time = new Date().toLocaleTimeString();
  const currentDate = `${date} ${time}`;

  //console.log(currentDate);

  // function for pushing context to local storage/ JSON
  function regCountHandler() {
    if (myContext) {
      console.log("Telling registrert");

      myContext.push({ dato: currentDate });
      let myContext_serialized = JSON.stringify(myContext);
      localStorage.setItem(myContext, myContext_serialized);
      const liste1 = JSON.parse(localStorage.getItem(myContext));
      console.log(liste1);
      if (myContext.lenght < 0) {
        myContext.lenght = 0;
      }
      console.log(localStorage);
    }
  }
  return (
    <div>
      <button
        className="btn btn-info btn-lg mt-5 mb-4 "
        onClick={regCountHandler}
      >
        Registrer telling
      </button>
    </div>
  );
}

export default RegistrereTelling;
