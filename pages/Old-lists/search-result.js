import React from "react";
import ResCard from "./res-card.js";

function SearchResult(props) {
  const { res, formState } = props;

  console.log("Log fra search result component", res);
  return (
    <>
      <span className="mr-1 text-lg  text-gray-700">Ditt søk:</span>
      {formState ? formState : null}
      <pre>
        <React.Fragment>{JSON.stringify(res)}</React.Fragment>
      </pre>
      <ResCard />
    </>
  );
}

export default SearchResult;
