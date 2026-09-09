import React, { useState, useEffect } from 'react';
import "./Careerpaths.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import careerData from "./Careerpaths.json";

const CareerPaths = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("title");

  const interests = [
    { title: "Like gaming?", desc: "Try Game Development and create the next hit title", img: "/inter1.jpg" },
    { title: "Love aesthetics?", desc: "Try UI/UX Design to craft beautiful digital experiences", img: "/inter2.jpg" },
    { title: "Love solving puzzles?", desc: "Try Data Analytics to uncover hidden insights", img: "/inter3.jpg" },
    { title: "Always on your phone?", desc: "Build apps that millions will use every day", img: "/inter4.jpg" },
  ];

  // careers from JSON
  const careers = careerData;

  // 🔹 Normalization helper
  const normalize = (str) => (str ? str.toLowerCase().trim() : "");

  // 🔹 Filtering
  const filteredCareers =
    filter === "All"
      ? careers
      : careers.filter((c) => normalize(c.category) === normalize(filter));

  const sortedCareers = [...filteredCareers].sort((a, b) => {
  const getNum = (s) => (s ? parseInt(s.replace(/[^0-9]/g, ""), 10) : 0);

  switch (sortBy) {
    case "title-asc":
      return a.title.localeCompare(b.title);
    case "title-desc":
      return b.title.localeCompare(a.title);
    case "salary-asc":
      return getNum(a.details.salary) - getNum(b.details.salary);
    case "salary-desc":
      return getNum(b.details.salary) - getNum(a.details.salary);
    default:
      return 0;
  }
});


  // 🔹 Show More / Less
  const visibleCareers = showAll ? sortedCareers : sortedCareers.slice(0, 6);

  // 🔹 Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.cp-animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('cp-animated');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Careerpath">
        <Navbar />

        {/* Hero Section */}
        <section className="cp-hero">
          <div className="cp-hero-content">
            <h1 className="animated-heading">
              {"Find Your Path. Build Your Future.".split("").map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            <p className="animated-paragraph" style={{ animationDelay: "2s" }}>
              Not sure where to start? We'll help you figure it out.
            </p>
            <p className="animated-paragraph" style={{ animationDelay: "2.5s" }}>
              At NexSkill, we believe every student has potential — they just need the right path.
            </p>

            <a href="#" className="cp-btn">Get Started</a>
          </div>
        </section>

        {/* Interest Section */}
        <section className="cp-interest-section">
          <div className="cp-container">
            <h2 className="cp-section-title">Choose by Interest</h2>
            <div className="cp-interest-grid">
              {interests.map((item, i) => (
                <div key={i} className="cp-interest-card" style={{ backgroundImage: `url(${item.img})` }}>
                  <div className="overlay"></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="cp-container">
          <h2 className="cp-section-title">Explore Career Paths Like Never Before</h2>

          <div className="cp-filter-bar">
  <label htmlFor="filter">Show me careers in: </label>
  <select
    id="filter"
    value={filter}
    onChange={(e) => {
      setFilter(e.target.value);
      setShowAll(false);
    }}
  >
    <option value="All">All</option>
    <option value="Medical">Medical</option>
    <option value="Engineering">Engineering</option>
    <option value="Commerce">Commerce</option>
    <option value="Arts">Arts</option>
    <option value="Mass Communication">Mass Communication</option>
  </select>

  <label htmlFor="sort" style={{ marginLeft: "20px" }}>Sort by: </label>
  <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="title-asc">Name (A–Z)</option>
    <option value="title-desc">Name (Z–A)</option>
    <option value="salary-asc">Salary (Low → High)</option>
    <option value="salary-desc">Salary (High → Low)</option>
  </select>
</div>

          {/* Career Cards */}
          <div className="cp-career-paths">
            {visibleCareers.map((career, index) => (
              <div className="cp-career-card cp-animate-on-scroll" key={index}>
                <div className="cp-career-icon">
                  <i className={career.icon}></i>
                </div>
                <div className="cp-career-content">
                  <h3>{career.title}</h3>
                  <p>{career.desc}</p>
                  <button className="cp-view-details-btn" onClick={() => setSelectedCareer(career)}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {filteredCareers.length > 6 && (
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <button className="cp-btn" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Explore Less" : "Explore More"}
              </button>
            </div>
          )}

          {/* Modal */}
          {selectedCareer && (
            <div className="cp-modal-overlay" onClick={() => setSelectedCareer(null)}>
              <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cp-modal-header">
                  <div className="cp-modal-icon"><i className={selectedCareer.icon}></i></div>
                  <h2>{selectedCareer.title}</h2>
                  <button className="cp-modal-close" onClick={() => setSelectedCareer(null)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <div className="cp-modal-body">
                  <div className="cp-modal-section">
                    <h3>Overview</h3>
                    <p>{selectedCareer.details.overview}</p>
                  </div>

                  <div className="cp-modal-grid">
                    <div className="cp-modal-section">
                      <h3>Key Skills</h3>
                      <div className="cp-tags">
                        {selectedCareer.details.skills.map((skill, index) => (
                          <span key={index} className="cp-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="cp-modal-section">
                      <h3>Tools & Technologies</h3>
                      <div className="cp-tags">
                        {selectedCareer.details.tools.map((tool, index) => (
                          <span key={index} className="cp-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="cp-modal-section">
                    <h3>Industries</h3>
                    <div className="cp-tags">
                      {selectedCareer.details.industries.map((industry, index) => (
                        <span key={index} className="cp-tag">{industry}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cp-modal-grid">
                    <div className="cp-modal-section">
                      <h3>Future Outlook</h3>
                      <p>{selectedCareer.details.future}</p>
                    </div>
                    <div className="cp-modal-section">
                      <h3>Salary Range</h3>
                      <p className="cp-salary">{selectedCareer.details.salary}</p>
                    </div>
                  </div>

                  <div className="cp-modal-section">
                    <h3>Key Challenges</h3>
                    <ul>
                      {selectedCareer.details.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cp-modal-section">
                    <h3>Learning Resources</h3>
                    <ul>
                      {selectedCareer.details.learning.map((resource, index) => (
                        <li key={index}>{resource}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="cp-features">
          <div className="cp-container">
            <h2 className="cp-section-title">Why It's Different</h2>
            <div className="cp-features-grid">
              <div className="cp-feature-item cp-animate-on-scroll">
                <div className="cp-feature-icon"><i className="fas fa-sync-alt"></i></div>
                <h3>Dynamic Roadmaps</h3>
                <p>Based on current industry demand and trends</p>
              </div>
              <div className="cp-feature-item cp-animate-on-scroll">
                <div className="cp-feature-icon"><i className="fas fa-robot"></i></div>
                <h3>AI-Generated Paths</h3>
                <p>Personalized skill paths tailored for you</p>
              </div>
              <div className="cp-feature-item cp-animate-on-scroll">
                <div className="cp-feature-icon"><i className="fas fa-briefcase"></i></div>
                <h3>Job-Ready Skills</h3>
                <p>Learn what actually gets you hired</p>
              </div>
              <div className="cp-feature-item cp-animate-on-scroll">
                <div className="cp-feature-icon"><i className="fas fa-trophy"></i></div>
                <h3>Progress Tracking</h3>
                <p>Unlock badges and showcase achievements</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="cp-container">
          <h2 className="cp-section-title">How It Works</h2>
          <div className="cp-steps">
            <div className="cp-step cp-animate-on-scroll">
              <div className="cp-step-number">1</div>
              <h3>Take Quiz</h3>
              <p>Complete a quick skill & interest assessment</p>
            </div>
            <div className="cp-step cp-animate-on-scroll">
              <div className="cp-step-number">2</div>
              <h3>Get Path</h3>
              <p>Receive your recommended career path</p>
            </div>
            <div className="cp-step cp-animate-on-scroll">
              <div className="cp-step-number">3</div>
              <h3>Learn Skills</h3>
              <p>Follow a guided roadmap of mini-skills</p>
            </div>
            <div className="cp-step cp-animate-on-scroll">
              <div className="cp-step-number">4</div>
              <h3>Get Hired</h3>
              <p>Apply for real jobs once you're ready</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cp-cta">
          <div className="cp-container">
            <h2>Ready to Start Your Journey?</h2>
            <a href="#" className="cp-btn">Start Exploring Now</a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CareerPaths;
