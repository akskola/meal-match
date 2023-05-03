import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CurrentDate from './components/pages/CurrentDate';
import History from './components/pages/History';
import Invite from './components/pages/Invite';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={handleLogout}/>
          <Routes>
            <Route path="/" element={<Navigate to="/lighthall-challenge-4/currentdate" />} />
            <Route path="/lighthall-challenge-4/currentdate" element={<CurrentDate />} />
            <Route path="/lighthall-challenge-4/invite" element={<Invite />} />
            <Route path="/lighthall-challenge-4/history" element={<History />} />
          </Routes>
        </>
      ) : (
        <div className="login-screen">
          <h1>Login</h1>
          <Link to='/lighthall-challenge-4/currentdate'>
          <button onClick={handleLogin} className='btn'>Log In</button>
        </Link>
        </div>
      )}
    </Router>
  );
}

export default App;
