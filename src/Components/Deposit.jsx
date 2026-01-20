import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './Deposit.css';

export default function Deposit({ setScreen }) {
  const balance = useSelector((state) => state.account.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  function handleDeposit() {
    const depositAmount = Number(amount);
    if (depositAmount <= 0) {
      setMessage('Enter Correct Amount for Deposit');
      setMessageType('error');
      return;
    }
    dispatch({ type: 'DEPOSIT', payload: depositAmount });
    setMessage('**** Successfully Deposited Amount ****');
    setMessageType('success');
    setAmount('');
  }
  return (
    <div className="deposit-container">
      <div className="deposit-card">
        <div className="deposit-header">
          <h3>Deposit Amount</h3>
        </div>
        <div className="deposit-body">
          <p>Current Balance : ₹{balance}</p>

          <input
            type="number"
            placeholder="Enter Amount for Deposit"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {message && <p className={`message ${messageType}`}>{message}</p>}
        </div>
        <div className="deposit-footer">
          <button className="deposit-btn" onClick={handleDeposit}>
            Deposit Amount
          </button>
          <button className="back-button" onClick={() => setScreen('menu')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
