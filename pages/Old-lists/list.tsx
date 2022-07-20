import React from "react";
import uniqid from "uniqid";

function List(props) {
  const { dbRef } = props;
  const dbArray: string[] = Object.values(dbRef);
  let avdelingName: string = "Avdeling 8";

  // Sette name i filter fra user search bruke backticks
  // string methoder. Sette alt som lowercase så sette første bokstav til Uppercase. fjerne alt white-space så legge til whitespace på [8]
  const clean = dbArray
    .flat()
    .reverse()
    .filter((e) => e != "Hei fra context");
  //.filter((e) => e != "Telling");
  console.log("Clean array: ", clean);

  return (
    <>
      <h1>her kommer liste</h1>
      {
        <ul className="list-group">
          <h2 className="text-bold shadow-xl text-blue-600">{avdelingName}</h2>

          {/* Need to fix mapping logic */}
          {/* {Object.keys(clean).map((item) => { */}
          {clean.map((item) => {
            return (
              <>
                <li key={uniqid()} className="list-group-item mb-1 shadow">
                  {/* {item.Telling.dato ? <p>{item.dato}</p> : null}
                  {item.avdeling ? <p>{item.avdeling}</p> : null}
                  {item.navn ? <p>{item.navn}</p> : null} */}
                  {JSON.stringify(item)}
                </li>
              </>
            );
          })}
        </ul>
      }
      <pre>
        <React.Fragment>{JSON.stringify(clean)}</React.Fragment>
      </pre>
    </>
  );
}

export default List;
