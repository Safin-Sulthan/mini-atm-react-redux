import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './Withdraw.css';
export default function Withdraw({ setScreen }) {
  const balance = useSelector((state) => state.account.balance);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  function handleWithdraw() {
    const withdrawAmount = Number(amount);
    if (withdrawAmount <= 0) {
      setMessage('*** Enter Valid Amount ***');
      setMessageType('error');
      return;
    }
    if (withdrawAmount > balance) {
      setMessage('!!! Insufficient Balance !!!');
      setMessageType('error');
      return;
    }
    dispatch({ type: 'WITHDRAW', payload: withdrawAmount });
    setMessage('***** Amount WithDrawn Sucessful *****');
    setMessageType('success');
    setAmount('');
  }
  return (
    <div className="withdraw-container">
      <div className="withdraw-card">
        <div className="withdraw-header">
          <h3>Withdraw Money</h3>
          <div className="withdraw-body">
            <p>Available Balance: ₹{balance}</p>
            <input
              type="number"
              placeholder="Enter Amount to With Draw"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {message && <p className={`message ${messageType}`}>{message}</p>}
            <div className="withdraw-footer">
              <button className="withdraw-btn" onClick={handleWithdraw}>
                With Draw
              </button>
              <button className="back-button" onClick={() => setScreen('menu')}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
