/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Nav, Col, Row, Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import logoutIcon from '../../../assets/logoutIcon.png';

import { currencyAPIThunk, resetState } from '../../../actions';

const Header = function (props) {
  const {
    name, email, balance, setHandlePages, currencyApi, logOutReset,
  } = props;

  const [redirect, setRedirect] = useState(false);

  const updateValues = async () => {
    Swal.fire({
      title: 'Sucess!',
      text: 'Update Currencies.',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
    await currencyApi();
  };

  const logOut = () => {
    logOutReset();
    setRedirect(true);
  };

  return (
    <Navbar bg="primary" variant="dark">
      {redirect ? <Navigate to="/login" /> : ''}
      <Container>
        <Row>
          <Col>
            <Navbar.Brand>
              <Button onClick={logOut}>
                <img src={logoutIcon} alt="logout icon" />
                Logout
              </Button>
            </Navbar.Brand>
          </Col>
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
              <Nav.Link onClick={updateValues} href="#updateValues">Update Values</Nav.Link>
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

const mapDispatchToProps = (dispatch) => ({
  currencyApi: () => dispatch(currencyAPIThunk()),
  logOutReset: () => dispatch(resetState()),
});

Header.propTypes = {
  setHandlePages: PropTypes.func,
  email: PropTypes.string,
  name: PropTypes.string,
  balance: PropTypes.func,
  currencyApi: PropTypes.func,
  logOutReset: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
