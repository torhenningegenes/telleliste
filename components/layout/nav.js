import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useRouter } from "next/router";

function NavBar() {
  const { currentUser, logOut } = useAuth();
  console.log(currentUser);
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const showHamburgerMenuHandler = function () {
    setShowMenu(true);
    console.log("click");
    if (showMenu === true) {
      setShowMenu(false);
    }
  };
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mt-11 sticky top-0 z-50 h-auto">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href={"/"} passHref>
            <span className="cursor-pointer uppercase tracking-wide text-xl bg-white text-gray-700">
              📝 Tellelisten
            </span>
          </Link>

          <button
            onClick={showHamburgerMenuHandler}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              showMenu
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="flex flex-col mt-4 rounded-lg items-center md:h-24  md:flex-row md:items-center md:justify-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <Link
                  href={"/"}
                  passHref
                  aria-current="page"
                  className="hover: "
                >
                  <span className="text-gray-600 text-lg hover:border-sky-700 border-2 rounded p-2 md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Hjem
                  </span>
                </Link>
              </li>
              <li>
                <Link href={"/Reg"}>
                  <span className="text-gray-600 text-lg hover:border-sky-700 border-2 rounded p-2  md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Ny telling
                  </span>
                </Link>
              </li>
              <li>
                <Link href={"/Old-lists"} passHref>
                  <span className=" md:text-gray-500 md:text-lg  md:no-underline md:hover:text-sky-500 transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Gamle lister
                  </span>
                </Link>
              </li>

              {currentUser ? (
                <li className=" ">
                  <button
                    className="mr-2 bg-sky-800 text-sky-100 h-11 w-28 rounded-lg hover:bg-sky-500 transition duration-300 ease-in-out"
                    variant="info"
                    value="Logg ut"
                    onClick={() => {
                      logOut();
                      router.push("/");
                    }}
                  >
                    Logg ut
                  </button>
                </li>
              ) : (
                <li>
                  <Link href={"/login-user"} passHref>
                    <button
                      className="bg-sky-800 text-sky-100 h-11 w-28 rounded-lg hover:bg-sky-500 transition duration-300 ease-in-out"
                      variant="info"
                      as="input"
                      type="submit"
                      value="Logg inn"
                    >
                      Log in
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
