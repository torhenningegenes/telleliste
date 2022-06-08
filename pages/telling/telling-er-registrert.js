import Link from "next/link";

function TellingErRegistrert() {
  return (
    <div className="container-fluid text-center">
      <h1>Telling er registrert!</h1>
      <p>Dato: 22.3.44</p>
      <p>Antall barn: 16</p>
      <Link href={"/"}>
        <button>Tilbake</button>
      </Link>
    </div>
  );
}

export default TellingErRegistrert;
