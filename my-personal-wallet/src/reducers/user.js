import {
  USER_LOGIN, USER_LOGIN_SUCESS, USER_LOGIN_ERROR, USER_CREATE_SUCESS,
  USER_CREATE_ERROR, ADD_USER_SPENT, ADD_USER_SPENT_ERROR, ADD_USER_GAIN_ERROR,
  ADD_USER_GAIN,
} from '../actions';

const INITIAL_STATE = {
  gainError: false,
  spentError: false,
  createOk: false,
  createError: false,
  userOk: false,
  loginError: false,
  loading: false,
  email: '',
  name: '',
  balance: 0,
  wallets: {},
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USER_GAIN_ERROR:
      return {
        ...state,
        gainError: true,
      };
    case ADD_USER_SPENT_ERROR:
      return {
        ...state,
        spentError: true,
      };
    case ADD_USER_GAIN:
      return {
        ...state,
        balance: Number(Number(state.balance) + Number(action.payload.balance)).toFixed(2),
        wallets: { ...action.payload.wallets },
        spentError: false,
      };
    case ADD_USER_SPENT:
      return {
        ...state,
        balance: Number(Number(state.balance) - Number(action.payload.balance)).toFixed(2),
        wallets: { ...action.payload.wallets },
        spentError: false,
      };
    case USER_CREATE_SUCESS:
      return {
        ...state,
        createOk: true,
        createError: false,
        email: action.payload.email,
        name: action.payload.name,
        balance: action.payload.balance,
        wallets: action.payload.wallets,
      };
    case USER_CREATE_ERROR:
      return {
        ...state,
        createOk: false,
        createError: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };
    case USER_LOGIN_SUCESS:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        balance: action.payload.balance,
        wallets: action.payload.wallets,
        loading: false,
        userOk: true,
        loginError: false,
      };
    default:
      return state;
  }
}

export default userReducer;
