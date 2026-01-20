import React from 'react';
import { useSelector } from 'react-redux';
import './Balance.css';
export default function Balance({ setScreen }) {
  const balanceAmount = useSelector((state) => state.account.balance);

  return (
    <div className="balance-container">
      <div className="balance-card">
        <div className="balance-header">
          <h1>Balance Enquiry</h1>
        </div>
        <div className="balance-body">
          <h3>Available Balance : ₹{balanceAmount}  </h3>
          <h5> Thank You</h5>
        </div>
        <div className="balance-footer">
          <button className="back-button" onClick={() => setScreen('menu')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
