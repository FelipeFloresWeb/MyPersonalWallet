import {
  USER_LOGIN, USER_LOGIN_SUCESS, USER_LOGIN_ERROR, USER_CREATE_SUCESS, USER_CREATE_ERROR,
} from '../actions';

const INITIAL_STATE = {
  createOk: false,
  createError: false,
  userOk: false,
  loginError: false,
  loading: false,
  email: '',
  name: '',
  balance: 0,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_CREATE_SUCESS:
      return {
        ...state,
        createOk: true,
        createError: false,
        email: action.payload.email,
        name: action.payload.name,
        balance: action.payload.balance,
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
        loading: false,
        userOk: true,
        loginError: false,
      };
    default:
      return state;
  }
}

export default userReducer;
