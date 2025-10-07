import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./VisionMission.css";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
      <div className="vm-heading">
        <h2>
          Our <span>Vision</span> & <span>Mission</span>
        </h2>
        <p>
          Driving innovation and excellence through technology and people-first
          strategy.
        </p>
      </div>

      <div className="vm-cards">
        <motion.div
          className="vm-card"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          <h3>Vision</h3>
          <p>
            To be the global leader in providing intelligent HR and IT solutions
            that empower businesses to thrive in a digital era.
          </p>
        </motion.div>

        <motion.div
          className="vm-card"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          <h3>Mission</h3>
          <p>
            To innovate, simplify, and deliver high-value technological
            experiences that enhance productivity, collaboration, and growth.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMission;
