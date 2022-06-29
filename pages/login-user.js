import { Container } from "react-bootstrap";
import BgImg from "../components/bg-img";
import LoginUser from "../context/login";

function LoginPage() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <BgImg />
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <LoginUser />
      </div>
    </Container>
  );
}

export default LoginPage;
