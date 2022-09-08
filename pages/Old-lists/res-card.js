import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";

function ResCard(props) {
  const [loading, setLoading] = useState(true);
  const { res, navn, avdeling, dato, klokkeslett } = props;
  //console.log("log fra props: ", navn);
  // console.log("log fra search-result", res);
  if (res) {
    console.log("Fra res avdeling:", res[0].avdeling);
  }

  if (res) {
    const avdeling = res[0].avdeling;
    const totalCounted = res.length - 1;
    return (
      <>
        <div className="container flex flex-col justify-center align-middle items-center">
          <div className=" bg-sky-800 w-72 max-w-sm text-sky-100 px-1 rounded-tr rounded-tl">
            {avdeling}
          </div>
          <div className="bg-gray-50 text-gray-700 w-72 max-w-sm shadow rounded-br rounded-bl mb-2 h-auto flex flex-col justify-center align-middle">
            <ul className="flex flex-col justify-center align-middle p-0">
              {res.map((e, i) => (
                <li className="mb-1 text-gray-700">
                  {e.navn}
                  <span className=" text-sm">{e.klokkeslett}</span>
                  <span className="block text-sm">{e.dato}</span>
                </li>
              ))}
            </ul>
            Totalt telt: {totalCounted}
          </div>
        </div>
      </>
    );
  }
}

export default ResCard;
