import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ContactUs.css';

const ContactUs = () => {
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

  return (
    <motion.section
      className="contact-us-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Drop Down to Get in touch</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>hello! Let's Talk</motion.p>
      <motion.div className="contact-info-grid" variants={containerVariants}>
        <motion.div
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>INDIA</h3>
          <p>7, Sairam street, Jalladampet, Chennai-600100</p>
          <p>044-42735893</p>
        </motion.div>
        <motion.div
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>HONG KONG</h3>
          <p>9th Floor,Amtel Building,148 Des Voeux Road, Central Hong Kong</p>
        </motion.div>
        <motion.div
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Email & Web</h3>
          <p>hr@srayssolutions.in</p>
          <p>www.srayssolutions.in</p>
        </motion.div>
      </motion.div>
      <motion.button
        className="btn-primary"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.section>
  );
};

export default ContactUs;
