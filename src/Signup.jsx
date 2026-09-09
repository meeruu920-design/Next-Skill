import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { UserContext } from "./UserContext";

const Signup = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name }); // Save user
    navigate("/Home"); // Go to Home
  };

  return (
    <div className="auth-page">
      <div className="background">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="cube"></div>
        ))}
      </div>

      <div className="auth-box">
        {/* Logo */}
        <img src="/lOGO (3).png" alt="Logo" className="auth-logo" />
        {/* Slogan */}
        <p className="auth-slogan">TRANSFORM YOUR CAREER WITH NexSkill</p>

        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
