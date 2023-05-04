import React, { useState } from "react";
import "./CreateDate.css";

import { useParams } from "react-router-dom";

export default function SingleSession() {
    const { sessionID } = useParams();
  const [location, setLocation] = useState("")
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = ((clientX / window.innerWidth) * 100).toFixed(2);
    const yPos = ((clientY / window.innerHeight) * 100).toFixed(2);
    setGradientPosition({ x: xPos, y: yPos });
  };



  

 

  

  return (
    <div  onMouseMove={handleMouseMove}>
      <div
        className="background"
        style={{
        background: `linear-gradient(90deg, rgba(24, 136, 255, 0.1) 0%, rgba(24, 136, 255, 0.1) 50%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #1888ff, #000)`,
        }}
        ></div>
      <div className="create-date">
      
        <div className="create-date-container" >
          <div className="create-date-container-title">Enter your choices</div>
          <div className="create-date-container-inputs">
            <div className="create-date-input-container">
              <label htmlFor="cuisine1">Cuisine</label>
              <input
                type="text"
                id="cuisine1"
                name="cuisine1"
                placeholder="Enter cuisine"
              />
            </div>
            <div className="create-date-input-container">
              <label htmlFor="dish1">Location</label>
              <input
                type="text"
                value={location} onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
              />
            </div>
          </div>
        </div>
        <div className="create-date-container">
          <div className="create-date-container-title">
            Enter your partner's choices
          </div>
          <div className="create-date-container-inputs">
            <div className="create-date-input-container">
              <label htmlFor="cuisine2">Cuisine</label>
              <input
                type="text"
                id="cuisine2"
                name="cuisine2"
                placeholder="Enter cuisine"
              />
            </div>
            <div className="create-date-input-container">
              <label htmlFor="dish2">Location</label>
              <input
                type="text"
                value={location} onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="create-btn-container">
              <button className="create-btn" >
                Show Restaurants
              </button>
            </div>
            <div>Here: {sessionID}</div>
      
        </div>
  );
}