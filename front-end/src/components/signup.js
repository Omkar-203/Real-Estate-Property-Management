import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        try {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            result = await result.json();
            localStorage.setItem("user", JSON.stringify(result.result));
            localStorage.setItem("token", JSON.stringify(result.auth));
            if (result) {
                navigate('/');
            }
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <input
                className="inputBox"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />
            <input
                className="inputBox"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            <input
                className="inputBox"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <button
                onClick={collectData}
                className="appButton"
                type="submit"
            >
                Signup
            </button>
        </div>
    );
};

export default Signup;
