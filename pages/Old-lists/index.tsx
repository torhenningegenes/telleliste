import ReadFromDB from "../../firebase/readFromDB";
import uniqid from "uniqid";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import List from "./list";
import { Fragment, useState } from "react";

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
      // console.log(data);
      dbData = data;
    });

    console.log(dbData);
    // const newArr = Object.values(dbData);
    // const returnArr = Object.entries(newArr);
    // console.log(returnArr);
  };
  readFromDB();
  // Map out old lists from DB
  const renderList = function () {
    // return (
    // <div>
    //   <ul>
    //     {returnArr.map((arr) => (
    //       <List key={uniqid()} navn={arr.navn} avdeling={arr.avdeling} />
    //     ))}
    //   </ul>
    // </div>
    //);
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
    <div className="margin--top--medium">
      <h1>Finn gamle lister</h1>
      <div>
        <Button onClick={renderList}>Console.log liste</Button>
      </div>
      {/* <List data={dbData} /> */}
    </div>
  );
}
export default OldLists;
