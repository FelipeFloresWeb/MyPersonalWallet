import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../App';
import renderWithProvider from './helpers/renderWithProvider';

const VALID_EMAIL = 'email1@email.com';
const VALID_PASSWORD = '123456';

describe('Test whether when rendering the App component...', () => {
  test('the user is redirected to the "/login" route', async () => {
    const { history } = renderWithProvider(<App />);
    const { pathname } = history.location;

    const title = screen.getByRole('heading', {
      name: /login/i,
      level: 2,
    });

    expect(pathname).toBe('/');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Login');
  });

  test('the page has two inputs: one for email and one for password', () => {
    renderWithProvider(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('if the inputs are digitizable', () => {
    renderWithProvider(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, 'teste');
    userEvent.type(passwordInput, 'teste123');

    expect(emailInput).toHaveValue('teste');
    expect(passwordInput).toHaveValue('teste123');
  });

  test('whether the button remains disabled when entering incorrect values in inputs', () => {
    renderWithProvider(<App />);
    const button = screen.getByRole('button', { name: 'Submit' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, 'testeas');
    userEvent.type(passwordInput, 'teste13');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('whether the button is enabled when entering valid data into inputs', () => {
    renderWithProvider(<App />);
    const button = screen.getByRole('button', { name: 'Submit' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('if the user is redirected to the main page after clicking the login button', async () => {
    renderWithProvider(<App />);
    const button = screen.getByRole('button', { name: 'Submit' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(button);

    const alertButton = await waitFor(() => screen.getByRole('button', { name: 'Cool' }), { timeout: 2000 });

    userEvent.click(alertButton);

    const link = screen.getByRole('link', { name: 'Wallet' });
    expect(link).toBeInTheDocument();
  });
});
