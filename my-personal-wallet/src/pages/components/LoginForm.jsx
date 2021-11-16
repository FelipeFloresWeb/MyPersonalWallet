import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = function () {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Well never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <span>Don&apos;t have an account? Sign up</span>
        <Link to="/create"> here.</Link>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
