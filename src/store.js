import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'Safin Sulthan Narasapuram',
    pin: 2003,
    isAuthenticated: false,
  },
  account: {
    balance: 25000,
    transactions: [],
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
        },
      };
    case 'WITHDRAW':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance - action.payload,
          transactions: [
            ...state.account.transactions,
            `Withdrawn ₹${action.payload}`,
          ],
        },
      };
    case 'DEPOSIT':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance + action.payload,
          transactions: [
            ...state.account.transactions,
            `Deposited  ₹${action.payload}`,
          ],
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
