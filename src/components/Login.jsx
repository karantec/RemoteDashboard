// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here
    // For simplicity, I'm hardcoding the username and password
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      navigate('/User'); // Redirect to the UserDetails page
    } else {
      // Handle incorrect credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
