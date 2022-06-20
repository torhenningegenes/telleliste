import React, { createContext, useContext, useState, useEffect } from "react";
import { app } from "../firebase/firebaseConfig";
import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

//Function that returns the current user.
export function useAuth() {
  return useContext(AuthContext);
}

// Function for creating user
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

// Function for logging in user

export async function LogIn(email, password) {
  console.log("login function");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user + "Signed inn to firebase");
    })
    .catch((error) => {
      console.log("Error logging in user");
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
// Function for logging out user

// Context provider function
export function AuthProvider({ children }) {
  // State variables
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // console.log(currentUser);
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        console.log(currentUser);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    if (unsubscribe) {
      console.log("onAuthStateChanged success");
    }
    return unsubscribe;
  }, []);

  const logOut = async () => {
    setCurrentUser(null);
    await signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    LogIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}
