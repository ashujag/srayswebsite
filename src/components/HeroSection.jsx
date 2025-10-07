import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero-img.png';

const HeroSection = () => {
  const ref = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const headingRef = useRef(null);

  // Simple entrance animations on mount - text stays visible
  useEffect(() => {
    const heading = headingRef.current;
    const content = heroContentRef.current;
    const image = heroImageRef.current;

    if (heading) {
      const words = heading.querySelectorAll('span');
      words.forEach((word, index) => {
        setTimeout(() => {
          word.style.opacity = '1';
          word.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }

    if (content) {
      setTimeout(() => {
        const p = content.querySelector('p');
        const button = content.querySelector('.btn-primary');
        if (p) {
          p.style.opacity = '1';
          p.style.transform = 'translateY(0)';
        }
        if (button) {
          button.style.opacity = '1';
          button.style.transform = 'scale(1)';
        }
      }, 400);
    }

    if (image) {
      setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'translateX(0) scale(1)';
      }, 600);
    }
  }, []);

  // Split heading into words
  const headingText = 'Design An Optimal Business Model to reach your IT Services';
  const words = headingText.split(' ');

  return (
    <section id="hero-section" className="hero-section" ref={ref}>
      {/* Animated gradient background */}
      <div className="hero-gradient-bg"></div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content observe-fade" ref={heroContentRef}>
        <h2 ref={headingRef}>
          {words.map((word, index) => (
            <span
              key={index}
              className="word-animate"
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="paragraph-animate">
          The process of business model construction and modification is also called business model innovation.
        </p>

        <button className="btn-primary button-animate">
          Learn More
          <span className="button-glow"></span>
        </button>
      </div>

      <div className="hero-image observe-fade image-animate" ref={heroImageRef}>
        <div className="image-wrapper">
          <img src={heroImg} alt="Hero Image" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
