import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import regex from '../../../utils/regex';
import { mockAPIThunk, currencyAPIThunk } from '../../../actions';
import { setToLocalStorage, getItemFromLocalStorage } from '../../../utils/localStorage';

const LoginForm = function (props) {
  const {
    userApi, currencyApi, userOk, loginError,
  } = props;

  const emailInput = useRef(null);

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

  useEffect(() => {
    emailInput.current.value = getItemFromLocalStorage('email');
    setUser({ ...user, email: getItemFromLocalStorage('email') });
  }, []);

  const getCurrUser = async () => {
    const data = { email: user.email, password: user.password };
    await userApi(data);
    await currencyApi();

    if (loginError) {
      return Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }

    return Swal.fire({
      title: 'Sucess!',
      text: 'Continue in Main Page...',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  return (
    <Container>
      {userOk ? <Navigate to="/main" /> : ''}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailInput} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Enter email" />
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
          <Form.Check onClick={() => setToLocalStorage('email', user.email)} type="checkbox" label="Check me out" />
        </Form.Group>

        <Button onClick={getCurrUser} disabled={disableButton} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userApi: (payload) => dispatch(mockAPIThunk(payload)),
  currencyApi: () => dispatch(currencyAPIThunk()),
});

const mapStateToProps = ({ user: { userOk, loginError } }) => ({
  userOk,
  loginError,
});

LoginForm.propTypes = {
  userApi: PropTypes.func,
  currencyApi: PropTypes.func,
  userOk: PropTypes.bool,
  loginError: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
