import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { UserContext } from "./UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = email.split("@")[0];
    setUser({ name: username });
    navigate("/"); // Go to Home page after login
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

        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
