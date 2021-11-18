import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

import { mockAPIThunkCreate, currencyAPIThunk } from '../../actions';
import checkUser from '../../effects/checkUser';
import CreateForm from './Components/CreateForm';

const Create = function (props) {
  const {
    createApi, createError, userOk, currencyApi,
  } = props;

  const [disableButton, setDisableButton] = useState(true);
  const [newUser, setNewUser] = useState({
    name: '', email: '', password: '', repeatPassword: '',
  });

  useEffect(() => {
    const {
      name, email, password, repeatPassword,
    } = newUser;

    const userEffect = checkUser(name, email, password, repeatPassword);

    if (userEffect) return setDisableButton(false);

    return setDisableButton(true);
  }, [newUser]);

  const createUser = async () => {
    const data = { name: newUser.name, email: newUser.email, password: newUser.password };
    await createApi(data);
    if (createError) {
      return Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    await currencyApi();
    return Swal.fire({
      title: 'Sucess!',
      text: 'User Created! Going to Main Page...',
      icon: 'success',
      confirmButtonText: 'Lets Go!',
    });
  };

  return (
    <Container>
      {userOk ? <Navigate to="/main" /> : ''}
      <Link to="/login">To Login</Link>
      <h2>Account Create</h2>
      <CreateForm
        createUser={createUser}
        newUser={newUser}
        setNewUser={setNewUser}
        disableButton={disableButton}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createApi: (payload) => dispatch(mockAPIThunkCreate(payload)),
  currencyApi: () => dispatch(currencyAPIThunk()),
});

const mapStateToProps = ({ user: { createError, userOk } }) => ({
  createError,
  userOk,
});

Create.propTypes = {
  createError: PropTypes.bool,
  userOk: PropTypes.bool,
  createApi: PropTypes.func,
  currencyApi: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Create);
