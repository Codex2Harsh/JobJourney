import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogInPg from './components/LogInPg';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

function App() {

  const [showLogin, setShowLogin] = useState(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    return loggedIn ? false : true;
  });

  const [showSignup, setShowSignup] = useState(false);

  const [userEmail, setUserEmail] = useState(() => {
    const saved = localStorage.getItem("userEmail");
    return saved ? JSON.parse(saved) : "";
  });

  useEffect(() => {
    localStorage.setItem("userEmail", JSON.stringify(userEmail));
  }, [userEmail]);

  return (
    <>
      {showLogin && !showSignup && (
        <LogInPg
          onLogIn={() => setShowLogin(false)}
          setUserEmail={setUserEmail}
          onGoSignup={() => setShowSignup(true)}
        />
      )}

      {showSignup && (
        <Signup onGoLogin={() => setShowSignup(false)} />
      )}

      {!showLogin && !showSignup && (
        <Dashboard
          onLogOut={() => {
            localStorage.removeItem("loggedIn");
            setShowLogin(true);
          }}
          userEmail={userEmail}
        />
      )}
    </>
  );
}

export default App;
