import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth, LogIn, currentUser } from "../context/auth-context";
import { useRouter } from "next/router";

function LoginUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  // States

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //const { currentUser } = useAuth();

  const notify = () =>
    toast.error(
      `Feil epost eller passord, 
    Vennligst prøv igjen`,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );

  async function handleSubmit(e) {
    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    if (!passwordRef.current.value) {
      return setError("Skriv inn ditt passord");
    }

    try {
      setError("");
      setLoading(true);
      await LogIn(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      console.log("Success");

      // Pass in e to get the error
    } catch (e) {
      console.log("log fra e: ", e);
      setError("Failed to login");
      console.log("log fra error", error);
    }
    router.push("/home");
    console.log("logger curentUser: ", currentUser);
    currentUser ? console.log("logged inn") : notify();
  }

  return (
    <>
      {loading ? <div className="spinner"></div> : null}
      <div className="absolute top-32 md:top-60 left-0 z-0 min-w-full">
        <div className="max-w-xs flex flex-col items-center justify-around mx-auto mt-2 z-1 ">
          <div className="flex flex-col justify-around align-middle items-center max-w-xs">
            <h3 className="text-sky-50">Logg inn</h3>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="epost"
                >
                  Epost
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="epost"
                  type="email"
                  placeholder="Epost"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Passord
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  required
                  ref={passwordRef}
                />
              </div>
              <div className="flex flex-col items-center justify-between ">
                <button
                  className="bg-sky-800 text-sky-50 hover:bg-sky-500  font-bold py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Logg inn
                </button>
              </div>
            </form>
            <p className="text-center text-sky-50 text-xs">
              &copy;2022. Tor Henning Egenes
            </p>
          </div>
          <ToastContainer className="" />
        </div>
      </div>
    </>
  );
}

export default LoginUser;
