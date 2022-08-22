import SignUp from "../context/signUp";

function NewUser() {
  return (
    <container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </container>
  );
}

export default NewUser;
