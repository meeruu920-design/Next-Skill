import React from 'react';
import './Feedback.css';
import Navbar from './Navbar';
import Footer from './Footer';

const FeedbackForm = () => {
  return (
    <>
      <Navbar />

      {/* ✅ Feedback Hero Section */}
      <section className="feedback-hero">
        <div className="feedback-hero-content">
          <h1 className="feedback-animated-heading">
            {"Your Feedback Matters".split("").map((letter, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <p className="feedback-animated-paragraph">
            Share your thoughts and help NexSkill improve for you and future learners.
          </p>
        </div>
      </section>

      {/* ✅ Feedback Form Section */}

      <section className="feedback-section">
        
        {/* 🔲 Animated Cubes Background sirf form ke liye */}
        <div className="background">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="cube"></div>
          ))}
        </div>

        <div className="feedback-container">
          
          <form className="feedback-form">
            <div className="input-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Phone" />
            </div>

            <div className="input-row">
              <input type="text" placeholder="Location" />
              <input type="number" placeholder="Age" min="10" max="100" />
              <input type="text" placeholder="How did you hear about us?" />
            </div>

            <div className="input-row">
              <select>
                <option value="">Rate your experience</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <textarea placeholder="Your message" rows="5" required></textarea>

            <button type="submit" className="submit-btn">
              Send Feedback
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeedbackForm;
