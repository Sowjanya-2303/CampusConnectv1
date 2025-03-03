import React, { useEffect, useState } from "react";
import { FaBell, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import collegeImage from "../assets/college.jpg";

const Dashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Retrieve stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUserData(storedUser);
        }
    }, []);

    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar Menu */}
            <div style={{ width: "250px", background: "#333", color: "white", padding: "20px" }}>
                <h2>Campus Connect</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => setUserData(JSON.parse(localStorage.getItem("user")))}>Student Profile</li>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }}>About Campus Connect</li>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }}>Contact Us</li>
                    <li style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => navigate("/")}>Logout</li>
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

                {/* Main Dashboard Content */}
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <h2>Welcome to Campus Connect</h2>
                    <img src={collegeImage} alt="College Campus" style={{ width: "100%", maxWidth: "600px" }} />
                </div>

                {/* Student Profile Section */}
                {userData && (
                    <div style={{ marginTop: "20px", padding: "20px", background: "#f4f4f4", borderRadius: "10px" }}>
                        <h3>Student Profile</h3>
                        <p><strong>Name:</strong> {userData.fullName}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Contact:</strong> {userData.contact}</p>
                        <p><strong>College:</strong> {userData.college}</p>
                        <p><strong>Degree:</strong> {userData.degree}</p>
                        <p><strong>Graduation Year:</strong> {userData.gradYear}</p>
                        <p><strong>Skills:</strong> {userData.skills}</p>
                    </div>
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
