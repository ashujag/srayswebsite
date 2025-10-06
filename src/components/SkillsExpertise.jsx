import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './SkillsExpertise.css';

const skills = [
  { name: 'HR Consulting', percentage: 90 },
  { name: 'OD Consultant', percentage: 95 },
  { name: 'Resume Writing', percentage: 85 },
  { name: 'Content Development', percentage: 80 },
  { name: 'Customized Software Developers', percentage: 95 },
];

const SkillsExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      className="skills-expertise-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>A skill is the ability to carry out a task with determined results often within a given amount of time. Skill usually requires certain environ stimuli and situations to assess more then enough.</motion.p>
      <motion.div className="skills-grid" variants={containerVariants}>
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>{skill.name}</h3>
            <div className="progress-bar-container">
              <motion.div
                className="progress-bar"
                variants={progressBarVariants}
                custom={skill.percentage}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              ></motion.div>
            </div>
            <p className="skill-percentage">{skill.percentage}%</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsExpertise;
