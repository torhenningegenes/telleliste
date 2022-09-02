import uniqid from "uniqid";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DropdownAvdeling from "./dropdown-avdeling";
import Avdeling from "./avdeling";
import CurrentDate from "../../components/current-date";
import RegButton from "./regbutton";
import VelgAvdeling from "./velg-avdeling";

function RegKids() {
  const [valgtAvdeling, setValgtAvdeling] = useState({
    value: "Ingen avdeling valgt",
    label: "Ingen avdeling valgt",
  });
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [dbRef, setDbRef] = useState([]);
  const [kidPresent, setKidPresent] = useState(valgtAvdeling);

  // Labels for regButton
  const regAttendence = "Registrer oppmøte";
  const regCount = "Registrer telling";

  // Here there will be a API-call to the firebase server for fetching the children. For Now we use dummy data.
  // One page per department. passing kids as props

  // const readFromDB = () => {

  // Check with uid in array. then give ${correctKindergarten}

  const db = getDatabase();
  const tellingerPath = ref(db, "/Oppsaltunet/Barn");
  // };
  useEffect(() => {
    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();

      setDbRef(Object.values(data));
      setLoading(false);
    });
  }, []);
  console.log(dbRef);

  const router = useRouter();
  // let sortedBarn2 = [];
  // function filterAvdeling2() {
  //   sortedBarn2 = dbRef.filter((barn) => barn.Avdeling == "8");
  //   //dbRef.filter((barn) => barn.avdeling === "Avdeling 8");
  //   console.log("Hei fra sorted 2", sortedBarn2);
  // }

  // filterAvdeling2();
  // let nyArray = [];
  // function filterAvdeling() {
  //   nyArray = barn.filter((barn) => barn.avdeling === "Avdeling 5");
  // }

  // //Function for determening array when selectin avdeling from drop down menu
  // filterAvdeling();
  // //   console.log(nyArray);
  // const avdelingArray = barn.filter((barn) => barn.avdeling === "Avdeling 8");
  //   console.log(avdelingArray);

  const avdeling = "";
  // Lage dynamiske paths basert på avdeling key.
  // Populate countlist based on avdeling key
  // When the user chooses department, remove

  return (
    <>
      <section className=" container min-h-screen min-w-full d-flex flex-column align-items-center justify-content-center h-100 bg-gray-50 shadow-md ">
        <h1 className="text-gray-700 uppercase leading-3 mt-24 mb-4 md:text-4xl text-xl">
          {regCount}
        </h1>

        <CurrentDate />

        <h3 className="text-gray-600 uppercase">Velg avdeling</h3>
        <div className="flex flex-row justify-between flex-wrap px-4">
          <div className="max-w-3xl mx-auto flex justify-between flex-row flex-wrap">
            <VelgAvdeling
              avdeling={1}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />
            <VelgAvdeling
              avdeling={2}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={3}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={4}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={5}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={6}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={7}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />{" "}
            <VelgAvdeling
              avdeling={8}
              valgtAvdeling={valgtAvdeling}
              setValgtAvdeling={setValgtAvdeling}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {/* <DropdownAvdeling
            dbRef={dbRef}
            valgtAvdeling={valgtAvdeling}
            setValgtAvdeling={setValgtAvdeling}
            clicked={clicked}
            setClicked={setClicked}
            kidPresent={kidPresent}
            setKidPresent={setKidPresent}
          /> */}

          <div className="flex flex-col justify-center align-center">
            <div className="bg-sky-500 w-auto  h-1 rounded-t  "></div>
            <div className="flex flex-col justify-items-center align-items-center p-6 rounded-br rounded-bl   shadow-lg bg-white max-w-sm w-auto">
              <Avdeling
                valgtAvdeling={valgtAvdeling}
                dbRef={dbRef}
                clicked={clicked}
                setClicked={setClicked}
                hidden={hidden}
                setHidden={setHidden}
                kidPresent={kidPresent}
                setKidPresent={setKidPresent}
              />
              <RegButton
                clicked={clicked}
                setClicked={setClicked}
                valgtAvdeling={valgtAvdeling}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegKids;
