import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import UserContext from "../../context/userContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { email, password, passwordCheck, displayName };
    await Axios.post("http://localhost:5000/user/register", newUser);
    const loginRes = await Axios.post("http://localhost:5000/user/login", {
      email,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <>
      <h2>Register New User</h2>
      <Form onSubmit={submit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="new-username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="new-password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            placeholder="Display Name"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </Form.Group>
        <Form.Control type="submit" value="Register" />
      </Form>
    </>
  );
}
