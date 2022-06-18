import { Fragment } from "react";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuth, signup, currentUser } from "../context/auth-context";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth;

  const auth = getAuth();
  const newUser = auth.currentUser;

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // Pass in e to get the error
    } catch (e) {
      console.log(e);
      setError("Failed to create account");
      console.log(currentUser);
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <Container
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h3>{currentUser && currentUser.email}</h3>
              <h2 className="center mb-4">Opprett konto</h2>
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
                <Form.Group id="password-confirm">
                  <Form.Label>Bekreft passord</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="w-100 mt-2" disabled={loading}>
                  Opprett ny konto
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">Allerede konto? Log in</div>
          {currentUser}
        </div>
      </Container>
    </Fragment>
  );
}

export default SignUp;
