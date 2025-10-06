import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './LatestNews.css';

const newsItems = [
  {
    id: 1,
    author: 'SRays',
    title: 'HR skills training program',
    description: 'Happy to associate with K. S. R. Educational institutions for HR skills training program...',
    date: '28 May, 2022',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6915572849441198080/',
  },
  {
    id: 2,
    author: 'SRays',
    title: 'A business plan is a formal written document business goals',
    description: 'A business plan is a formal written document containing business goals. The methods on how these goals can be [...]',
    date: '12 March, 2019',
    link: '#',
  },
  {
    id: 3,
    author: 'SRays',
    title: 'A business is the activity of making one\'s living',
    description: 'Business may offer to many differing activitie, such as the activity of buying or selling in trade. Business activity [...]',
    date: '08 March, 2019',
    link: '#',
  },
];

const LatestNews = () => {
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
      className="latest-news-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Latest News</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>News websites and blogs are common sources for web feeds, but feeds are also used to deliver structured</motion.p>
      <motion.div className="news-grid" variants={containerVariants}>
        {newsItems.map((item) => (
          <motion.div
            className="news-card"
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="news-author">By {item.author}</p>
            <h3>{item.title}</h3>
            <p className="news-description">{item.description}</p>
            <p className="news-date">{item.date}</p>
            <motion.a
              href={item.link}
              className="read-more-link"
              whileHover={{ x: 5 }}
            >
              Read More
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LatestNews;
