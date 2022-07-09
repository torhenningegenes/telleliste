function List(props) {
  const { navn, avdeling } = props;
  return (
    <li>
      <div className="navnOgAvdeling">{navn}</div>
      <div className="navnOgAvdeling">{avdeling}</div>
      hei sveis
    </li>
  );
}

export default List;
