import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutUs.css";
import Stack from "./CardStack"; // Import the Stack component
import image1 from "../assets/creative-designers-team-working-project.jpg";
import image2 from "../assets/team-teamwork-support-collaboration-concept.jpg";
import image3 from "../assets/successful-business-partners-having-meeting-discussing-new-business-project-ideas-office.jpg";

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
        <Stack
          cardsData={[
            { id: 1, img: image1 },
            { id: 2, img: image2 },
            { id: 3, img: image3 },
          ]}
          cardDimensions={{ width: 250, height: 180 }} // Slightly smaller dimensions
          sensitivity={100} // Adjust sensitivity as needed
          randomRotation={true}
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
