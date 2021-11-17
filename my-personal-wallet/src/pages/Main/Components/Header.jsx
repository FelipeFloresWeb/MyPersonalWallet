import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Nav, Col, Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = function (props) {
  const {
    name, email, balance, setHandlePages,
  } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand>{`Welcome: ${name || 'Loading...'}`}</Navbar.Brand>
          </Col>

          <Nav className="me-auto">
            <Col>
              <Nav.Link onClick={() => setHandlePages('wallet')} href="#wallet">Wallet</Nav.Link>
            </Col>
            <Col>
              <Nav.Link onClick={() => setHandlePages('currencies')} href="#currencies">Currencies</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Col>
            <Col>
              <Navbar.Brand>{email || 'Loading...'}</Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand>{`Balance: R$ ${balance || 0}`}</Navbar.Brand>
            </Col>
          </Nav>

        </Row>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ user: { name, email, balance } }) => ({
  name,
  email,
  balance,
});

Header.propTypes = {
  setHandlePages: PropTypes.func,
  email: PropTypes.string,
  name: PropTypes.string,
  balance: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Header);
