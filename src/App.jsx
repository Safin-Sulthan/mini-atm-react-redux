import { useState } from 'react';
import { useSelector } from 'react-redux';

import Dashboard from './Components/Dashboard';
import PinScreen from './Components/PinScreen';
import AccountSetup from './Components/AccountSetup';
import LandingPage from './Components/LandingPage';

export default function App() {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [screen, setScreen] = useState('landing');
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  if (isAuth) {
    return <Dashboard />;
  }

  return (
    <>
      {screen === 'landing' && (
        <LandingPage
          onLogin={() => {
            setScreen('auth');
            setShowCreateAccount(false);
          }}
          onCreate={() => {
            setScreen('auth');
            setShowCreateAccount(true);
          }}
        />
      )}

      {screen === 'auth' &&
        (showCreateAccount ? (
          <AccountSetup setShowCreateAccount={setShowCreateAccount} />
        ) : (
          <PinScreen setShowCreateAccount={setShowCreateAccount} />
        ))}
    </>
  );
}
