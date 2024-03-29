import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import uniqid from "uniqid";

function NewCounting(props: { loading: any; telling: any }) {
  //Reciving props
  const { loading, telling } = props;
  if (loading === false && telling) {
    const avdelingNavn: string = telling[0].avdeling;
    const klokkeSlett = telling[telling.length - 1];
    const antallTelt = telling.length - 1;
    //console.log(antallTelt);

    // console.log(klokkeSlett.klokkeslett);
    // console.log(telling);

    // By Checking if loading the database is true, we prevent getting undefined from props.

    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Popover className="relative mb-6">
            {({ open }) => (
              <>
                <div className="w-72 h-36 py-2 bg-sky-800 rounded-t-lg flex flex-col justify-around align-middle">
                  <span className="text-sky-100  text-center text-2xl tracking-wider">
                    {avdelingNavn ? avdelingNavn : "Avdeling"}
                  </span>
                  <span className="text-sky-100 text-center text-lg tracking-wider ">
                    {klokkeSlett ? klokkeSlett.dato : null}
                  </span>
                  <span className="text-sky-100 text-center text-base tracking-wider ">
                    Kl: {klokkeSlett ? klokkeSlett.klokkeslett : null}
                  </span>
                </div>

                <Popover.Button>
                  <div
                    className={`${
                      open
                        ? "rounded-b-0 h-14 w-72 bg-white flex flex-row align-baseline justify-around shadow-md"
                        : "h-14 w-72 bg-white rounded-b-lg flex flex-row align-baseline justify-around shadow-md"
                    }`}
                  >
                    <div className="text-gray-600 mt-3 ml-3 tracking-wider">
                      Se hele listen
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-3 mr-7 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mb-2 ">
                    <div className="grid grid-cols-1 bg-white w-72 rounded-b-lg text-gray-700 ">
                      {/* <pre>
                      <React.Fragment>{JSON.stringify(telling)}</React.Fragment>
                    </pre> */}

                      <ul className="mt-2 text-center px-0">
                        {telling.map((barn: any) => (
                          <li
                            key={uniqid()}
                            className="text-lg mb-1  hover:text-sky-500"
                          >
                            {barn.navn}
                          </li>
                        ))}
                      </ul>
                      <span className="">Antall telt: {antallTelt}</span>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
      </>
    );
  } else {
    // return <div className="spinner"></div>;
    return null;
  }
}

export default NewCounting;
