import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ContactUs.css";
import animatedBg from "../assets/animated-bg2.png"; // Your animated background image

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact-us"
      className="contact-us-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* 🌌 Parallax Animated Background */}
      <div className="animated-bg">
        <img src={animatedBg} alt="Background" />
      </div>

      {/* ✨ Floating Particles */}
      <div className="particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <motion.div className="contact-content" variants={containerVariants}>
        <motion.h2 variants={itemVariants} className="title">
          Drop Down to Get in Touch
        </motion.h2>

        <motion.p className="section-description" variants={itemVariants}>
          Hello! Let's Talk
        </motion.p>

        <motion.div className="contact-info-grid" variants={containerVariants}>
          {[
            {
              title: "INDIA",
              details: [
                "7, Sairam Street, Jalladampet, Chennai - 600100",
                "044-42735893",
              ],
            },
            {
              title: "HONG KONG",
              details: [
                "9th Floor, Amtel Building, 148 Des Voeux Road, Central Hong Kong",
              ],
            },
            {
              title: "Email & Web",
              details: ["hr@srayssolutions.in", "www.srayssolutions.in"],
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.07,
                rotateY: 6,
                rotateX: 3,
                boxShadow: "0 25px 60px rgba(0, 180, 255, 0.3)",
              }}
            >
              <div className="card-glow"></div>
              <h3>{info.title}</h3>
              {info.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="btn-primary shimmer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
