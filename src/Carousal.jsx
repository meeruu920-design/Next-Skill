import React, { useState, useEffect, useRef } from "react";
import "./Carosusal.css";

const mentors = [
  { name: "John Doe", expertise: "Business Strategy", img: "team1.jpg"},
  { name: "Jane Smith", expertise: "Marketing Expert", img: "team2.webp" },
  { name: "Mike Johnson", expertise: "Web Development", img: "team3.webp" },
  { name: "Sara Williams", expertise: "Design Thinking", img: "team6.jpg" },
  { name: "David Brown", expertise: "Finance & Investing", img: "team4.jpeg" },
  { name: "Emma Davis", expertise: "Leadership Coach", img: "team5.jpg" },
];

const MentorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mentors.length);
    }, 4000); // slower smooth transition
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % mentors.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));

  const getVisibleCards = () => {
    let visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + mentors.length) % mentors.length;
      visible.push(mentors[index]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <div
      className="mentor-carousel-container"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h4 className="subtitle">Expert Mentors</h4>
      <h2 className="title">Meet Our Mentors</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-content" style={{ transition: "transform 1s ease-in-out" }}>
          {visibleCards.map((mentor, index) => (
            <div className={`carousel-card position-${index}`} key={index}>
              <img src={mentor.img} alt={mentor.name} />
              <div className="card-info">
                <h3>{mentor.name}</h3>
                <p>{mentor.expertise}</p>
              </div>
              <div className="hover-details">
                <div className="hover-text">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {mentors.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MentorsCarousel;
