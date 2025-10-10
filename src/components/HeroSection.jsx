import React, { useRef, useEffect } from 'react';
import RotatingText from './RotatingText';
import './HeroSection.css';
// UPDATE: Using the path mentioned in your initial request
import prominentImg from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const heroContentRef = useRef(null);
  const headingRef = useRef(null);

  // Simple entrance animations on mount (NO CHANGES TO FUNCTIONALITY)
  useEffect(() => {
    const heading = headingRef.current;
    const content = heroContentRef.current;
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
  }, []);

  const staticHeadingPart = 'Design An Optimal Business Model to reach your ';
  const rotatingTexts = ['IT Services', 'Designing', 'HR Solutions'];
  const staticWords = staticHeadingPart.split(' ');

  return (
    <section id="hero-section" className="hero-section" ref={ref}>
      
      {/* Background image will be set via CSS on .hero-section */}
      {/* Animated design layer */}
      <div className="hero-animated-design"></div>

      <div className="hero-content observe-fade" ref={heroContentRef}>
        <h2 ref={headingRef}>
          {staticWords.map((word, index) => (
            <span
              key={index}
              className="word-animate"
            >
              {word}{' '}
            </span>
          ))}
          <RotatingText
            texts={rotatingTexts}
            mainClassName="inline-flex"
            splitLevelClassName="inline-flex"
            elementLevelClassName="inline-block"
            rotationInterval={2000}
            staggerDuration={0.05}
            animatePresenceInitial={true}
          />
        </h2>

        <p className="paragraph-animate">
          The process of business model construction and modification is also called business model innovation.
        </p>

        <button className="btn-primary button-animate">
          Learn More
          <span className="button-glow"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
