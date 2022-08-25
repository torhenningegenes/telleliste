import React from "react";
import { useState } from "react";
import ResCard from "./res-card.js";

function SearchResult(props) {
  const { res, formState } = props;

  console.log("Log fra search result: ", res);

  return (
    <>
      <span className="mr-1 text-lg  text-gray-700">Ditt søk:</span>
      {formState ? formState : null}
      <pre>
        <React.Fragment>{JSON.stringify(res)}</React.Fragment>
      </pre>

      {/* <div className="bg-pink-200 min-h-screen">
        <ul>
          this is my list
          {res ? (
            // res.map((telling) => telling.map((barn) => <li>{barn.navn}</li>))
            res.map((telling) => <ResCard />)
          ) : (
            <div>No res yet</div>
          )}
        </ul>
      </div>
      <ResCard /> */}
    </>
  );
}

export default SearchResult;
