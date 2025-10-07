import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './KnowledgeSpot.css';

const knowledgeItems = [
  'Building & Sustaining a career in HR',
  'Recruitment Trends & Challenges',
  'Pep Talk Series on Talent Development & Retention Stratergy',
];

const KnowledgeSpot = () => {
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
      <motion.p className="section-description" variants={itemVariants}>News websites and blogs are common sources for web feeds, but feeds are also used to deliver structured</motion.p>
      <motion.div className="knowledge-list" variants={containerVariants}>
        <ul>
          {knowledgeItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default KnowledgeSpot;
