import ReadFromDB from "../../firebase/readFromDB";

import { getDatabase, ref, onValue, get, child } from "firebase/database";

import { Fragment, useEffect, useRef, useState } from "react";
import SearchBar from "./search-bar";
import NewCounting from "./new-counting";
import React from "react";
import { clearIndicatorCSS } from "react-select/dist/declarations/src/components/indicators";

// Need: getting data from db
// Search bar and button
// renderd list.

const OldLists = () => {
  // function OldLists() {
  const [showOldLists, setShowOldLists] = useState(false);
  const [oldLists, setOldLists] = useState();
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
  ] = clean;
  //console.log("log fra telling", telling1, telling2, "Telling3: ", telling3);

  return (
    <div className="container text-center margin--top--medium bg-gray-50">
      {loading ? <div className="spinner"></div> : null}
      <h1 className=" text-gray-600 text-4xl uppercase tracking-wide mb-6">
        Søk i gamle lister
      </h1>

      <SearchBar dbArr={clean} />
      <div className="container flex flex-row justify-around flex-wrap mt-4">
        <NewCounting loading={loading} telling={telling1} />

        <NewCounting loading={loading} telling={telling2} />
        <NewCounting loading={loading} telling={telling3} />
        <NewCounting loading={loading} telling={telling4} />
        <NewCounting loading={loading} telling={telling5} />
        <NewCounting loading={loading} telling={telling6} />
        <NewCounting loading={loading} telling={telling7} />
        <NewCounting loading={loading} telling={telling8} />

        {/* <NewCounting loading={loading} />
        <NewCounting loading={loading} />
        <NewCounting loading={loading} />

        <NewCounting loading={loading} />
  <NewCounting loading={loading} /> */}
      </div>
      {/* <pre>
        <React.Fragment>{JSON.stringify(telling1)}</React.Fragment>
      </pre> */}
      {/* <div>
          <Button onClick={renderList}>Render liste</Button>
        </div> */}

      {/* <h1>her kommer liste</h1>
        {
          <ul className="list-group">
            {dbRef.flat().map((item) => {
              return (
                <>
                  <div>Tellinger</div>
                  <li className="list-group-item" key={uniqid()}>
                    <p>{item.avdeling} </p>
                    <p>{item.dato}</p>
                    <p>{item.navn}</p>
                  </li>
                </>
              );
            })}
          </ul>
        } */}
      {/* <List dbRef={dbRef} loading={loading} setLoading={setLoading} /> */}
    </div>
  );
};
export default OldLists;
