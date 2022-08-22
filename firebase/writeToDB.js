import { db } from "./firebaseConfig";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import { getDatabase, push, ref, set } from "firebase/database";

function WriteToDB() {
  function writeUserData(name, text) {
    const db = getDatabase();
    set(ref(db, "users"), {
      name: "Heidi",
      text: "Dette er også en text string",
    });
    push(ref(db, "users"), {
      name: "Nora",
      text: "Dette er Nora",
    });
  }

  return (
    <button className="mx-2" onClick={writeUserData}>
      Write to DB
    </button>
  );
}
export default WriteToDB;
