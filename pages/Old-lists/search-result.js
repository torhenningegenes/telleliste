import React from "react";
import { useState } from "react";
import ResCard from "./res-card.js";

function SearchResult(props) {
  const { res, formState, loading } = props;

  if (res) {
    const [res0, res1, res2, res3, res4, res5, res6, res7, res8, res9, res10] =
      res;
    console.log("Log fra res destructuring: ", res0, res2, res3);

    //console.log("Log fra search result: ", res.avdeling);

    return (
      <>
        {loading ? <div className="spinner mt-20"></div> : null}
        <span className="mr-1 text-lg  text-gray-700 uppercase tracking">
          Ditt søk:
        </span>
        <p className="text-gray-700 mt-1">{formState ? formState : null}</p>
        {/* <pre>
          <React.Fragment>{JSON.stringify(res)}</React.Fragment>
        </pre> */}

        <div className="bg-gray-100 ">
          <div>{res.length > 1 ? null : <p>Beklager ingen treff.</p>}</div>
          <ul className="flex flex-col justify-center items-center p-0">
            {res ? (
              <>
                <ResCard res={res1} />
                <ResCard res={res2} /> <ResCard res={res3} />
                <ResCard res={res4} />
                <ResCard res={res5} />
              </>
            ) : (
              <div>No res yet</div>
            )}
          </ul>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default SearchResult;
