import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="newsletter-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="newsletter-content" variants={itemVariants}>
        <h2>Subscribe to our newsletter</h2>
        <p>Subscribe to our Newsletter. We'll send email notifications everytime we release new Template.</p>
        <motion.form className="newsletter-form" variants={itemVariants}>
          <motion.input type="email" placeholder="Enter your email" variants={itemVariants} />
          <motion.button
            type="submit"
            className="btn-primary"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      </motion.div>
      <motion.div className="newsletter-images" variants={containerVariants}>
        <motion.img src="assets/img/light-img/news-letter-img.png" alt="Newsletter" variants={imageVariants} />
        <motion.img src="assets/img/light-img/bard1.png" alt="Bard 1" variants={imageVariants} />
        <motion.img src="assets/img/light-img/bard2.png" alt="Bard 2" variants={imageVariants} />
        <motion.img src="assets/img/light-img/bard3.png" alt="Bard 3" variants={imageVariants} />
      </motion.div>
    </motion.section>
  );
};

export default Newsletter;
