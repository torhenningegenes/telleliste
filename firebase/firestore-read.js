import { collection, getDocs } from "firebase/firestore";
import { Button } from "react-bootstrap";
import { db } from "./firebaseConfig";

export function FirestoreRead() {
  const readFromDB = async function () {
    const querySnapshot = await getDocs(collection(db, "users"));
    const docdata = querySnapshot;
    console.log(JSON.stringify(docdata));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <Button variant="secondary" onClick={readFromDB}>
      Read from DB
    </Button>
  );
}
