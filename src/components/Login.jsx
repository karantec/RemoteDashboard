import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if username and password match your predefined values
        if (username === 'rojgar' && password === 'Avi@1234') {
            // Successful login
            alert('Login successful!');
            navigate('/UserDetails');
            
            // You can redirect the user or perform other actions here
        } else {
            // Invalid credentials
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Login;
