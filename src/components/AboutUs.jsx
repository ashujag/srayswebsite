import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="about-us-section"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="about-us-content" variants={itemVariants}>
        <h2>About Us</h2>
        <p>"SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process. We have professionals who are actively exercising Human Resources practices in the Industry, by providing up-to-date sophisticated HR solutions and HRMS (Human Resource Management System) software, IT services to start ups, SMEs, Family Based businesses and Corporates.</p>
        <p>As a contribution towards Students community, we are conducting some HR Skill Development Programs for helping them to Up-Skill their knowledge towards the Industrial requirements. Also we conduct Technical Skill Development Programs for HR Professionals and Entrepreneurs.</p>
        <motion.button
          className="btn-secondary"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Why Us!
        </motion.button>
      </motion.div>
      <motion.div
        className="about-us-image"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src="assets/img/aboutus_bg.png" alt="About Us Background" />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
