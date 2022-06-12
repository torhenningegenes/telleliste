import { Fragment } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/auth-context";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth;

  function handleSubmit(e) {
    e.prevendDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <Fragment>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="center mb-4">Opprett konto</h2>
              <Form>
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
                <Button type="submit" className="w-100 mt-2">
                  Opprett ny konto
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">Allerede konto? Log in</div>
        </div>
      </Container>
    </Fragment>
  );
}

export default SignUp;
