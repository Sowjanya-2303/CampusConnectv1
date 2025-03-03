import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contact: "",
        college: "",
        degree: "",
        gradYear: "",
        skills: "",
        password: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.resume) {
            alert("Please upload a resume");
            return;
        }
        
        // Store user details in localStorage
        localStorage.setItem("user", JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            contact: formData.contact,
            college: formData.college,
            degree: formData.degree,
            gradYear: formData.gradYear,
            skills: formData.skills,
            password: formData.password,
        }));
        
        // Store resume file (In real scenario, this would be uploaded to a server)
        const reader = new FileReader();
        reader.readAsDataURL(formData.resume);
        reader.onload = () => {
            localStorage.setItem("resume", reader.result);
        };
        
        alert("Registration Successful!");
        navigate("/login");
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Placement Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" name="fullName" onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
                
                <label>Contact Number:</label>
                <input type="text" name="contact" onChange={handleChange} required />
                
                <label>College Name:</label>
                <input type="text" name="college" onChange={handleChange} required />
                
                <label>Degree:</label>
                <input type="text" name="degree" onChange={handleChange} required />
                
                <label>Graduation Year:</label>
                <input type="number" name="gradYear" onChange={handleChange} required />
                
                <label>Technical Skills:</label>
                <input type="text" name="skills" onChange={handleChange} required />
                
                <label>Upload Resume:</label>
                <input type="file" name="resume" onChange={handleChange} required />
                
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} required />
                
                <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
