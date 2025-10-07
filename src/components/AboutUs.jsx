import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about-us"
      className="aboutus-modern"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="aboutus-content" variants={itemVariants}>
        <h2>About Us</h2>
        <p>
          <strong>SRays</strong> is an HR outsourcing firm established by
          proficient experts in Human Resources. Our goal is to virtualize the
          HR process, providing sophisticated HR solutions and HRMS software to
          startups, SMEs, and corporates.
        </p>
        <p>
          We also conduct{" "}
          <strong>HR & Technical Skill Development Programs</strong> for
          students and professionals to upskill and adapt to modern industry
          requirements.
        </p>

        <motion.button
          className="modern-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Why Us?
        </motion.button>
      </motion.div>

      <motion.div
        className="aboutus-image"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
      >
        <img src="aboutus_bg.png" alt="About Us" />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
