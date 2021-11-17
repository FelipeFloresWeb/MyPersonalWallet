import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import regex from '../utils/regex';

const LoginForm = function () {
  const [disableButton, setDisableButton] = useState(true);
  const [newUser, setNewUser] = useState({
    name: '', email: '', password: '', repeatPassword: '',
  });

  useEffect(() => {
    const {
      name, email, password, repeatPassword,
    } = newUser;

    if (name.length > 3
      && regex.email.test(email)
      && password.length > 5
      && password === repeatPassword) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [newUser]);

  return (
    <Container>
      <Link to="/login">To Login</Link>
      <h2>Account Create</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control onChange={(e) => setNewUser({ ...newUser, repeatPassword: e.target.value })} type="password" placeholder="Repeat Password" />
          <Form.Text className="text-muted">
            Well never share your password with anyone else.
          </Form.Text>
        </Form.Group>

        <Button disabled={disableButton} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
