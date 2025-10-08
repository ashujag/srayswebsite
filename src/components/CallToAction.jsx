import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CallToAction.css";
import ctaImage from "../assets/cta-hr-team.jpg"; // ✅ same real HR photo

const CallToAction = () => {
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

  return (
    <motion.section
      className="cta-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="cta-content" variants={itemVariants}>
        <h2>Get Improve In Your HR Process</h2>
        <p>
          This HR software makes day-to-day employee activities and complex HR
          data easy to manage through our user-friendly HRMS platform.
        </p>
        <motion.button
          className="btn-primary"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get SRays Now!
        </motion.button>
      </motion.div>

      <motion.div
        className="cta-image"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src={ctaImage} alt="HR Team Collaboration" />
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
