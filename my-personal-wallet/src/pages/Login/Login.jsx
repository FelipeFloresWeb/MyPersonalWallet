import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';

const Login = function () {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h2>Login</h2>
      </Row>
      <LoginForm />
    </Container>
  );
};

export default Login;
