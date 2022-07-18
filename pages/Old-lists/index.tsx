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

      setDbRef(Object.values(data));
      setLoading(false);
      // console.log("flat", Object.values(data).flat());

      // if (data !== null) {

      //dbData = Object.values(data).flat();

      //dbRef.current = [...Object.values(data)];
      //console.log("Hei fra DB; ", data);
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
    // Function for filtering data from list
    const filt = dbRef
      .flat()
      .filter((a) => a.avdeling || a.dato === "Avdeling 1" || "dato");
    //const date = dbRef.flat().some((v) => v.dato);
    // console.log("Click", filt);
    setDbRef(filt);
    // console.log("flat", dbRef.flat());

    console.log(dbRef);
  };

  return (
    <div className="margin--top--medium bg-light">
      <Container>
        {loading ? <div>loading...</div> : <div>Loading ferdig!</div>}
        <h1>Finn gamle lister</h1>
        <div>
          <Button onClick={renderList}>Render liste</Button>
        </div>
        <SearchBar dbRef={dbRef} />
        {/* <h1>her kommer liste</h1>
        {
          <ul className="list-group">
            {dbRef.flat().map((item) => {
              return (
                <>
                  <div>Tellinger</div>
                  <li className="list-group-item" key={uniqid()}>
                    <p>{item.avdeling} </p>
                    <p>{item.dato}</p>
                    <p>{item.navn}</p>
                  </li>
                </>
              );
            })}
          </ul>
        } */}
        <List dbRef={dbRef} />
      </Container>
    </div>
  );
};
export default OldLists;
