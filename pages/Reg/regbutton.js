import { useAppContext } from "../../context/AppWrapper";
import { getDatabase, push, ref, set } from "firebase/database";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegButton(props) {
  //Getting context
  const myContext = useAppContext();
  //Setting router
  const router = useRouter();
  const [tellingRegistrert, setTellingRegistrert] = useState(null);

  const { clicked, setClicked, valgtAvdeling } = props;

  const label = valgtAvdeling;

  const notify = () =>
    toast.info("Tellingen er registert!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // Creating date object.
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("nb-No", options);
  const time = new Date().toLocaleTimeString();
  const currentDate = `Dato: ${date}, Klokken: ${time}`;

  //console.log(currentDate);

  // Function for writing to the database
  function regCountHandler() {
    myContext.push({ dato: date, klokkeslett: time });
    const db = getDatabase();
    //push(ref(db, "Tellinger"), myContext);
    push(ref(db, "Tellinger"), myContext);

    myContext.length = 0;
    console.log("Telling registrert");
    console.log(myContext);
    setClicked(false);

    notify();
    router.push("/Reg");
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
    <div className="flex justify-center">
      {tellingRegistrert ? <p>Telling er registrert</p> : null}
      <button
        className=" bg-sky-700 text-sky-100  rounded-full w-40 h-12 mt-5 mb-4 text-center hover:bg-sky-500 hover:text-gray-600"
        onClick={regCountHandler}
      >
        Registrer telling
      </button>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
export default RegButton;
