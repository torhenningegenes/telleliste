import ReadFromDB from "../../firebase/readFromDB";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

function OldLists() {
  // send a call to the database

  let dbData: any[];

  const readFromDB = async function () {
    const db = getDatabase();
    const tellingerPath = ref(db, "Tellinger");

    await onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      dbData = data;
    });
  };

  // Map out old lists from DB
  const renderList = function () {
    const newArr = Object.values(dbData);

    newArr.forEach((e) => {
      console.log(e);
    });

    const finnAvd5 = newArr.filter((barn) => barn.navn === "Lars");
    console.log(finnAvd5);
  };
  readFromDB();

  return (
    <div className="margin--top--medium">
      <h1>Finn gamle lister</h1>
      <div>
        <Button onClick={renderList}>Consol log liste</Button>
      </div>
    </div>
  );
}
export default OldLists;
