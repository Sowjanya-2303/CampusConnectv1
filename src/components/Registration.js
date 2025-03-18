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
        
        const reader = new FileReader();
        reader.readAsDataURL(formData.resume);
        reader.onload = () => {
            localStorage.setItem("resume", reader.result);
        };
        
        alert("Registration Successful!");
        navigate("/login");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", backgroundColor: "white", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Placement Registration</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Full Name", name: "fullName", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Contact Number", name: "contact", type: "text" },
                    { label: "College Name", name: "college", type: "text" },
                    { label: "Degree", name: "degree", type: "text" },
                    { label: "Graduation Year", name: "gradYear", type: "number" },
                    { label: "Technical Skills", name: "skills", type: "text" },
                    { label: "Upload Resume", name: "resume", type: "file" },
                    { label: "Password", name: "password", type: "password" },
                ].map(({ label, name, type }) => (
                    <div key={name} style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>{label}:</label>
                        <input 
                            type={type} 
                            name={name} 
                            onChange={handleChange} 
                            required 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                    </div>
                ))}
                <button type="submit" style={{ width: "100%", backgroundColor: "#007BFF", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}>Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
