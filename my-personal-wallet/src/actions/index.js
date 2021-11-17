import currencyAPI from '../services/currencyApi';
import mockApi from '../services/mockApi';

export const USER_CREATE_SUCESS = 'USER_CREATE_SUCESS';
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const ADD_EXCHANGE_RATES = 'ADD_EXCHANGE_RATES';

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

export const mockAPIThunkCreate = (payload) => async (dispatch) => {
  dispatch(userLogin());

  const { status, user: { name, email, balance } } = await mockApi.createUser(
    { name: payload.name, email: payload.email, password: payload.password },
  );

  if (status !== 201) return dispatch(userCreateError());

  return dispatch(userCreateSucess({ email, name, balance }));
};

export const mockAPIThunk = (payload) => async (dispatch) => {
  dispatch(userLogin());

  const {
    status,
    user: {
      balance, email, name,
    },
  } = await mockApi.getUser({ email: payload.email, password: payload.password });
  if (status !== 200) return dispatch(userLoginError());

  return dispatch(userLoginSucess({ name, email, balance }));
};

export const currencyAPIThunk = () => async (dispatch) => {
  dispatch(LoadCurrencies());

  const currencies = await currencyAPI();

  dispatch(addExchangeRates(currencies));
};
