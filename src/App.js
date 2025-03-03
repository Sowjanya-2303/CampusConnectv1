import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RegistrationForm from "./components/Registration";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegistrationForm />} />
    </Routes>
</Router>
  );
}

export default App;
