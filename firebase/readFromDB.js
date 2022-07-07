import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { Button } from "react-bootstrap";

function ReadFromDB() {
  let dbData;
  const readFromDB = async function () {
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `Tellinger`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //       const dbValues = snapshot.val();
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const db = getDatabase();
    const tellingerPath = ref(db, "Tellinger");
    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      dbData = data;
    });

    const dataArray = Object.values(dbData);
  };

  return (
    <>
      <Button variant="primary" onClick={readFromDB}>
        Read from DB
      </Button>
    </>
  );
}

export default ReadFromDB;
