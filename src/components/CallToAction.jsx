import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CallToAction.css";
import ctaHrTeam from "../assets/cta-hr-team.jpg";
import maleSupervisor from "../assets/male-supervisor-training-latin-executive-call-center-manager-explaining-work-stuff-employees-offering-tech-support-customer-service.jpg";
import smileyBusinesswoman from "../assets/smiley-businesswoman-holding-pointing-smartphone.jpg";

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
        <h1 className="headline">Get Improve In Your HR Process</h1>
        <p className="description">
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

      <div className="image-gallery">
        <div className="image-block offset-left">
          <img src={ctaHrTeam} alt="HR Team" />
        </div>
        <div className="image-block offset-right">
          <img src={maleSupervisor} alt="Male Supervisor Training" />
        </div>
        <div className="image-block offset-left">
          <img src={smileyBusinesswoman} alt="Smiley Businesswoman" />
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
