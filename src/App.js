import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateDate from './components/pages/CreateDate';
import History from './components/pages/History';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

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
          <Navbar onLogout={handleLogout} userName={name}/>
          <Routes>
            <Route path="/" element={<Navigate to="/lighthall-challenge-4/createdate" />} />
            <Route path="/lighthall-challenge-4/createdate" element={<CreateDate />} />
            <Route path="/lighthall-challenge-4/history" element={<History />} />
          </Routes>
        </>
      ) : (
      <>
        <nav className='navbar'>
          <Link to='/lighthall-challenge-4/' className='navbar-logo'>
            MealMatch
            <i class='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' >
            <i className={'fas fa-times'} />
          </div> 
        </nav>
        <div className="login-screen">
          <div className='create-date-container'>
          <div className='create-date-container-title'>Login Page</div>
          <br /> {/* New line added here */}
          <div className='create-date-container-inputs'>
          <div className='create-date-input-container'>
            <label htmlFor='cuisine1'> User Name :</label>
            <input type='text' id='cuisine1' name='cuisine1' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <br /> {/* New line added here */}
          <Link to='/lighthall-challenge-4/createdate'>
            <button onClick={handleLogin} className='login-button'>Log In</button>
          </Link>
        </div>
      </div>
      </div>
      </>
    )}
    </Router>
  );
}

export default App;