import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; 
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login functionality
    console.log({ email, password });
    alert('Login functionality to be implemented!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Ambika Soaps</h1>
        <p>Login to manage your orders or browse our products</p>
        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register" onClick={() => navigate("/login")}>Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
