import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './VisionMission.css';

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="vision-mission-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="vision-card"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>Vision</h3>
        <p>We wish to be the HR front-runners in setting up customized virtual HR & HRMS systems at a most viable price.</p>
      </motion.div>
      <motion.div
        className="mission-card"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>Mission</h3>
        <p>We aspire to innovate more and more state of the art solutions in the HR and technological domains in the years to come.</p>
      </motion.div>
    </motion.section>
  );
};

export default VisionMission;
