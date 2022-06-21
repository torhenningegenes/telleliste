import { Fragment } from "react";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth, LogIn } from "../context/auth-context";
import { useRouter } from "next/router";

function LoginUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth;

  async function handleSubmit(e) {
    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    if (!passwordRef.current.value) {
      return setError("Skriv inn ditt passord");
    }

    try {
      setError("");
      setLoading(true);
      await LogIn(emailRef.current.value, passwordRef.current.value);
      console.log("Success");
      router.push("/home");

      // Pass in e to get the error
    } catch (e) {
      console.log(e);
      setError("Failed to login");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="center mb-4">Logg in</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="epost">
                  <Form.Label>Epost</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Passord</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button type="submit" className="w-100 mt-2" disabled={loading}>
                  Logg inn
                </Button>
              </Form>
              <p className="text-dark">{currentUser && currentUser.email}</p>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">{currentUser}</div>
        </div>
      </Container>
    </Fragment>
  );
}

export default LoginUser;
