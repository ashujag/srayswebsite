import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logoHeader from '../assets/logoheader.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');
  const headerRef = useRef(null);
  const navItemsRef = useRef([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = [
        'hero-section',
        'about-us',
        'business-services',
        'testimonials',
        'latest-news',
        'knowledge-spot',
        'clients',
        'contact-us'
      ];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Staggered nav items animation on mount
  useEffect(() => {
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 80);
      }
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero-section', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'business-services', label: 'Services' },
    { id: 'testimonials', label: 'Portfolio' },
    { id: 'latest-news', label: 'Blog' },
    { id: 'knowledge-spot', label: 'KnowledgeSpot' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact-us', label: 'Contact' }
  ];

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      ref={headerRef}
    >
      {/* Animated background gradient */}
      <div className="header-gradient-bg"></div>
      
      {/* Floating particles in header */}
      <div className="header-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="header-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="logo">
        <img 
          src={logoHeader} 
          alt="SRays Logo" 
          className="logo-image"
        />
        <div className="logo-glow"></div>
      </div>

      <nav className="nav">
        <ul>
          {navLinks.map((link, index) => (
            <li 
              key={link.id}
              ref={el => navItemsRef.current[index] = el}
              className="nav-item-wrapper"
            >
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
                <span className="nav-link-underline"></span>
                <span className="nav-link-glow"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Decorative line */}
      <div className="header-line"></div>
    </header>
  );
};

export default Header;