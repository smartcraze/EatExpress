import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

const LoginPopup = ({ setShowLogin, setLoggedInUser }) => {
  const [currState, setCurrState] = useState("Login");
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");

  // Backend URL (adjust as needed)
  const BASE_URL = "http://localhost:5000/api/auth";

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.password) {
      try {
        const response = await axios.post(`${BASE_URL}/register`, {
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
        });
        setMessage("Account created successfully! You can now log in.");
        setCurrState("Login");
        setUserDetails({ name: '', email: '', password: '' }); // Clear fields
      } catch (err) {
        setMessage(err.response?.data?.message || "Failed to register. Please try again.");
      }
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      try {
        const response = await axios.post(`${BASE_URL}/login`, {
          email: userDetails.email,
          password: userDetails.password,
        });
        setLoggedInUser(response.data); // Pass user data to parent
        setMessage(`Welcome back, ${response.data.name}!`);
        setShowLogin(false); // Close popup
      } catch (err) {
        setMessage(err.response?.data?.message || "Incorrect email or password.");
      }
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={currState === "Login" ? handleLogin : handleSignUp}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => { setCurrState("Sign Up"); setMessage(""); }}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => { setCurrState("Login"); setMessage(""); }}>Login here</span>
          </p>
        )}
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPopup;