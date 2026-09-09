import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  // Hide Navbar on login/signup
  if (location.pathname === "/login" || location.pathname === "/signup") return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
<div className="navbar-logo">
  <Link to="/">
    <img src="/lOGO (3).png" alt="Nexskill Logo" width="200px" />
  </Link>
</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
        </div>

        <div className={`nav-content ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-items">
            <ul>
              <li><Link to="/Home" className={isActive("/Home") ? "active" : ""}>Home</Link></li>
              <li><Link to="/careerpaths" className={isActive("/careerpaths") ? "active" : ""}>Career Paths</Link></li>
              <li><Link to="/roadmap" className={isActive("/roadmap") ? "active" : ""}>Roadmap</Link></li>
              <li><Link to="/mentors" className={isActive("/mentors") ? "active" : ""}>Mentors</Link></li>
              <li><Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link></li>
              <li><Link to="/feedback" className={isActive("/feedback") ? "active" : ""}>Feedback</Link></li>
            </ul>
          </div>

          <div className="nav-actions">
            {user ? (
    <span className="nav-button">Wellcome: {user.name}</span>
            ) : (
              <Link to="/login" className={`nav-button ${isActive("/login") ? "active" : ""}`}>Sign In / Log In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
