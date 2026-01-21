import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import Balance from './Balance';
import MiniStatement from './MiniStatement';

export default function Dashboard() {
  const name = useSelector((state) => state.user.name);
  const gender = useSelector((state) => state.user.gender);
  const [screen, setScreen] = useState('menu');
  const title = gender === 'male' ? 'MR.' : 'Mrs.';
  const dispatch = useDispatch();
  return (
    <>
      {screen === 'menu' && (
        <div className="dashboard-container">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <h2>
                {' '}
                Welcome back, <br /> {title} {name}
              </h2>
            </div>
            <div className="dashboard-body">
              <button
                className="dashboard-btns"
                onClick={() => setScreen('withdraw')}
              >
                WITHDRAW
              </button>
              <button
                className="dashboard-btns"
                onClick={() => setScreen('deposit')}
              >
                DEPOSIT
              </button>
              <button
                className="dashboard-btns"
                onClick={() => setScreen('statement')}
              >
                MINI-STATEMENT
              </button>
              <button
                className="dashboard-btns"
                onClick={() => setScreen('balance')}
              >
                BALANCE-ENQUIRY
              </button>
            </div>
            <div className="dashboard-footer">
              <button
                className="back-button"
                onClick={() => dispatch({ type: 'LOGOUT' })}
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === 'withdraw' && <Withdraw setScreen={setScreen} />}
      {screen === 'deposit' && <Deposit setScreen={setScreen} />}
      {screen === 'balance' && <Balance setScreen={setScreen} />}
      {screen === 'statement' && <MiniStatement setScreen={setScreen} />}
    </>
  );
}
