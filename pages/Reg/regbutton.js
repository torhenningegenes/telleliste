import { useAppContext } from "../AppWrapper";
import { getDatabase, push, ref, set } from "firebase/database";

function RegButton(props) {
  //Getting context
  const myContext = useAppContext();
  // total count

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

  // Function for writing to the database
  function regCountHandler() {
    myContext.push({ dato: currentDate });
    const db = getDatabase();
    push(ref(db, "Tellinger"), myContext);
    myContext.length = 0;
    console.log("Telling registrert");
    console.log(myContext);
  }

  //

  //
  // }}

  // function for pushing context to local storage/ JSON
  //   function regCountHandler() {
  //     if (myContext) {
  //         console.log("Telling registrert");

  //       myContext.push({ dato: currentDate });
  //       console.log(myContext);
  //       if (myContext.length < 0) {
  //         myContext.length = 0;
  //       }
  //       console.log(myContext);
  //     }
  //   }

  return (
    <button
      className="btn btn-info btn-lg mt-5 mb-4 "
      onClick={regCountHandler}
    >
      Registrer telling
    </button>
  );
}
export default RegButton;
