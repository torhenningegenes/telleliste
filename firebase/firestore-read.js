import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import { db } from "./firebaseConfig";

export function FirestoreRead() {
  const readFromDB = async function () {
    // const querySnapshot = await getDocs(collection(db, "users"));
    // const docdata = querySnapshot.data();
    // console.log(JSON.stringify(docdata));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });

    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return <button onClick={readFromDB}>Read from DB</button>;
}
