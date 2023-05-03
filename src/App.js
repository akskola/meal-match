import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateDate from './components/pages/CreateDate';
import History from './components/pages/History';

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
            <Route path="/" element={<Navigate to="/lighthall-challenge-4/createdate" />} />
            <Route path="/lighthall-challenge-4/createdate" element={<CreateDate />} />
            <Route path="/lighthall-challenge-4/history" element={<History />} />
          </Routes>
        </>
      ) : (
        <div className="login-screen">
          <h1>Login</h1>
          <Link to='/lighthall-challenge-4/createdate'>
          <button onClick={handleLogin} className='btn'>Log In</button>
        </Link>
        </div>
      )}
    </Router>
  );
}

export default App;
