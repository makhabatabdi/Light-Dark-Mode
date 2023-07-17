import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="toggle-container">
        <p className="change-text">Click here</p>
        <input type="checkbox" id="toggle-btn" />
        <label htmlFor="toggle-btn" className="toggle-label"></label>
      </div>

      <div className="container">
        <div id="sun" className="shape"></div>
        <div id="moon" className="shape"></div>
      </div>
    </div>
  );
}
