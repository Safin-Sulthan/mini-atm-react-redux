import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './AccountSetup.css';
export default function AccountSetup({ setShowCreateAccount }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [atmPin, setAtmPin] = useState('');
  const [gender, setGender] = useState('');
  const [initBalance, setInitBalance] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (messageType === 'success') {
      setTimeout(() => {
        setShowCreateAccount(false);
      }, 2500);
    }
  }, [messageType, setShowCreateAccount]);

  function createAccount() {
    if (!name || !atmPin || !gender || !initBalance) {
      setMessage('Please fill all details');
      setMessageType('error');
      return;
    }

    const nameRegex = /^[A-Za-z ]+$/;
    if (name.trim().length < 3 || !nameRegex.test(name)) {
      setMessage(
        'Name must contain only letters and spaces (min 3 characters)',
      );
      setMessageType('error');
      return;
    }

    const pinRegex = /^\d{4}$/;
    if (!pinRegex.test(atmPin)) {
      setMessage('PIN must be exactly 4 digits');
      setMessageType('error');
      return;
    }

    const balanceAmount = Number(initBalance);
    if (isNaN(balanceAmount) || balanceAmount < 25) {
      setMessage('Initial balance must be at least ₹25');
      setMessageType('error');
      return;
    }

    dispatch({
      type: 'CREATE_ACCOUNT',
      payload: {
        name,
        pin: Number(atmPin),
        gender,
        balance: balanceAmount,
      },
    });

    setMessage('Account created successfully. Please login.');
    setMessageType('success');
    setName('');
    setGender('');
    setAtmPin('');
    setInitBalance('');
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2 className="heading">Create Account</h2>
        </div>
        <div className="form-body">
          <h2 className="name">Enter Full Name </h2>
          <input
            className="uname"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2 className="gender-label">Select Gender </h2>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>

          <h2 className="atm-pin">Setup ATM Pin </h2>
          <input
            className="pin-setup"
            type="password"
            placeholder="Create 4 Digit Pin"
            value={atmPin}
            onChange={(e) => setAtmPin(e.target.value)}
          />
          <h2 className="initial-balance">Enter Initial Balance Amount </h2>
          <input
            className="in-balance"
            type="number"
            placeholder="Enter Inital Balance"
            value={initBalance}
            onChange={(e) => setInitBalance(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <button className="create-account" onClick={createAccount}>
            Create Account
          </button>
          {message && <p className={`message ${messageType}`}>{message}</p>}
          <p className="toggle-text">
            Already have ATM Account?{' '}
            <span
              className="toggle-link"
              onClick={() => setShowCreateAccount(false)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
