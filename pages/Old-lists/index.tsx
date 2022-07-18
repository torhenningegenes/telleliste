import ReadFromDB from "../../firebase/readFromDB";
import uniqid from "uniqid";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import List from "./list";
import { Fragment, useEffect, useRef, useState } from "react";
import SearchBar from "./search-bar";
import Container from "../../node_modules/react-bootstrap/esm/Container";

// Need: getting data from db
// Search bar and button
// renderd list.

const OldLists = () => {
  // function OldLists() {
  const [showOldLists, setShowOldLists] = useState(false);
  const [oldLists, setOldLists] = useState();
  //const [formState, setFormState] = useState("");
  const [dbRef, setDbRef] = useState([]);
  const [loading, setLoading] = useState(true);
  //const avdelingerFilterd: string[] = dbRef.current.filter(
  //   (f) => f.avdeling === "avdeling"
  // );
  // console.log("avdFiltered", avdelingerFilterd);
  // send a call to the database
  let avdeling: string;
  let navn: string;

  // const readFromDB = () => {
  const db = getDatabase();
  const tellingerPath = ref(db, "Tellinger");
  // };
  useEffect(() => {
    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();
      /* snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log("childData", childData);
        dbData.push(childData);
      }); */

      setDbRef(Object.values(data));
      setLoading(false);
      // console.log("flat", Object.values(data).flat());

      // if (data !== null) {

      //dbData = Object.values(data).flat();

      //dbRef.current = [...Object.values(data)];

      //console.log("Hei fra useRef ", dbRef.current);
    });
  }, []);

  // const newArr = Object.values(dbData);
  // const returnArr = Object.entries(newArr);
  // console.log(returnArr);
  //};

  //readFromDB();
  //console.log(oldLists);
  // Map out old lists from DB

  const renderList = function () {
    //console.log(dbRef);

    // Function for filtering data from list
    const filt = dbRef
      .flat()
      .filter((a) => a.avdeling || a.dato === "Avdeling 8" || "dato");
    const date = dbRef.flat().some((v) => v.dato);
    console.log("Click", date);
    setDbRef(filt);
    // console.log("flat", dbRef.flat());

    // console.log("tester", test);
  };

  return (
    <div className="margin--top--medium bg-light">
      <Container>
        {loading ? <div>loading...</div> : <div>Loading ferdig!</div>}
        <h1>Finn gamle lister</h1>
        <div>
          <Button onClick={renderList}>Console.log liste</Button>
        </div>
        <SearchBar />
        <h1>her kommer liste</h1>
        {
          <ul className="list-group">
            {dbRef.flat().map((item) => {
              return (
                <li className="list-group-item" key={uniqid()}>
                  <p>{item.avdeling} </p>
                  <p>{item.dato}</p>
                  <p>{item.navn}</p>
                </li>
              );
            })}
          </ul>
        }
      </Container>
    </div>
  );
};
export default OldLists;
