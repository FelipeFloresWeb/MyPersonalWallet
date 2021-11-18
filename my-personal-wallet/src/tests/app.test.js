import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../App';
import renderWithProvider from './helpers/renderWithProvider';

const VALID_EMAIL = 'email1@email.com';
const VALID_PASSWORD = '123456';

describe('Testa se ao renderizar o componente App...', () => {
  test('o usuário é redirecionado para a rota "/login"', async () => {
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

  test('a página dois inputs: um de email outro de password', () => {
    renderWithProvider(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('se os inputs são digitávies', () => {
    renderWithProvider(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, 'teste');
    userEvent.type(passwordInput, 'teste123');

    expect(emailInput).toHaveValue('teste');
    expect(passwordInput).toHaveValue('teste123');
  });

  test('se ao buscar por dados inválidos aparece uma mensagem de erro: "Usuário não encontrado".', () => {
    renderWithProvider(<App />);
    const button = screen.getByRole('button', { name: 'Login' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, 'teste');
    userEvent.type(passwordInput, 'teste123');

    userEvent.click(button);

    const notHaveUserMsg = screen.getByRole('heading', { name: /usuário não encontrado/i, level: 2 });

    expect(button).toBeInTheDocument();
    expect(notHaveUserMsg).toBeInTheDocument();
    expect(notHaveUserMsg).toHaveTextContent('Usuário não encontrado');
  });

  test('se ao buscar por dados válidos aparece uma mensagem: "Usuário encontrado!".', () => {
    renderWithProvider(<App />);
    const button = screen.getByRole('button', { name: 'Login' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    userEvent.click(button);

    const notHaveUserMsg = screen.getByRole('heading', { name: /usuário encontrado/i, level: 2 });

    expect(button).toBeInTheDocument();
    expect(notHaveUserMsg).toBeInTheDocument();
    expect(notHaveUserMsg).toHaveTextContent('Usuário encontrado!');
  });
});

describe('Verifica...', () => {
  test('se o usuário é redirecionado para página principal ao clicar no botao que dispara uma ação global', async () => {
    const { history } = renderWithProvider(<App />);
    const { pathname } = history.location;

    const button = screen.getByRole('button', { name: /send user to redux state/i });

    userEvent.click(button);

    await waitFor(() => screen.getByRole('heading', { name: /bem vind/i, level: 2 }));
    const title = screen.getByRole('heading', { name: /bem vind/i, level: 2 });

    expect(pathname).toBe('/');
    expect(title).toBeInTheDocument();
  });
});
