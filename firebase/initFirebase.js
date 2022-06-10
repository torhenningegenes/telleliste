// import { messaging } from "firebase-admin";
import firebase from "firebase/app";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import "firebase/auth";

const clientCredentials = {
  apiKey: process.env.PUBLIC_NEXT_FIREBASE_API_KEY,
  authDomain: process.env.PUBLIC_NEXT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.PUBLIC_NEXT_FIREBASE_DATABASE_URL,
  projectId: process.env.PUBLIC_NEXT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PUBLIC_NEXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PUBLIC_NEXT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PUBLIC_NEXT_FIREBASE_APP_ID,
};

function initFirebase() {
  if (!getApps().length) {
    const app = initializeApp(clientCredentials);
    console.log(clientCredentials);
    const database = getDatabase(app);
    if (typeof window !== "undefined") {
      if ("measurmentId" in clientCredentials) {
        firebase.analytics();
        firebase.performance();
      }
    }
  }

  //   //Check if window is in scope for the analytics module
  //   if (typeof window !== "undefined") {
  //     //Enable analytics
  //     if ("measurmentId" in clientCredentials) {
  //       firebase.analytics();
  //       firebase.performance();
  //     }
  //   }
  console.log("Firebase was successfully init.");
  // }
}

export default initFirebase;
