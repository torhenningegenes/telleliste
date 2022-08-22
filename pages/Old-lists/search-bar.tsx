import * as React from "react";
import { Fragment, useState, useRef } from "react";
import SearchResult from "./search-result";

function SearchBar(props: any) {
  //const { formState, setFormState } = props;
  const { dbArr } = props;
  const [formState, setFormState] = useState("");
  const [res, setRes] = useState(null);

  // Take value from search. Use string methods like make lower case and remove whitespaces. Then filter on word `.filter(${input})`
  // If ${input} === true render html with list.

  const handleSubmit = (e: any) => {
    console.log("Click");
    e.preventDefault();
    console.log(formState);

    // trying to make a function for searching the array

    // We need to do object conversion on level up in our foreach
    let searchRes: any = [];

    function arrayTest(array: any) {
      array.forEach((element: any) => {
        let firstValues = Object.values(element);

        // This gives us the last all counting where input was counted was seen.
        // if (element.find((obj: any) => obj.navn === `${formState}`)) {
        //   if (searchRes) {
        //     searchRes.push(element);
        //     //console.log(searchRes);
        //   }
        // }

        element.find(
          (obj: any) =>
            obj.navn === `${formState}` || obj.avdeling === `${formState}`
        ) && searchRes
          ? searchRes.push(element)
          : console.log("No match");

        // console.log(
        //   element.find((barn) => barn.navn === "Stian"),
        //Gives last element in array
        //   element[element.length - 1]
        // );

        // firstValues.filter((i) => {
        //   i.includes("Stian");
        //   console.log(element);
        // });

        element.forEach((o: any) => {
          // }
          let values = Object.values(o);
          let keys = Object.keys(o);
          let dates = values[values.length - 1];
          //searchRes = values;
          //console.log(values);
          // console.log(lastItem);

          // if (keys.includes("dato")) {
          // console.log(o.dato);
          // console.log(o.navn);

          // }
          // if (searchRes.filter((e) => e.includes("Helene"))) {
          //   console.log(searchRes);
          //   // console.log(o.dato);
          // }
        });
        console.log("----------- ---------- --------");
      });
      return searchRes;
    }
    arrayTest(dbArr);
    setRes(searchRes);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 shadow-lg">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-none"
              placeholder="Søk"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={formState}
              onChange={(e) => setFormState(e.target.value)}
            />
            <button
              className="inline-block px-6 py-2.5 bg-sky-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:shadow-lg focus:bg-sky-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 shadow-lg">
        <SearchResult res={res} formState={formState} />
      </div>
    </>
  );
}

export default SearchBar;
