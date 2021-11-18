import currencyAPI from '../services/currencyApi';
import mockApi from '../services/mockApi';

export const USER_CREATE_SUCESS = 'USER_CREATE_SUCESS';
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const ADD_EXCHANGE_RATES = 'ADD_EXCHANGE_RATES';
export const ADD_USER_SPENT = 'ADD_USER_SPENT';
export const ADD_USER_SPENT_ERROR = 'ADD_USER_SPENT_ERROR';
export const ADD_USER_GAIN_ERROR = 'ADD_USER_GAIN_ERROR';
export const ADD_USER_GAIN = 'ADD_USER_GAIN';

export const addUserGainError = () => ({
  type: ADD_USER_GAIN_ERROR,
});

export const addUserSpentError = () => ({
  type: ADD_USER_SPENT_ERROR,
});

export const addUserGain = (payload) => ({
  type: ADD_USER_GAIN,
  payload,
});

export const addUserSpent = (payload) => ({
  type: ADD_USER_SPENT,
  payload,
});

export const userCreateSucess = (payload) => ({
  type: USER_CREATE_SUCESS,
  payload,
});

export const userCreateError = () => ({
  type: USER_CREATE_ERROR,
});

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLoginSucess = (payload) => ({
  type: USER_LOGIN_SUCESS,
  payload,
});

export const userLoginError = () => ({
  type: USER_LOGIN_ERROR,
});

export const LoadCurrencies = () => ({
  type: LOAD_CURRENCIES,
});

export const addExchangeRates = (payload) => ({
  type: ADD_EXCHANGE_RATES,
  payload,
});

// Sell Currencies
export const mockAPIThunkGain = (payload) => async (dispatch) => {
  if (payload.balance === 'NaN') return dispatch(addUserGainError());
  const {
    status, user: { balance, wallets },
  } = await mockApi.addSpentUser(
    { email: payload.email, wallets: payload.wallets, balance: payload.balance },
  );

  if (status !== 201) return dispatch(addUserGainError());

  return dispatch(addUserGain({ balance, wallets }));
};

// Buy Currencies
export const mockAPIThunkSpent = (payload) => async (dispatch) => {
  if (payload.balance === 'NaN') return dispatch(addUserSpentError());
  const {
    status, user: { balance, wallets },
  } = await mockApi.addSpentUser(
    { email: payload.email, wallets: payload.wallets, balance: payload.balance },
  );

  if (status !== 201) return dispatch(addUserSpentError());

  return dispatch(addUserSpent({ balance, wallets }));
};

// Create User
export const mockAPIThunkCreate = (payload) => async (dispatch) => {
  const {
    status,
    user: {
      balance, email, name, wallets,
    },
  } = await mockApi.createUser(
    { name: payload.name, email: payload.email, password: payload.password },
  );

  if (status !== 201) return dispatch(userLoginError());

  return dispatch(userLoginSucess({
    name, email, balance, wallets,
  }));
};

// Login User
export const mockAPIThunk = (payload) => async (dispatch) => {
  dispatch(userLogin());
  const {
    status,
    user: {
      balance, email, name, wallets,
    },
  } = await mockApi.getUser({ email: payload.email, password: payload.password });
  if (status !== 200) return dispatch(userLoginError());

  return dispatch(userLoginSucess({
    name, email, balance, wallets,
  }));
};

// Load Currencies
export const currencyAPIThunk = () => async (dispatch) => {
  dispatch(LoadCurrencies());

  const currencies = await currencyAPI();

  dispatch(addExchangeRates(currencies));
};
