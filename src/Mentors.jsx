import React, { useState } from 'react';
import { FaQuestionCircle, FaGlobe, FaShieldAlt, FaRocket, FaUserAstronaut, FaNetworkWired, FaVideo, FaBriefcase, FaCode, FaLightbulb, FaHandshake } from 'react-icons/fa';
import './Mentor.css'
import Navbar from'./Navbar'
import mentors from './Mentors.json'
import Footer from './Footer'
import Carousal from './Carousal';

const MentorPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleCloseMentor = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="Mentor-mentorsPage">
    
<Navbar/>
      {/* Hero Section */}
      <section className="Mentor-heroSection">
        <div className="Mentor-container Mentor-heroContent">
          <h1 className="Mentor-animated-heading">
            {"Meet Your Mentors".split("").map((letter, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <p className="Mentor-animated-paragraph" style={{ animationDelay: "1.5s" }}>
            Learn from the people who've walked the path before you.
          </p>
          <p className="Mentor-animated-paragraph" style={{ animationDelay: "2s" }}>
            At NexSkill, we believe the right mentor can change your journey. That's why we've gathered a group of experienced professionals, passionate educators, and industry experts — all ready to guide you with real-life experience, insider advice, and career wisdom.
          </p>
        </div>
      </section>
      
      {/* Why Mentorship Matters */}
      <section className="Mentor-section">
        <div className="Mentor-container">
          <h2 className="Mentor-sectionTitle"> Why Mentorship Matters?</h2>
          <div className="Mentor-benefitsGrid">
            <div className="Mentor-benefitCard">
              <h3><FaQuestionCircle /> Personalized Guidance</h3>
              <p>Get answers to "Where do I start?" and "What's next?" from someone who's been there.</p>
            </div>
            <div className="Mentor-benefitCard">
              <h3><FaGlobe /> Real-World Knowledge</h3>
              <p>Learn from actual challenges and success stories, not just textbooks.</p>
            </div>
            <div className="Mentor-benefitCard">
              <h3><FaShieldAlt /> Mistake Prevention</h3>
              <p>Avoid common pitfalls with expert guidance tailored to your journey.</p>
            </div>
            <div className="Mentor-benefitCard">
              <h3><FaRocket /> Confidence Building</h3>
              <p>Gain the assurance to pursue your goals through personalized advice.</p>
            </div>
            <div className="Mentor-benefitCard">
              <h3><FaUserAstronaut /> Role Models</h3>
              <p>Connect with professionals who once stood where you stand now.</p>
            </div>
            <div className="Mentor-benefitCard">
              <h3><FaNetworkWired /> Network Expansion</h3>
              <p>Build relationships that can open doors to future opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mentors Section */}
<section id="mentors" className="petowner-section">
  <h2>Our Mentors</h2>
  <p className="petowner-section-subtitle">Learn from our professional mentors to take care of your pets</p>
  <div className="petowner-videos-grid">
    {mentors.mentors?.map((mentor, index) => (
      <div key={index} className="petowner-video-card" onClick={() => handleMentorSelect(mentor)}>
        <div className="petowner-video-thumbnail">
          <img src={mentor.photo} alt={mentor.name} className="thumbnail-img" />
          <div className="thumbnail-overlay">
            <span className="play-icon">▶</span>
          </div>
        </div>
        <div className="petowner-video-content">
          <h3 className="video-title">{mentor.name}</h3>
          {mentor.description && <p className="video-description">{mentor.description}</p>}
          <div className="video-info">
            {mentor.experience && <span className="video-author">Experience: {mentor.experience}</span>}
            {mentor.rating && <span className="video-duration">Rating: {mentor.rating}</span>}
            {mentor.students && <span className="video-views">{mentor.students} students</span>}
          </div>
          <button className="video-watch-btn">Watch Now</button>
        </div>
      </div>
    ))}
  </div>

  {selectedMentor && (
    <div className="video-modal" onClick={handleCloseMentor}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleCloseMentor}>×</button>
        <iframe
          width="100%"
          height="500"
          src={selectedMentor.videoUrl}
          title={selectedMentor.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="modal-video-details">
          <h3>{selectedMentor.name}</h3>
          {selectedMentor.description && <p>{selectedMentor.description}</p>}
          {selectedMentor.experience && <p><strong>Experience:</strong> {selectedMentor.experience}</p>}
          {selectedMentor.rating && <p><strong>Rating:</strong> {selectedMentor.rating}</p>}
          {selectedMentor.students && <p><strong>Students:</strong> {selectedMentor.students}</p>}
        </div>
      </div>
    </div>
  )}
</section>

      
      {/* What You'll Get */}
      <section className="Mentor-section">
        <div className="Mentor-container">
          <h2 className="Mentor-sectionTitle"> What You'll Get</h2>
          <div className="Mentor-offeringsGrid">
            <div className="Mentor-offeringCard">
              <div className="Mentor-offeringIcon"><FaVideo /></div>
              <h3>1-on-1 Live Sessions</h3>
              <p>Talk to mentors from your field via video calls or chat.</p>
            </div>
            <div className="Mentor-offeringCard">
              <div className="Mentor-offeringIcon"><FaBriefcase /></div>
              <h3>Career Deep Dives</h3>
              <p>Learn what a day in the life really looks like in your dream job.</p>
            </div>
            <div className="Mentor-offeringCard">
              <div className="Mentor-offeringIcon"><FaCode /></div>
              <h3>Project Feedback</h3>
              <p>Get your work reviewed and improved by professionals.</p>
            </div>
            <div className="Mentor-offeringCard">
              <div className="Mentor-offeringIcon"><FaLightbulb /></div>
              <h3>Skill-Building Tips</h3>
              <p>Discover which skills actually matter in the real world.</p>
            </div>
          </div>
        </div>
      </section>
      
    <Carousal/>
      
      {/* How to Get a Mentor */}
      <section className="Mentor-section">
        <div className="Mentor-container">
          <h2 className="Mentor-sectionTitle"> How to Get a Mentor?</h2>
          <div className="Mentor-stepsContainer">
            <div className="Mentor-stepCard">
              <div className="Mentor-stepNumber">1</div>
              <p>Select your career interest</p>
            </div>
            <div className="Mentor-stepCard">
              <div className="Mentor-stepNumber">2</div>
              <p>Choose a mentor from the recommended list</p>
            </div>
            <div className="Mentor-stepCard">
              <div className="Mentor-stepNumber">3</div>
              <p>Book a session (Free or Premium)</p>
            </div>
            <div className="Mentor-stepCard">
              <div className="Mentor-stepNumber">4</div>
              <p>Get guidance that actually works for you</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="Mentor-container">
        <div className="Mentor-ctaSection">
            <div className="Mentor-ctaContent">
                <p>💬 Still confused? Don't worry — we'll help match you with the perfect mentor for your goals.</p>
                <button className="Mentor-ctaButton">
                    <FaHandshake className="Mentor-ctaIcon" />Connect With a Mentor Today
                </button>
            </div>
        </div>
      </section>

     <Footer/>

     
    </div>
  );
};

export default MentorPage;