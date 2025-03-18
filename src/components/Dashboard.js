import React, { useEffect, useState } from "react";
import { FaBell, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import collegeImage from "../assets/college.jpg";

const Dashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [showProfile, setShowProfile] = useState(false); // Toggle profile visibility

    useEffect(() => {
        // Retrieve stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUserData(storedUser);
        }
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar Menu */}
            <div style={{ width: "250px", background: "#333", color: "white", padding: "20px", height: "100vh" }}>
                <h2>Campus Connect</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li 
                        style={{ cursor: "pointer", marginBottom: "10px" }} 
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        Student Profile
                    </li>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }}>About Campus Connect</li>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }}>Contact Us</li>
                    <li style={{ cursor: "pointer", marginBottom: "10px", color: "red" }} onClick={() => navigate("/")}>
                        Logout
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "20px" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2>Dashboard</h2>
                    <img src={logo} alt="Campus Connect Logo" style={{ width: "100px" }} />
                    <div>
                        <FaBell style={{ marginRight: "10px", cursor: "pointer" }} title="Notifications" />
                        <FaQuestionCircle style={{ cursor: "pointer" }} title="Help Center" />
                    </div>
                </div>

                {/* Welcome Message with User Name */}
                {!showProfile ? (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <h2>Welcome {userData ? userData.fullName : "to Campus Connect"}!</h2>
                        <img src={collegeImage} alt="College Campus" style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }} />
                    </div>
                ) : (
                    // Student Profile Section (Only visible when clicked)
                    userData && (
                        <div style={{ marginTop: "20px", padding: "20px", background: "#f4f4f4", borderRadius: "10px" }}>
                            <h3>Student Profile</h3>
                            <p><strong>Name:</strong> {userData.fullName}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Contact:</strong> {userData.contact}</p>
                            <p><strong>College:</strong> {userData.college}</p>
                            <p><strong>Degree:</strong> {userData.degree}</p>
                            <p><strong>Graduation Year:</strong> {userData.gradYear}</p>
                            <p><strong>Skills:</strong> {userData.skills}</p>
                            <button 
                                onClick={() => setShowProfile(false)} 
                                style={{ marginTop: "10px", padding: "8px 16px", background: "#333", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                                Close Profile
                            </button>
                        </div>
                    )
                )}

                {/* Footer */}
                <div style={{ marginTop: "20px", textAlign: "center", padding: "10px", background: "#ddd" }}>
                    &copy; 2025 Campus Connect. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
