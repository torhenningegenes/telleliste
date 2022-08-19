import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";

function Home(props) {
  const { currentUser } = useAuth();

  return (
    <section className="text-center bg-gray-50 p-3 shadow rounded-1 mx-auto h-52 min-w-min">
      <h1 className="text-gray-600 uppercase tracking-wide">
        Velkommen til tellelista!
      </h1>
      {/* <h1>{currentUser.email}</h1> */}

      <Link href={"/Reg"} passHref>
        <button className="bg-sky-800 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500">
          Ny telling
        </button>
      </Link>
      <Link href={"/Old-lists"} passHref>
        <button className="bg-sky-800 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500">
          Se gamlelister
        </button>
      </Link>
    </section>
  );
}

export default Home;
