import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./KnowledgeSpot.css";

const knowledgeItems = [
  "Building & Sustaining a Career in HR",
  "Recruitment Trends & Challenges",
  "Pep Talk Series on Talent Development & Retention Strategy",
];

const KnowledgeSpot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="knowledge-spot"
      className="knowledge-spot-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Knowledge Spot</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>
        Explore our insights, HR strategies, and professional discussions that
        empower organizations and individuals to grow smarter.
      </motion.p>

      <motion.div className="knowledge-list" variants={containerVariants}>
        <ul>
          {knowledgeItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="bullet-icon">📘</span> {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default KnowledgeSpot;
