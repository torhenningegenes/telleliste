import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";

function Home(props) {
  const { currentUser } = useAuth();

  return (
    <section className="text-center bg-gray-50 p-3 shadow rounded-1 mx-auto h-52 min-w-min">
      <h1 className="">Velkommen til tellelista!</h1>
      {/* <h1>{currentUser.email}</h1> */}
      <h2>Dette er en beskyttet rute!</h2>
      <Link href={"/Reg"} passHref>
        <Button variant="primary" className="mx-2">
          Ny telling
        </Button>
      </Link>
      <Link href={"/Old-lists"} passHref>
        <Button variant="primary">Finn gammel liste</Button>
      </Link>
    </section>
  );
}

export default Home;
