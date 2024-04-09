import React from "react";

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
        <h1>Welcome to Our Website</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  }
  
  export default Splash;