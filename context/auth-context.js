import React, { createContext, useContext, useState, useEffect } from "react";
import { app } from "../firebase/firebaseConfig";
import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { async } from "@firebase/util";
// import { auth } from "firebase-admin";

const AuthContext = createContext();

//Function that returns the current user.
export function useAuth() {
  return useContext(AuthContext);
}

export async function signup(email, password) {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log("Error creating user");
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
// Context provider. Lets other components know if and who is logged in
// Login function

export async function logIn(email, password) {
  console.log("login function");
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth(app);
    console.log("Auth = " + auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    if (unsubscribe) {
      console.log("onAuthStateChanged success");
    }
    return unsubscribe;
  }, []);

  // Signup function from firebase
  // function signup() {
  //   const auth = getAuth(app);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log("Error creating user");
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
