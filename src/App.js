import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

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
            <Navbar onLogout={handleLogout} userName={name} />
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/lighthall-challenge-4/createdate" />}
              />
              <Route
                path="/lighthall-challenge-4/createdate"
                element={<CreateDate />}
              />
              <Route
                path="/lighthall-challenge-4/history"
                element={<History />}
              />
            </Routes>
        </>
      ) : (
        <>
          <nav className="navbar">
            <Link to="/lighthall-challenge-4/" className="navbar-logo">
              MealMatch
              <i class="fab fa-firstdraft" />
            </Link>
            <div className="menu-icon">
              <i className={"fas fa-times"} />
            </div>
          </nav>
          <div className="home-container" onMouseMove={handleMouseMove}>
            <div
              className="background"
              style={{
                background: `linear-gradient(90deg, rgba(24, 136, 255, 0.1) 0%, rgba(24, 136, 255, 0.1) 50%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #1888ff, #000)`,
              }}
            ></div>
            <div className="content">
              <h1 className="home-title">MealMatch</h1>
              <form className="signup-form" onSubmit={handleLogin}>
                <h2 className="signup-title">
                  Login to find your perfect meal match
                </h2>
                <div className="signup-input-group">
                  <label className="signup-label" htmlFor="name-input">
                    Name:
                  </label>
                  <input
                    className="signup-input"
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <Link to="/lighthall-challenge-4/createdate">
                  <button onClick={handleLogin} className="signup-button">
                    Log In
                  </button>
                </Link>
              </form>
            </div>
          </div>

          {/* <div className="login-screen">
            <div className="create-date-container">
              <div className="create-date-container-title">Login Page</div>
              <br />
              <div className="create-date-container-inputs">
                <div className="create-date-input-container">
                  <label htmlFor="cuisine1"> User Name :</label>
                  <input
                    type="text"
                    id="cuisine1"
                    name="cuisine1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br /> 
                <Link to="/lighthall-challenge-4/createdate">
                  <button onClick={handleLogin} className="login-button">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
        </>
      )}
    </Router>
  );
};

export default App;
