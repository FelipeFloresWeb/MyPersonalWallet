import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';
import appLogo from '../../assets/appLogo.png';
// https://pngtree.com/

const Login = function () {
  return (
    <Container>
      <Container>
        <Row className="justify-content-md-center">
          <img style={{ width: '20rem' }} src={appLogo} alt="app logo" />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto"><h2>My Personal Wallet</h2></Col>
        </Row>
        <LoginForm />
      </Container>
    </Container>
  );
};

export default Login;
