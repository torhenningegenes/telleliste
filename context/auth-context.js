import React, { createContext, useContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
// import { auth } from "firebase-admin";

const AuthContext = createContext();

//Function that returns the current user.
export function useAuth() {
  return useContext(AuthContext);
}

// Context provider. Lets other components know if and who is logged in

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  // Signup function from firebase
  function signup() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
