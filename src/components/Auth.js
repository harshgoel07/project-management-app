import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setUser }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setUser({ token }); // Update user state in App.js
            navigate('/dashboard'); // Navigate to dashboard
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/register', { username, password });
            alert('Registration successful!');
            console.log(response.data); // Ensure the response is correct
            setIsLogin(true); // Switch to login form after successful registration
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={isLogin ? handleLogin : handleRegister}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default Auth;
