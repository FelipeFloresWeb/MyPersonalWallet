import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import checkUser from '../effects/checkUser';
import ApiMock from '../services/Api';
import CreateForm from './components/CreateForm';

const LoginForm = function () {
  const [disableButton, setDisableButton] = useState(true);
  const [newUser, setNewUser] = useState({
    name: '', email: '', password: '', repeatPassword: '',
  });
  const [redirectUser, setRedirectUser] = useState(false);

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
    const { status } = await ApiMock.createUser(data);
    if (status !== 201) {
      return Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    setRedirectUser(true);
    return Swal.fire({
      title: 'Sucess!',
      text: 'User Created! Going to Main Page...',
      icon: 'success',
      confirmButtonText: 'Lets Go!',
    });
  };

  return (
    <Container>
      {redirectUser ? <Navigate to="/main" /> : ''}
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

export default LoginForm;
