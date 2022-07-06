import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { Button } from "react-bootstrap";

function ReadFromDB() {
  const readFromDB = async function () {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Tellinger`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Button variant="primary" onClick={readFromDB}>
      Read from DB
    </Button>
  );
}

export default ReadFromDB;
