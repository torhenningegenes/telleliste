import { getDatabase, ref, onValue, get, child } from "firebase/database";

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

    const newArr = Object.values(dbData);
    console.log(
      newArr.forEach((e) => {
        console.log(e.filter((a) => a.dato));
      })
    );
  };

  return (
    <>
      <button onClick={readFromDB}>Read from DB</button>
    </>
  );
}

export default ReadFromDB;
