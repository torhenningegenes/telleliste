import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/auth-context";
import wave from "../img/Wave.svg";

function Home(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  //Adder en kommentar bare for å sjekke
  return (
    <>
      <section className=" text-center bg-gray-50 p-3 shadow rounded-1 mx-auto h-screen min-w-min z-0">
        <h1 className="text-gray-600 uppercase tracking-wide z-10">
          Velkommen til tellelista!
        </h1>
        {/* <h1>{currentUser.email}</h1> */}

        <Link href={"/Reg"} passHref className="block z-20">
          <button className="bg-sky-800 hover:bg-sky-500 text-sky-100 font-light py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500 mr-3">
            Ny telling
          </button>
        </Link>
        <Link href={"/Old-lists"} passHref className="block z-20">
          <button className="bg-sky-800 text-sky-100 hover:bg-sky-500 font-light py-2 px-4 rounded focus:ring-red-900 focus:shadow-outline active:bg-red-500">
            Se gamlelister
          </button>
        </Link>
      </section>
      {/* 
      <div className="z-10">
        <Image
          src={wave}
          layout="responsive"
          className="z-0 absolute top-0 left-0"
        />
      </div> */}
    </>
  );
}

export default Home;
