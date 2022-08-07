import React from "react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import uniqid from "uniqid";

function NewCounting(props: { loading: any; telling: any }) {
  //Reciving props
  const { loading, telling } = props;
  if (loading === false) {
    const avdelingNavn: string = telling[0].avdeling;
    const klokkeSlett = telling[telling.length - 1];
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
                <div className="h-24 w-64 bg-sky-800 rounded-t-lg flex flex-col justify-around align-middle">
                  <span className="text-sky-100  text-center text-2xl tracking-wider">
                    {avdelingNavn ? avdelingNavn : "Avdeling"}
                  </span>
                  <span className="text-sky-100 text-center text-lg tracking-wider">
                    {klokkeSlett ? klokkeSlett.dato : null}
                  </span>
                  <span className="text-sky-100 text-center text-lg tracking-wider">
                    Kl: {klokkeSlett ? klokkeSlett.klokkeslett : null}
                  </span>
                </div>

                <Popover.Button>
                  <div
                    className={`${
                      open
                        ? "rounded-b-0 h-14 w-64 bg-white flex flex-row align-baseline justify-around shadow-md"
                        : "h-14 w-64 bg-white rounded-b-lg flex flex-row align-baseline justify-around shadow-md"
                    }`}
                  >
                    <div className="text-gray-700 mt-3 ml-3 tracking-wider">
                      Se hele listen
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-3 mr-7 text-gray-600"
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

                <Popover.Panel className="absolute z-10">
                  <div className="grid grid-cols-1 bg-white w-64 rounded-b-lg text-gray-700">
                    {/* <pre>
                      <React.Fragment>{JSON.stringify(telling)}</React.Fragment>
                    </pre> */}

                    <ul className="mt-2 text-center px-0">
                      {telling.map((barn: any) => (
                        <li
                          key={uniqid()}
                          className="text-lg mb-1 hover:text-sky-500"
                        >
                          {barn.navn}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        )}
      </>
    );
  } else {
    return <div className="spinner"></div>;
  }
}

export default NewCounting;
