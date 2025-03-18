import './login.css';  
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State for managing form input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hardcoded credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  // Use navigate to programmatically change routes
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials match
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsLoggedIn(true);
      setErrorMessage('');
      // Redirect to /departments after successful login
      navigate('/department');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {isLoggedIn ? (
        <div className="success-message">
          <h3>Welcome, {username}!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
