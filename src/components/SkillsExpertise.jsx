import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./SkillsExpertise.css";
import teamPhoto from "../assets/real-team.jpg";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1.8, ease: "easeOut" },
    }),
  };

  // Floating Particles
  const particles = Array.from({ length: 10 });

  return (
    <section className="skills-expertise-section" ref={ref}>
      {/* ✨ Cinematic Parallax Background */}
      <motion.div
        className="skills-bg"
        style={{ scale: bgScale, y: bgY }}
      ></motion.div>

      {/* Floating Particles */}
      <AnimatePresence>
        {particles.map((_, index) => (
          <motion.span
            key={index}
            className="floating-particle"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [Math.random() * window.innerHeight, -100],
              x: "+=20",
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      <div className="skills-container">
        {/* Left Side Image */}
        <motion.div
          className="skills-image-container cinematic"
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src={teamPhoto}
            alt="Professional Team"
            whileHover={{
              scale: 1.05,
              rotateY: 0,
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="skills-content glass"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: contentY }}
        >
          <motion.h2 variants={itemVariants} className="skills-title glow">
            Skills & Expertise
          </motion.h2>

          <motion.p className="section-description" variants={itemVariants}>
            Our expert team combines innovation, strategy, and creativity to
            deliver exceptional HR and software solutions. Every skill reflects
            precision, teamwork, and growth-driven results.
          </motion.p>

          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item glass-effect"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(0, 140, 255, 0.4)",
                }}
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
