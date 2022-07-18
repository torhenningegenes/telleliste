import uniqid from "uniqid";

function List(props) {
  const { dbRef } = props;
  const dbArray: string[] = Object.values(dbRef);
  let avdelingName: string = "Avdeling 8";

  // Sette name i filter fra user search bruke backticks
  // string methoder. Sette alt som lowercase så sette første bokstav til Uppercase. fjerne alt white-space så legge til whitespace på [8]
  const clean = dbRef
    .flat()
    .filter((e) => e != "Hei fra context")
    .filter((e) => e != "Telling");
  console.log("Clean array: ", clean);

  return (
    <>
      <h1>her kommer liste</h1>
      {
        <ul className="list-group">
          <h2>{avdelingName}</h2>
          {/* Need to fix mapping logic */}
          {clean.map((item) => {
            return (
              <>
                <li className="list-group-item mb-1 shadow" key={uniqid()}>
                  <p>{item.dato}</p>
                </li>
                <li className="list-group-item mb-1 shadow" key={uniqid()}>
                  <p>{item.avdeling}</p>
                  <p>{item.navn}</p>
                </li>
              </>
            );
          })}
        </ul>
      }
    </>
  );
}

export default List;
