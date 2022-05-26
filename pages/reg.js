function Registrering() {
  const test = "test";

  let date = new Date();
  date = date.toLocaleDateString();
  console.log(date);
  console.log("test");
  return (
    <div>
      <h1>Registrering</h1>
      <h2>{date}</h2>
    </div>
  );
}
export default Registrering;
