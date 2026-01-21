import './LandingPage.css';
export default function LandingPage({ onLogin, onCreate }) {
  return (
    <div className="page-container">
      <div className="page-card">
        <div className="page-card-header">
          <h2>Welcome to Mini ATM</h2>
          <h5>ATM Simulation Application built with React & Redux</h5>
          <p>Simulating real-world ATM workflows</p>
        </div>

        <div className="page-card-body">
          <button className="page-button" onClick={onLogin}>
            Login
          </button>

          <button className="page-button" onClick={onCreate}>
            Create Account
          </button>
        </div>
        <div className="page-footer">
          <h3 className="credits">
            Developed by Safin Sulthan | React & Redux Project
          </h3>
        </div>
      </div>
    </div>
  );
}
