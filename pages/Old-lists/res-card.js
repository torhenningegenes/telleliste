import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";

function ResCard(props) {
  const [loading, setLoading] = useState(true);
  const { res } = props;
  console.log("log fra search-result", res);
  return (
    <>
      <div className="container">
        <div className=" bg-sky-800 w-44 text-sky-100 px-1 py-2 rounded-r rounded-t">
          Avdeling 8
        </div>
        <div className="bg-gray-50 text-gray-700 w-44 shadow rounded-br rounded-bl mb-2 h-6 ">
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default ResCard;
