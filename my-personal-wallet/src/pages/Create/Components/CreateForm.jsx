import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CreateForm = function (props) {
  const {
    setNewUser, disableButton, newUser, createUser,
  } = props;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRepitPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control onChange={(e) => setNewUser({ ...newUser, repeatPassword: e.target.value })} type="password" placeholder="Repeat Password" />
        <Form.Text className="text-muted">
          Well never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Button disabled={disableButton} onClick={createUser} variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
};

CreateForm.propTypes = {
  setNewUser: PropTypes.func,
  disableButton: PropTypes.bool,
  newUser: PropTypes.shape({}),
  createUser: PropTypes.func,
}.isRequired;

export default CreateForm;
