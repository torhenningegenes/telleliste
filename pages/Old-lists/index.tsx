import React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import SearchBar from "./search-bar";
import NewCounting from "./new-counting";

const OldLists = () => {
  // function OldLists() {

  //const [formState, setFormState] = useState("");
  const [dbRef, setDbRef] = useState([]);
  const [loading, setLoading] = useState(true);
  //const avdelingerFilterd: string[] = dbRef.current.filter(
  //   (f) => f.avdeling === "avdeling"
  // );
  // console.log("avdFiltered", avdelingerFilterd);
  // send a call to the database
  let avdeling: string;
  let navn: string;

  // const readFromDB = () => {
  const db = getDatabase();
  const tellingerPath = ref(db, "Tellinger");
  // };
  useEffect(() => {
    onValue(tellingerPath, (snapshot) => {
      const data = snapshot.val();

      setDbRef(Object.values(data));
      setLoading(false);
      // console.log("flat", Object.values(data).flat());

      // if (data !== null) {

      //dbData = Object.values(data).flat();

      //dbRef.current = [...Object.values(data)];
      //console.log("Hei fra DB; ", data);
    });
  }, []);

  const dbArray = Object.values(dbRef);
  //console.log("Hello from arr ", dbArray);
  const clean = dbArray
    //.flat()
    .reverse()
    .filter((e) => e != "Hei fra context");
  //.filter((e) => e != "Telling");
  console.log("Clean array: ", clean);
  const [
    telling1,
    telling2,
    telling3,
    telling4,
    telling5,
    telling6,
    telling7,
    telling8,
    telling9,
    telling10,
  ] = clean;
  //console.log("log fra telling", telling1, telling2, "Telling3: ", telling3);

  return (
    <section>
      <div className="container text-center bg-gray-50 shadow-lg h-auto flex flex-col justify-center">
        {loading ? (
          <div className="spinner mt-20"></div>
        ) : (
          <div className="header mt-20">
            <h1 className=" text-gray-600 text-4xl uppercase tracking-wide mb-6 mt-4">
              Søk i gamle lister
            </h1>
          </div>
        )}

        <SearchBar dbArr={clean} />

        <h3 className="text-gray-600 uppercase tracking-wide">
          Siste tellinger
        </h3>
        <div className="container flex flex-row justify-around flex-wrap mt-4">
          <NewCounting loading={loading} telling={telling1} />

          <NewCounting loading={loading} telling={telling2} />
          <NewCounting loading={loading} telling={telling3} />
          <NewCounting loading={loading} telling={telling4} />
          <NewCounting loading={loading} telling={telling5} />
          <NewCounting loading={loading} telling={telling6} />
          <NewCounting loading={loading} telling={telling7} />
          <NewCounting loading={loading} telling={telling8} />
          <NewCounting loading={loading} telling={telling9} />
          <NewCounting loading={loading} telling={telling10} />
        </div>
        {/* <pre>
        <React.Fragment>{JSON.stringify(telling1)}</React.Fragment>
      </pre> */}
      </div>
    </section>
  );
};
export default OldLists;
