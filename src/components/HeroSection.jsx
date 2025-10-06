import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
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
      className="hero-section"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="hero-content" variants={itemVariants}>
        <h2>Design an optimal business model to reach Your HR Solutions IT Services Designing</h2>
        <p>The process of business model construction and modification is also called business model innovation.</p>
        <motion.button
          className="btn-primary"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src="assets/img/icons/hero-img.png" alt="Hero Image" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
