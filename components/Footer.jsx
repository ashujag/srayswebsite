import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Footer.css';

const Footer = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="footer-content" variants={containerVariants}>
        <motion.div className="footer-section about" variants={itemVariants}>
          <h3>About SRays</h3>
          <p>"SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process.</p>
        </motion.div>
        <motion.div className="footer-section contact" variants={itemVariants}>
          <h3>Contact Us</h3>
          <p>INDIA: 7, Sairam street, Jalladampet, Chennai-600100</p>
          <p>Phone: 044-42735893</p>
          <p>HONG KONG: 9th Floor,Amtel Building,148 Des Voeux Road, Central Hong Kong</p>
          <p>Email: hr@srayssolutions.in</p>
          <p>Website: www.srayssolutions.in</p>
        </motion.div>
        <motion.div className="footer-section links" variants={containerVariants}>
          <h3>Quick Links</h3>
          <ul>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}><a href="#services">Services</a></motion.li>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}><a href="#news">Latest News</a></motion.li>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}><a href="#clients">Clients</a></motion.li>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}><a href="#contact">Get in Touch</a></motion.li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div className="footer-bottom" variants={itemVariants}>
        &copy; {new Date().getFullYear()} SRays Solutions. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
