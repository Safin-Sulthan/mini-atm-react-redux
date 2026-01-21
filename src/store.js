import { createStore } from 'redux';

const savedAccount = JSON.parse(localStorage.getItem('accountData'));

const initialState = {
  user: {
    name: savedAccount ? savedAccount.name : '',
    pin: savedAccount ? savedAccount.pin : null,
    gender: savedAccount ? savedAccount.gender : '',
    isAuthenticated: false,
  },
  account: {
    balance: savedAccount ? savedAccount.balance : 0,
    transactions: savedAccount ? savedAccount.transactions : [],
    hasAccount: savedAccount ? true : false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_ACCOUNT': {
      const { name, pin, gender, balance } = action.payload;

      const accountData = {
        name,
        pin,
        gender,
        balance,
        transactions: [],
      };

      localStorage.setItem('accountData', JSON.stringify(accountData));

      return {
        ...state,
        user: {
          name,
          pin,
          gender,
          isAuthenticated: false,
        },
        account: {
          balance,
          transactions: [],
          hasAccount: true,
        },
      };
    }

    case 'LOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
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

    case 'DEPOSIT': {
      const newBalance = state.account.balance + action.payload;
      const newTransactions = [
        ...state.account.transactions,
        `Deposited ₹${action.payload}`,
      ];

      localStorage.setItem(
        'accountData',
        JSON.stringify({
          name: state.user.name,
          pin: state.user.pin,
          balance: newBalance,
          transactions: newTransactions,
        }),
      );

      return {
        ...state,
        account: {
          ...state.account,
          balance: newBalance,
          transactions: newTransactions,
        },
      };
    }

    case 'WITHDRAW': {
      const newBalance = state.account.balance - action.payload;
      const newTransactions = [
        ...state.account.transactions,
        `Withdrawn ₹${action.payload}`,
      ];

      localStorage.setItem(
        'accountData',
        JSON.stringify({
          name: state.user.name,
          pin: state.user.pin,
          balance: newBalance,
          transactions: newTransactions,
        }),
      );

      return {
        ...state,
        account: {
          ...state.account,
          balance: newBalance,
          transactions: newTransactions,
        },
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);
