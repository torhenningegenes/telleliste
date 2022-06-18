import { Container } from "react-bootstrap";
import { logIn } from "../context/auth-context";

function LoginUser() {
  console.log(logIn());
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <p>Login</p>
      </div>
    </Container>
  );
}

export default LoginUser;
