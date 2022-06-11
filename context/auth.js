import firebase from "../firebase/initFirebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const uiConfig = {
  signInSuccessfull: "/",
  //   signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function signInScreen() {
  return (
    <div className="container-sm ">
      <h1>Login form</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Epost</Form.Label>
          <Form.Control type="email" placeholder="Epost Adresse" />
          <Form.Text className="text-muted">
            Din epost vil ikke bli delt med noen.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default signInScreen;
