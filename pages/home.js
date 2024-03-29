import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/auth-context";
import wave from "../img/Wave.svg";
import waveMobile from "../img/Wave-mobile.svg";
import { useRouter } from "next/router";
import LoginUser from "../context/login";
function Home(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const router = useRouter();

  const sendToLoginPage = function () {
    router.push("/login-user");
  };

  if (currentUser != null) {
    return (
      <>
        <div className="md:hidden">
          <Image
            src={waveMobile}
            layout="responsive"
            className="z-0 absolute top-0 left-0 min-h-screen"
            alt="blue waves"
          />
        </div>

        <div className="md:block hidden">
          <Image
            src={wave}
            layout="responsive"
            className="z-0 absolute top-0 left-0 min-h-screen"
            alt="blue waves"
          />
        </div>

        <div className="absolute top-32 md:top-60 left-0 z-0 min-w-full">
          <section className="text-center bg-transparent p-3 mx-auto h-screen min-w-min z-1 flex flex-col">
            <h1 className="text-sky-100 uppercase tracking-wide z-10">
              Velkommen til tellelisten!
            </h1>
            {/* <h1>{currentUser.email}</h1> */}
            <div className="flex flex-col max-h-44 justify-between align-middle items-center mt-6">
              <Link href={"/Reg"} passHref className="block z-20">
                <button className="bg-sky-50 hover:bg-sky-500 text-sky-900 hover:text-sky-50 font-light py-4 px-4  focus:ring-red-900 focus:shadow-outline active:bg-red-500  rounded-full mb-4">
                  Ny telling
                </button>
              </Link>
              <Link href={"/Old-lists"} passHref className="block z-20">
                <button className="bg-sky-50 text-sky-900 hover:bg-sky-500 hover:text-sky-50 font-light py-4 px-4  focus:ring-red-900 focus:shadow-outline active:bg-red-500 rounded-full">
                  Se gamlelister
                </button>
              </Link>
              <Link href={"/DevPage"} passHref className="block z-20">
                <button className=" mt-2 bg-sky-50 text-sky-900 hover:bg-sky-500 hover:text-sky-50 font-light py-4 px-4  focus:ring-red-900 focus:shadow-outline active:bg-red-500 rounded-full">
                  Ny knapp til dev
                </button>
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <div className="container bg-gray-50 shadow-md flex flex-col justify-center items-center min-h-screen">
        <div className="text-gray-700 z-1 flex flex-col text-center ">
          <h3>Huff da.</h3>
          <p> Feil brukernavn eller passord. Vennligst prøv igjen.</p>
        </div>
        <Link href={"/login-user"} passHref>
          <button className="bg-sky-700 text-sky-100 rounded-lg h-11 w-28 mb-4 font-light">
            Log in
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
