import StartButton from "../components/start-button";

function Home(props) {
  const label1 = "Ny liste";
  const label2 = "Se gamle lister";
  return (
    <div className="center">
      <h1 className="bg-body text-dark center">Velkommen til tellelista!</h1>
      <StartButton label={label1} />
      <br />
      <StartButton label={label2} />
    </div>
  );
}

export default Home;
