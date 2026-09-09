import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'

function Home() {
  useEffect(() => {
    const container = document.querySelector(".home-hero");

    // Create 14 cubes for full coverage
    for (let i = 0; i < 14; i++) {
      const cube = document.createElement("div");
      cube.className = "home-cube";
      container?.appendChild(cube);
    }
  }, []);

  return (
    <div className="home-app">
      <Navbar />

     <section className="home-hero">
      <div className="home-overlay">
        <div className="home-hero-content">
          {/* Animated Heading */}
          <h1 className="animated-heading">
            {"Your Career Starts Here — Not After Graduation.".split("").map(
              (letter, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              )
            )}
          </h1>

          {/* Paragraph */}
          <p className="animated-paragraph">
            No more confusion, wasted years, or aimless scrolling. NexSkill
            helps you unlock the perfect career path, build in-demand skills,
            and connect with real mentors and job opportunities — all in one
            smart platform.
          </p>

          {/* Buttons */}
          <div className="home-cta-buttons">
            <Link to="/Careerpaths" className="home-cta-btn home-explore">
              Explore Career Paths
            </Link>
            <Link to="">
              <button className="home-cta-btn home-start">
                 Start Your Skill Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>



      <section className="home-features">
        <h2 className="home-section-title">Transform Your Career With NexSkill</h2>
        <div className="home-features-grid">
          {[
            { 
              icon: 'fa-solid fa-route', 
              title: 'AI Career Mapping',
              desc: "Our AI designs personalized 5-year career paths based on your strengths and market needs." 
            },
            { 
              icon: 'fa-solid fa-bolt', 
              title: 'Hyper-Efficient Learning', 
              desc: "Cut learning time by 60% with optimized skill paths focused on what you really need." 
            },
            { 
              icon: 'fa-solid fa-graduation-cap', 
              title: 'Degree-Free Certification', 
              desc: "Earn credentials that outperform traditional degrees in hiring rates." 
            },
            { 
              icon: 'fa-solid fa-chalkboard-user', 
              title: 'Elite Mentor Network', 
              desc: "Learn from top 5% professionals at Google, Tesla, and Netflix." 
            },
            { 
              icon: 'fa-solid fa-handshake', 
              title: 'Job Matching',
              desc: "Get interviews at companies perfectly aligned with your skillset." 
            },
            { 
              icon: 'fa-solid fa-briefcase', 
              title: 'Portfolio Builder', 
              desc: "Create stunning project portfolios that showcase your skills effectively." 
            },
            { 
              icon: 'fa-solid fa-chart-line', 
              title: 'Salary Negotiation', 
              desc: "Master negotiation tactics to increase your offers by 20-30% on average." 
            },
            { 
              icon: 'fa-solid fa-globe', 
              title: 'Global Opportunities', 
              desc: "Access international job markets with our global partner network." 
            }
          ].map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-ray"></div>
              <div className="home-dot"></div>
              <div className="home-line home-topl"></div>
              <div className="home-line home-leftl"></div>
              <div className="home-line home-bottoml"></div>
              <div className="home-line home-rightl"></div>

              <div className="home-feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="home-feature-title">{feature.title}</h3>
              <p className="home-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
     
      <section className="home-how-it-works">
        <h2 className="home-section-title">Your <span>Success</span> Blueprint</h2>
        <p className="home-section-subtitle">
          We've engineered a proven 5-step system that transforms beginners into 
          high-value professionals. Here's how we make it happen:
        </p>
        
        <div className="home-steps-container">
          <div className="home-connector-line" style={{left: '290px'}}></div>
          
          <div className="home-steps">
            {[
              { 
                num: '01', 
                title: 'Intelligent Discovery', 
                desc: 'Our AI analyzes 50+ data points to reveal your ideal career path with 92% accuracy.' 
              },
              { 
                num: '02', 
                title: 'Hyper-Personalization', 
                desc: 'Get a custom learning plan that adapts to your pace, goals, and schedule.' 
              },
              { 
                num: '03', 
                title: 'Micro-Skill Mastery', 
                desc: 'Bite-sized, project-based learning that builds real portfolio pieces fast.' 
              },
              { 
                num: '04', 
                title: 'Elite- Mentorship', 
                desc: '1:1 guidance from top 1% industry experts in your target field.' 
              },
              { 
                num: '05', 
                title: 'Strategic Placement', 
                desc: 'Direct introductions to hiring managers at your dream companies.' 
              }
            ].map((step, index) => (
              <div key={index} className="home-step">
                <div className="home-step-number">{step.num}</div>
                <h3 className="home-step-title">{step.title}</h3>
                <p className="home-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Marquee */}
<section className="home-testimonials">
  <h2 className="home-section-title">Voices of NexSkill</h2>
  
  <div className="home-marquee-container">
    <div className="home-marquee">
      <div className="home-testimonial-grid">
        {/* Testimonial 1 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Hamza" className="home-testimonial-image" />
          <p className="home-testimonial-text">"I used to think I needed a degree to succeed. NexSkill gave me a direction, not just content."</p>
          <p className="home-testimonial-author">Hamza</p>
          <p className="home-testimonial-role">UI Designer</p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Areeba" className="home-testimonial-image" />
          <p className="home-testimonial-text">"Micro-courses were a game-changer. I built my portfolio in 3 weeks!"</p>
          <p className="home-testimonial-author">Areeba</p>
          <p className="home-testimonial-role">Content Marketer</p>
        </div>
        
        {/* Testimonial 3 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Ali" className="home-testimonial-image" />
          <p className="home-testimonial-text">"The project-based learning approach helped me land my first developer job within months."</p>
          <p className="home-testimonial-author">Ali</p>
          <p className="home-testimonial-role">Web Developer</p>
        </div>

        {/* Testimonial 4 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sara" className="home-testimonial-image" />
          <p className="home-testimonial-text">"NexSkill connected me with mentors who guided me step by step into freelancing."</p>
          <p className="home-testimonial-author">Sara</p>
          <p className="home-testimonial-role">Freelance Writer</p>
        </div>

        {/* Testimonial 5 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Usman" className="home-testimonial-image" />
          <p className="home-testimonial-text">"From zero coding knowledge to building apps — NexSkill really transformed my career."</p>
          <p className="home-testimonial-author">Usman</p>
          <p className="home-testimonial-role">App Developer</p>
        </div>

        {/* Testimonial 6 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Minal" className="home-testimonial-image" />
          <p className="home-testimonial-text">"I loved the bite-sized lessons. Learning felt effortless and motivating every day."</p>
          <p className="home-testimonial-author">Minal</p>
          <p className="home-testimonial-role">Graphic Designer</p>
        </div>
      </div>
      
      {/* Duplicate testimonials for seamless marquee */}
      <div className="home-testimonial-grid">
        {/* Repeat all 6 testimonials */}
        {/* 1 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Hamza" className="home-testimonial-image" />
          <p className="home-testimonial-text">"I used to think I needed a degree to succeed. NexSkill gave me a direction, not just content."</p>
          <p className="home-testimonial-author">Hamza</p>
          <p className="home-testimonial-role">UI Designer</p>
        </div>
        {/* 2 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Areeba" className="home-testimonial-image" />
          <p className="home-testimonial-text">"Micro-courses were a game-changer. I built my portfolio in 3 weeks!"</p>
          <p className="home-testimonial-author">Areeba</p>
          <p className="home-testimonial-role">Content Marketer</p>
        </div>
        {/* 3 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Ali" className="home-testimonial-image" />
          <p className="home-testimonial-text">"The project-based learning approach helped me land my first developer job within months."</p>
          <p className="home-testimonial-author">Ali</p>
          <p className="home-testimonial-role">Web Developer</p>
        </div>
        {/* 4 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sara" className="home-testimonial-image" />
          <p className="home-testimonial-text">"NexSkill connected me with mentors who guided me step by step into freelancing."</p>
          <p className="home-testimonial-author">Sara</p>
          <p className="home-testimonial-role">Freelance Writer</p>
        </div>
        {/* 5 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Usman" className="home-testimonial-image" />
          <p className="home-testimonial-text">"From zero coding knowledge to building apps — NexSkill really transformed my career."</p>
          <p className="home-testimonial-author">Usman</p>
          <p className="home-testimonial-role">App Developer</p>
        </div>
        {/* 6 */}
        <div className="home-testimonial-card">
          <i className="fas fa-quote-right home-quote-icon"></i>
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Minal" className="home-testimonial-image" />
          <p className="home-testimonial-text">"I loved the bite-sized lessons. Learning felt effortless and motivating every day."</p>
          <p className="home-testimonial-author">Minal</p>
          <p className="home-testimonial-role">Graphic Designer</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="home-final-cta">
        <h2>Ready to Level Up?</h2>
        <p>Join thousands of young minds turning passion into purpose.</p>
        <div className="home-cta-buttons-final">
          <Link to="">  
            <button className="home-cta-btn-final home-find-path"> Find My Path</button>
          </Link>
          <Link to="/Roadmap">  
            <button className="home-cta-btn-final home-view-roadmap"> View Skill Roadmap</button>
          </Link>
          <Link to="/Mentors">  
            <button className="home-cta-btn-final home-meet-mentors"> Meet Mentors</button>
          </Link>
        </div>
      </section>

      {/* Floating Contact Bubble */}
     <Link to ="/Feedback"> <div className="home-contact-bubble">
        <i className="fas fa-comment-dots"></i>
      </div>
      </Link>
      <Footer/>
    </div>
  );
}

export default Home;