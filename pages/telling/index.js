import { Fragment } from "react";
import { useRouter } from "next/router";
import NyTelling from "./nytelling";
import Footer from "../../components/layout/footer";

function Telling(props) {
  const router = useRouter();

  function sendTilTelleside() {
    const tellingUrl = `/telling/nytelling`;
    router.push(tellingUrl);
  }

  function telleKnapp(e) {
    e.preventDefault();
    console.log("click");
    sendTilTelleside();
  }

  // Here there will be a API-call to the firebase server for fetching the children. For Now we use dummy data.
  const barn = [
    { id: 1, navn: "Aria", tilstede: true, avdeling: "Avdeling 8" },
    { id: 2, navn: "Per", tilstede: true, avdeling: "Avdeling 8" },
    { id: 3, navn: "Olav", tilstede: true, avdeling: "Avdeling 8" },
    { id: 4, navn: "Kari", tilstede: true, avdeling: "Avdeling 8" },
    { id: 5, navn: "Harald", tilstede: true, avdeling: "Avdeling 8" },
    { id: 6, navn: "Sonja", tilstede: true, avdeling: "Avdeling 8" },
    { id: 7, navn: "Mette-Marit", tilstede: true, avdeling: "Avdeling 8" },
    { id: 8, navn: "Haakon", tilstede: true, avdeling: "Avdeling 8" },
    { id: 9, navn: "Magnus", tilstede: true, avdeling: "Avdeling 8" },
    { id: 10, navn: "Ellie", tilstede: true, avdeling: "Avdeling 8" },
    { id: 11, navn: "Nora", tilstede: true, avdeling: "Avdeling 8" },
    { id: 12, navn: "Tor Henning", tilstede: true, avdeling: "Avdeling 8" },
    { id: 13, navn: "Heidi", tilstede: true, avdeling: "Avdeling 8" },
  ];
  return (
    <Fragment>
      <div className="container-fluid mx-auto center bg-light">
        <NyTelling />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Telling;
