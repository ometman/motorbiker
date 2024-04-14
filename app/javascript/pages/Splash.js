import React from "react";

import './splash.css'

const Splash = () => {
    const handleLogin = () => {
      // Add your login logic here
      console.log("Login clicked");
    }
  
    const handleRegister = () => {
      // Add your register logic here
      console.log("Register clicked");
    }
  
    return (
      <div>
        <h1 className="splash">Welcome to Our Website</h1>
        <main className="splash">
          <img className="splash-logo" alt="logo" />
          <div className="splash-action-btns">
            <button className="login-btn" onClick={handleLogin}>Login</button>
            <button className="signup-btn" onClick={handleRegister}>Register</button>
          </div>
        </main>
      </div>
    );
  }
  
  export default Splash;