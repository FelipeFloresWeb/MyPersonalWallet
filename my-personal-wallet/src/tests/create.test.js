import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../App';
import renderWithProvider from './helpers/renderWithProvider';

describe('Test whether when rendering the Create component...', () => {
  window.scrollTo = jest.fn();
  test('that inputs are present on the page', () => {
    renderWithProvider(<App />);

    const link = screen.getByRole('link', { name: /here/i });
    userEvent.click(link);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/ig);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(repeatPasswordInput).toBeInTheDocument();
  });

  test('if the inputs are digitizable', () => {
    renderWithProvider(<App />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/ig);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    userEvent.type(nameInput, 'teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456');
    userEvent.type(repeatPasswordInput, '123456');

    expect(nameInput).toHaveValue('teste');
    expect(emailInput).toHaveValue('teste@teste.com');
    expect(passwordInput).toHaveValue('123456');
    expect(repeatPasswordInput).toHaveValue('123456');
  });

  test('whether the button remains disabled when entering incorrect values in inputs', () => {
    renderWithProvider(<App />);

    const button = screen.getByRole('button', { name: /Submit/i });

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/ig);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    userEvent.type(nameInput, 'teste');
    userEvent.type(emailInput, 'teste@te');
    userEvent.type(passwordInput, '12345');
    userEvent.type(repeatPasswordInput, '123456');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('whether the button is enabled when entering valid data into inputs', () => {
    renderWithProvider(<App />);

    const button = screen.getByRole('button', { name: /Submit/i });

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/ig);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    userEvent.type(nameInput, 'teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456');
    userEvent.type(repeatPasswordInput, '123456');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('if the user is redirected to the main page after clicking the submit button', async () => {
    renderWithProvider(<App />);

    const button = screen.getByRole('button', { name: /Submit/i });

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/ig);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    userEvent.type(nameInput, 'teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456');
    userEvent.type(repeatPasswordInput, '123456');

    expect(button).not.toBeDisabled();
    userEvent.click(button);

    const alertButton = await waitFor(() => screen.getByRole('button', { name: /lets/i }), { timeout: 5000 });
    userEvent.click(alertButton);

    const link = screen.getByRole('link', { name: 'Wallet' });
    expect(link).toBeInTheDocument();
  });
});
