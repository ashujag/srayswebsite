import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./SkillsExpertise.css";
import teamPhoto from "../assets/real-team.jpg"; // 🧍 Use real human photo here

const skills = [
  { name: "HR Consulting", percentage: 90 },
  { name: "OD Consultant", percentage: 95 },
  { name: "Resume Writing", percentage: 85 },
  { name: "Content Development", percentage: 80 },
  { name: "Customized Software Developers", percentage: 95 },
];

const SkillsExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="skills-expertise-section" ref={ref}>
      <div className="skills-container">
        {/* Left Side: Real Human Image */}
        <motion.div
          className="skills-image-container"
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={teamPhoto} alt="Professional Team Working Together" />
        </motion.div>

        {/* Right Side: Skills */}
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          <motion.p className="section-description" variants={itemVariants}>
            Our expert team brings a wealth of experience across multiple
            domains, delivering impactful HR solutions, innovative development
            strategies, and professional content tailored to each organization’s
            needs.
          </motion.p>

          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress-bar-container">
                  <motion.div
                    className="progress-bar"
                    variants={progressBarVariants}
                    custom={skill.percentage}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
