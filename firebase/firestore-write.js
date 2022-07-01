import { db } from "./firebaseConfig";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Button } from "react-bootstrap";

export function FirestoreWrite() {
  const addToDB = async function () {
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"],
    });
    await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"],
    });
    await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"],
    });
    await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"],
    });
  };
  return (
    <>
      <Button variant="primary" onClick={addToDB}>
        Write to DB 1
      </Button>
      {/* <Button variant="primary" onClick={writeToDB}>
        Write to DB 2
      </Button> */}
    </>
  );
}
