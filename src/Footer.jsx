import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Contact Row */}
      <div className="footer-top">
        <div className="contact-item">
          <FaPhone />
          <p>+92 300 1234567</p>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <p>support@nexskill.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <p>Tech Valley Hub, Karachi, Pakistan</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Middle Columns */}
      <div className="footer-middle">
        {/* Logo & About Section */}
        <div className="footer-col footer-about">
          <img src="/lOGO (3).png" alt="NexSkill Logo" className="footer-logo" />
          <p className="footer-desc">
            NexSkill is committed to empowering individuals with modern skills 
            for a successful career. Join us and explore endless opportunities 
            for growth.
          </p>
        </div>

        <div className="footer-col">
          <h3>About</h3>
          <ul>
            <li>Our Story</li>
            <li>Vision & Mission</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Career Path</li>
            <li>Mentors</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col subscribe">
          <h3>Subscribe</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Email Address" />
            <button>&rarr;</button>
          </div>
          <p className="sub-text">
            Get career updates directly in your inbox
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <p>© 2025 NexSkill. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
