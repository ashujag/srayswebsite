import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./LatestNews.css";

const newsItems = [
  {
    id: 1,
    author: "SRays",
    title: "HR Skills Training Program",
    description:
      "Happy to associate with K. S. R. Educational Institutions for HR skills training program to enhance employee capabilities...",
    date: "28 May, 2022",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6915572849441198080/",
  },
  {
    id: 2,
    author: "SRays",
    title: "Building a Winning Business Plan",
    description:
      "Learn how to structure your business plan and define clear goals to drive your organization forward successfully...",
    date: "12 March, 2019",
    link: "#",
  },
  {
    id: 3,
    author: "SRays",
    title: "The Power of Smart Business Operations",
    description:
      "Business success starts with smart decisions and effective team management that align with your goals...",
    date: "08 March, 2019",
    link: "#",
  },
];

const LatestNews = () => {
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
      id="latest-news"
      className="latest-news-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Latest News</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>
        Stay updated with our latest HR events, insights, and achievements that
        drive people and business success.
      </motion.p>

      <motion.div className="news-grid" variants={containerVariants}>
        {newsItems.map((item) => (
          <motion.div
            className="news-card"
            key={item.id}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="news-header">
              <p className="news-author">By {item.author}</p>
              <p className="news-date">{item.date}</p>
            </div>
            <h3>{item.title}</h3>
            <p className="news-description">{item.description}</p>
            <motion.a
              href={item.link}
              className="read-more-link"
              whileHover={{ x: 6 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LatestNews;
