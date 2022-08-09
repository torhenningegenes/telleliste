import SignUp from "../context/signUp";
import { Container, Fragment } from "react-bootstrap";

function NewUser() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>
  );
}

export default NewUser;
