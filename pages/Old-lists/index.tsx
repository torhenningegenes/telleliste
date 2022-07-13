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

function OldLists() {
  const [showOldLists, setShowOldLists] = useState(false);
  const [oldLists, setOldLists] = useState();
  let dbRef = useRef([]);

  // send a call to the database
  let avdeling: string;
  let navn: string;
  let dbData: any[];

  //const readFromDB = async function () {
  const db = getDatabase();
  const tellingerPath = ref(db, "Tellinger");

  useEffect(() => {
    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        dbRef.current = [...Object.values(data)];
        console.log(dbRef.current.filter((a) => (a.avdeling = "avdeling 8")));

        //console.log("Hei fra useRef", dbRef.current);
      }
    });
  }),
    [];

  // const newArr = Object.values(dbData);
  // const returnArr = Object.entries(newArr);
  // console.log(returnArr);
  //};

  //readFromDB();
  //console.log(oldLists);
  // Map out old lists from DB

  console.log(dbRef.current.filter((a) => (a.avdeling = "avdeling 8")));
  const renderList = function () {
    setShowOldLists(true);
    // flatArr.filter((e) => {
    //   if (e.avdeling) {
    //     console.log(e);
    //   }
    // });
    // newArr.forEach((a) => {
    //   a.forEach((e) => {
    //     console.log(e);
    //   });
    // });
  };

  return (
    <div className="margin--top--medium bg-light">
      <Container>
        <h1>Finn gamle lister</h1>
        <div>
          <Button onClick={renderList}>Console.log liste</Button>
        </div>
        <SearchBar />
        <h1>her blir det liv rai rai</h1>
      </Container>
    </div>
  );
}
export default OldLists;
