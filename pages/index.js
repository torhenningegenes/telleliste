import { async } from "@firebase/util";
import StartButton from "../components/start-button";
import firebase from "../firebase/initFirebase";

firebase();
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

export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_HEI_PAA_DEG);
  return {
    props: {
      hello: "World",
    },
  };
}
