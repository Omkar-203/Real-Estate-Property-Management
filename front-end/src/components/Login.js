import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            result = await result.json();
            if (result.auth) {
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("token", JSON.stringify(result.auth));
                navigate("/");
            } else {
                alert("Please enter correct details");
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input
                className="inputBox"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter Email"
            />
            <input
                className="inputBox"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter Password"
            />
            <button
                className="appButton"
                onClick={handleLogin}
                type="button"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
