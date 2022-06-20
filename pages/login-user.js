import { Container } from "react-bootstrap";
import LoginUser from "../context/login";

function LoginPage() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <LoginUser />
      </div>
    </Container>
  );
}

export default LoginPage;
