import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth, LogIn } from "../context/auth-context";
import { useRouter } from "next/router";

function LoginUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  // States

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth;

  const notify = () =>
    toast.error(
      `Feil epost eller passord, 
    Vennligst prøv igjen`,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
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
      console.log("Success");

      // Pass in e to get the error
    } catch (e) {
      console.log("log fra e: ", e);
      setError("Failed to login");
      console.log(error);
    }
    error ? notify() : router.push("/home");
    setLoading(false);
  }

  return (
    <>
      {loading ? <div className="spinner"></div> : null}

      <div className="w-full max-w-xs flex flex-col items-center mx-auto">
        <h3 className="text-gray-700">Logg inn</h3>
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
          <div className="flex flex-col items-center justify-between">
            <button
              className="bg-sky-800 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500"
              type="submit"
              onClick={handleSubmit}
            >
              Logg inn
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022, tellelisten.no
        </p>
      </div>
      <ToastContainer className="" />
    </>
  );
}

export default LoginUser;
