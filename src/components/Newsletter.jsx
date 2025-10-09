import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Newsletter.css";
import newsletterPhoto from "../assets/newsletter-photo.jpeg";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
        <p>
          Stay informed with our latest HR insights, updates, and resources.
          We'll send you email notifications whenever we publish new content.
        </p>
        <motion.form className="newsletter-form" variants={itemVariants}>
          <motion.input
            type="email"
            placeholder="Enter your email"
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            className="btn-primary"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div className="newsletter-image" variants={imageVariants}>
        <motion.img
          src={newsletterPhoto}
          alt="Newsletter Visual"
          variants={imageVariants}
        />
      </motion.div>
    </motion.section>
  );
};

export default Newsletter;
