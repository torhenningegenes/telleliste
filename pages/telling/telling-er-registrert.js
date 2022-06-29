import Link from "next/link";

function TellingErRegistrert() {
  return (
    <div className="container-fluid text-center">
      <h1>Telling er registrert!</h1>
      <div>Dato: 22.3.44</div>
      <div>Antall barn: 16</div>
      <Link href={"/"}>
        <button>Tilbake</button>
      </Link>
    </div>
  );
}

export default TellingErRegistrert;
