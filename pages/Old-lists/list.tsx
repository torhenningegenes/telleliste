function List(props) {
  const { navn, avdeling, data } = props;

  console.log(data);
  return (
    <li>
      <div className="navnOgAvdeling">{navn}</div>
      <div className="navnOgAvdeling">{avdeling}</div>
      hei sveis
    </li>
  );
}

export default List;
