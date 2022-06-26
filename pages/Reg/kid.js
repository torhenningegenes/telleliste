import uniqid from "uniqid";

function Kid(props) {
  const { navn, avdeling } = props;

  return (
    <li
      className="list-group-item list-barn d-flex flex-row justify-content-between align-items-center mt-4"
      key={uniqid}
    >
      <h4>{navn}</h4>
      <h6>{avdeling}</h6>
      <button>Kryss inn</button>
    </li>
  );
}

export default Kid;
