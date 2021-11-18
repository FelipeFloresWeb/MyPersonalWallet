import { LOAD_CURRENCIES, ADD_EXCHANGE_RATES } from '../actions';

const INITIAL_STATE = {
  isloading: false,
  exchangeRates: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return { ...state, isloading: true };
    case ADD_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRates: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
}

export default walletReducer;
