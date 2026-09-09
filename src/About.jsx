import React, { useState, useEffect } from "react";
import "./About.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from'./Navbar'
import Footer from'./Footer'
const About = () => {
  const [progress, setProgress] = useState({
    skills: 0,
    jobs: 0,
    mentors: 0,
    students: 0,
  });

  useEffect(() => {
    // Animate fill
    const interval = setInterval(() => {
      setProgress((prev) => ({
        skills: prev.skills < 85 ? prev.skills + 1 : 85,
        jobs: prev.jobs < 70 ? prev.jobs + 1 : 70,
        mentors: prev.mentors < 60 ? prev.mentors + 1 : 60,
        students: prev.students < 95 ? prev.students + 1 : 95,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const accordionData = [
    {
      title: "Professional treatments",
      body: "At NexSkill, we believe in empowering youth with modern, professional, and job-ready training programs that shape real careers."
    },
    {
      title: "Career Guide",
      body: "We help students explore different industries and pick a career path that fits their strengths and passions."
    },
    {
      title: "Skills & Roadmaps",
      body: "Our structured roadmaps guide you step by step from beginner to job-ready professional."
    }
  ];

  const tabData = [
    {
      title: "Skill Training",
      text: "We provide structured learning paths and hands-on mentorship so students can move from zero to hired with confidence and clarity.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500"
    },
    {
      title: "Career Roadmaps",
      text: "Our platform gives clear roadmaps for different industries, helping students plan their future effectively.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500"
    },
    {
      title: "Mentorship",
      text: "Connect with experienced mentors who guide you with real-world advice and support.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500"
    }
  ];

  return (
    <div className="nexskill-about-page">
      <Navbar/>
      <section className="nexskill-about-hero">
        <div className="nexskill-hero-content">
          <h1 className="nexskill-animated-heading">
            {"About NexSkill".split("").map((letter, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <p className="nexskill-animated-paragraph">
            Empowering the next generation with skills, roadmaps, and mentorship
            to turn passions into professions.
          </p>
        </div>
      </section>

      {/* Who we are / What we do */}
      <section className="nexskill-about-who-what-section">
        <div className="nexskill-about-who-what-container">
          {/* Left Side - Who we are */}
          <div className="nexskill-about-who-we-are">
            <h2>Who we are</h2>
            <div className="nexskill-about-accordion">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`nexskill-accordion-item ${
                    activeAccordion === index ? "nexskill-active" : ""
                  }`}
                  onClick={() =>
                    setActiveAccordion(
                      activeAccordion === index ? null : index
                    )
                  }
                >
                  <div className="nexskill-accordion-header">
                    <span>{activeAccordion === index ? "-" : "+"}</span>{" "}
                    {item.title}
                  </div>
                  {activeAccordion === index && (
                    <div className="nexskill-accordion-body">{item.body}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - What we do */}
          <div className="nexskill-about-what-we-do">
            <h2>What we do</h2>
            <div className="nexskill-about-tabs">
              {tabData.map((tab, index) => (
                <button
                  key={index}
                  className={activeTab === index ? "nexskill-active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="nexskill-about-tab-content">
              <div className="nexskill-tab-image">
                <img
                  src={tabData[activeTab].img}
                  alt={tabData[activeTab].title}
                />
              </div>
              <div className="nexskill-tab-text">{tabData[activeTab].text}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== Career Stats Section ===== */}
      <section className="nexskill-career-stats">
        <h2 className="nexskill-stats-title">NexSkill in Numbers</h2>
        <div className="nexskill-stats-grid">
          <div className="nexskill-stat-item">
            <CircularProgressbar
              value={progress.skills}
              text={`${progress.skills}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#9D586B",
                trailColor: "#444",
              })}
            />
            <p>Career Skills Mastered</p>
          </div>

          <div className="nexskill-stat-item">
            <CircularProgressbar
              value={progress.jobs}
              text={`${progress.jobs}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#977D8D",
                trailColor: "#444",
              })}
            />
            <p>Students Landed Jobs</p>
          </div>

          <div className="nexskill-stat-item">
            <CircularProgressbar
              value={progress.mentors}
              text={`${progress.mentors}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#8C8B95",
                trailColor: "#444",
              })}
            />
            <p>Industry Mentors</p>
          </div>

          <div className="nexskill-stat-item">
            <CircularProgressbar
              value={progress.students}
              text={`${progress.students}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#5A5D75",
                trailColor: "#444",
              })}
            />
            <p>Active Students</p>
          </div>
        </div>
      </section>
      {/* ===== About Call-to-Action Section ===== */}
<section className="nexskill-about-cta">
  <div className="nexskill-cta-container">
    <div className="nexskill-cta-images">
      <img src="back8.jpeg" alt="Team Discussion 1" />
      <img src="back6.jpeg" alt="Team Discussion 2" />
    </div>
    <div className="nexskill-cta-text">
      <p className="nexskill-cta-subtitle">// About Finite</p>
      <h2>Finate help your for get your dream job and build your bright career.</h2>
      <p>
        It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. 
        The point of using is that has more-or-less normal a distribution of letters, as opposed to using 'Content publishing packages web page editors.
      </p>
      <div className="nexskill-cta-avatars">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar 1" />
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Avatar 2" />
        <img src="https://randomuser.me/api/portraits/women/66.jpg" alt="Avatar 3" />
        <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Avatar 4" />
        <span>+</span>
      </div>
      <button className="nexskill-cta-button">+ Join Now</button>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};

export default About;