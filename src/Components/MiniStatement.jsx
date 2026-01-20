import React from 'react';
import { useSelector } from 'react-redux';
import './MiniStatement.css';
export default function MiniStatement({ setScreen }) {
  const statements = useSelector((state) => state.account.transactions);
  return (
    <div className="ministatement-container">
      <div className="ministatement-card">
        <div className="ministatement-header">
          <h1>Mini-Statement</h1>
        </div>
        <div className="ministatement-body">
          <h3>The Transaction History is </h3>
          <ul>
            {statements.length === 0 ? (
              <li>No transactions yet</li>
            ) : (
              statements.map((item, index) => <li key={index}>{item}</li>)
            )}
          </ul>
        </div>
        <div className="ministatement-footer">
          <button className="back-button" onClick={() => setScreen('menu')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
