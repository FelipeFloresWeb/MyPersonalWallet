import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = function () {
  return (
    <Container>
      <Link to="/login">To Login</Link>
      <h2>Account Create</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
          <Form.Label>Repit Password</Form.Label>
          <Form.Control type="password" placeholder="Repit Password" />
          <Form.Text className="text-muted">
            Well never share your password with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
