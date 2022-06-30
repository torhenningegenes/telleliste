import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Button } from "react-bootstrap";

export function FirestoreWrite() {
  const addToDB = async function () {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const writeToDB = async function () {
    try {
      const docRef = await addDoc(collection(db, "testers"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={addToDB}>
        Write to DB 1
      </Button>
      <Button variant="primary" onClick={writeToDB}>
        Write to DB 2
      </Button>
    </>
  );
}
