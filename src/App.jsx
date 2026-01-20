import { useSelector } from 'react-redux';
import './App.css';
import Dashboard from './Components/Dashboard';
import PinScreen from './Components/PinScreen';
export default function App() {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  return (
    <div>
      <div>{isAuth ? <Dashboard /> : <PinScreen />}</div>
    </div>
  );
}
