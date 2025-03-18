import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        
        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            navigate("/dashboard");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome to CampusConnect! :)</h1> {/* This statement is now displayed on the login page */}
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
                <button onClick={() => navigate("/register")} className="register-button">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Login;
