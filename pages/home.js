import Link from "next/link";

import { useAuth } from "../context/auth-context";

function Home(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <section className="text-center bg-gray-50 p-3 shadow rounded-1 mx-auto h-52 min-w-min">
      <h1 className="text-gray-600 uppercase tracking-wide">
        Velkommen til tellelista!
      </h1>
      {/* <h1>{currentUser.email}</h1> */}

      <Link href={"/Reg"} passHref>
        <button className="bg-sky-800 hover:bg-sky-500 text-sky-100 font-light py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500 mr-3">
          Ny telling
        </button>
      </Link>
      <Link href={"/Old-lists"} passHref>
        <button className="bg-sky-800 text-sky-100 hover:bg-sky-500 font-light py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500">
          Se gamlelister
        </button>
      </Link>
    </section>
  );
}

export default Home;
