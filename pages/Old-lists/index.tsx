import ReadFromDB from "../../firebase/readFromDB";
import uniqid from "uniqid";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import List from "./list";
import { Fragment, useState } from "react";
import SearchBar from "./search-bar";
import Container from "../../node_modules/react-bootstrap/esm/Container";

// Need: getting data from db
// Search bar and button
// renderd list.

function OldLists() {
  const [showOldLists, setShowOldLists] = useState(false);

  // send a call to the database
  let avdeling: string;
  let navn: string;
  let dbData: any[];

  const readFromDB = async function () {
    const db = getDatabase();
    const tellingerPath = ref(db, "Tellinger");

    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      dbData = data;
      //console.log(dbData);
    });

    // const newArr = Object.values(dbData);
    // const returnArr = Object.entries(newArr);
    // console.log(returnArr);
  };
  readFromDB();
  // Map out old lists from DB
  const renderList = function () {
    let newArr = dbData;
    console.log(newArr);
    return newArr;

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

  let test = renderList();
  console.log(test);
  return (
    <div className="margin--top--medium bg-light">
      <Container>
        <h1>Finn gamle lister</h1>
        <div>
          <Button onClick={renderList}>Console.log liste</Button>
        </div>
        <SearchBar />
        <h1>{test[2]}</h1>
      </Container>
    </div>
  );
}
export default OldLists;
