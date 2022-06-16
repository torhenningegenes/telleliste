import { initializeApp, getApps, apps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function createOrGetApp() {
  if (!getApps().length) initializeApp(firebaseConfig);
  console.log("Firebase was successfully init.");
}

const app = createOrGetApp();

// const createOrGetApp = () => {
//   if (!getApps) {
//     return initializeApp(firebaseConfig);
//   } else {
//     return getApps[0];
//   }
// };

// const app = initializeApp(firebaseConfig);
if (app) {
  console.log("Firebase was succsessfully init..");
  console.log(app);
}
const auth = getAuth(app);

export { auth, app };
