import React from 'react';
import '../Components/PinScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import atmGif from '../assets/atm-animation.gif';
export default function PinScreen({ setShowCreateAccount }) {
  const atm_pin = useSelector((state) => state.user.pin);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  function validatePin() {
    if (Number(password) === atm_pin) {
      dispatch({ type: 'LOGIN' });
    } else {
      setMessage('INCORRECT PIN');
      setMessageType('error');
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Welcome to Mini ATM.....</h2>
        </div>
        <div className="card-body">
          <div className="cardbody-left">
            <p>Please Enter Your Pin:</p>
            <input
              type="password"
              placeholder="Enter ATM Pin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="cardbody-right">
            <img className="animation" src={atmGif} alt="ATM animation" />
          </div>
        </div>
        <div className="card-footer">
          <button className="login-button" onClick={validatePin}>
            Login
          </button>
          {message && <p className={`message ${messageType}`}>{message}</p>}
          <p className="toggle-text">
            Don't have ATM Account?{' '}
            <span
              className="toggle-link"
              onClick={() => setShowCreateAccount(true)}
            >
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
