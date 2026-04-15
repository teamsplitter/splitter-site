import React, { useState, useEffect } from "react";

function Hero({ slides, title, text, primaryAction, secondaryAction }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides?.length || 1;

  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="hero-wrapper">
      {slides &&
        slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${currentSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url('${slide}')` }}
          ></div>
        ))}

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="hero-content-inner">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-text">{text}</p>
          <div className="hero-actions">
            {primaryAction && (
              <a href={primaryAction.link} className="btn btn-secondary">
                {primaryAction.text}
              </a>
            )}
            {secondaryAction && (
              <a href={secondaryAction.link} className="btn btn-outline-white">
                {secondaryAction.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
