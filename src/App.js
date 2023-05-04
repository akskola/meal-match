import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateDate from "./components/pages/CreateDate";
import History from "./components/pages/History";
import SingleSession from "./components/pages/SingleSession"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = ((clientX / window.innerWidth) * 100).toFixed(2);
    const yPos = ((clientY / window.innerHeight) * 100).toFixed(2);
    setGradientPosition({ x: xPos, y: yPos });
  };

  const handleLogin = () => {
    if (name !== "")
    {
      setIsLoggedIn(true);
      localStorage.setItem("name", name);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const isSingleSessionRoute = window.location.pathname.includes(
    "/singlesession/"
  );

  if (isSingleSessionRoute) {
    return (
      <Router>
        <Routes>
        <Route path="/lighthall-challenge-4/singlesession/:sessionID" element={<SingleSession />} />
            </Routes>
      </Router>
    );
  }

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
          <div className='create-date-container' onMouseMove={handleMouseMove}>
          <div
              className="background"
              style={{
                background: `linear-gradient(90deg, rgba(24, 136, 255, 0.1) 0%, rgba(24, 136, 255, 0.1) 50%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #1888ff, #000)`,
              }}
            ></div>
          <div className='create-date-container-title'>Login For Your Perfect Meal Match</div>
          <br /> {/* New line added here */}
          <br /> {/* New line added here */}
          <div className='create-date-container-inputs'>
          <div className='create-date-input-container'>
            <label htmlFor='cuisine1'> User Name :</label>
            <input type='text' id='cuisine1' name='cuisine1' value={name} onChange={(e) => setName(e.target.value) } required/>
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