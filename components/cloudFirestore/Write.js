import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({ id: "test", data: "Dette er test data.", number: 4455 })
        .then(alert("Data was successfully sent to cloudfirestore"));
    } catch (error) {
      console.log("Error");
      alert("Error");
    }
  };

  return <button onClick={sendData}>Send to firestore database.</button>;
};

export default WriteToCloudFirestore;
