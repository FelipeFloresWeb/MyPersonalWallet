import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../App';
import renderWithProvider from './helpers/renderWithProvider';

const VALID_EMAIL = 'email1@email.com';
const VALID_PASSWORD = '123456';

describe('Test whether when rendering the Main component...', () => {
  window.scrollTo = jest.fn(); // https://stackoverflow.com/questions/57311971/error-not-implemented-window-scrollto-how-do-we-remove-this-error-from-jest-t
  test('a message appears containing the text "Select Wallet to view your wallet or Currencies to view market offers"', async () => {
    renderWithProvider(<App />);

    const button = screen.getByRole('button', { name: 'Submit' });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    userEvent.click(button);

    const alertButton = await waitFor(() => screen.getByRole('button', { name: /cool/i }), { timeout: 1500 });
    userEvent.click(alertButton);

    const text = screen.getByRole(
      'heading',
      { name: 'Select Wallet to view your wallet or Currencies to view market offers', level: 3 },
    );

    expect(text).toBeInTheDocument();
  });

  test('Clicking on the X icon (button) will make the message disappear', () => {
    renderWithProvider(<App />);

    const button = screen.getByTestId('close-button');
    const div = screen.getByTestId('close-div');

    expect(div).toBeVisible();

    userEvent.click(button);

    expect(div).not.toBeVisible();
  });

  test('Clicking on "Currencies" will render all the currencies returned from the Api', async () => {
    renderWithProvider(<App />);

    const button = screen.getByRole('link', { name: 'Currencies' });

    userEvent.click(button);

    const cadDiv = await waitFor(() => screen.getByText('CAD'), { timeout: 1500 });
    const gbpDiv = await waitFor(() => screen.getByText('GBP'), { timeout: 1500 });
    const ilsDiv = await waitFor(() => screen.getByText('ILS'), { timeout: 1500 });

    expect(cadDiv).toBeInTheDocument();
    expect(gbpDiv).toBeInTheDocument();
    expect(ilsDiv).toBeInTheDocument();
  });
});
