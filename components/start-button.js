function StartButton(props) {
  const hei = "hei på deg";

  return (
    <button className="btn btn-success btn-lg mb-5">
      {props.label}
      {hei}
    </button>
  );
}

export default StartButton;
