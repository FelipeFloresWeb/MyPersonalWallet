import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import regex from '../../utils/regex';

const LoginForm = function () {
  const [disableButton, setDisableButton] = useState(true);
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    const { email } = user;

    if (regex.email.test(email) && user.password.length > 5) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Well never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <span>Don&apos;t have an account? Sign up</span>
        <Link to="/create"> here.</Link>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button disabled={disableButton} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
