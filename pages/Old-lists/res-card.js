import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";

function ResCard() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="container">
        <div className=" bg-sky-800 w-44 text-sky-100 px-1 py-2 rounded">
          Avdeling 8
        </div>
        <div className="bg-sky-100"></div>
      </div>
    </>
  );
}

export default ResCard;
