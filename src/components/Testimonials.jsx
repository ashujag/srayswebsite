import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';
import testimonial_01 from '../assets/Testimonials/01.jpg';
import testimonial_02 from '../assets/Testimonials/2.jpg';
import testimonial_03 from '../assets/Testimonials/3.jpg';
import testimonial_04 from '../assets/Testimonials/4.jpg';
import testimonial_05 from '../assets/Testimonials/5.jpg';
import testimonial_06 from '../assets/Testimonials/6.jpg';
import testimonial_07 from '../assets/Testimonials/7.jpg';
import testimonial_08 from '../assets/Testimonials/8.jpg';
import testimonial_09 from '../assets/Testimonials/9.jpg';


const testimonials = [
  { id: 1, image: testimonial_01, alt: 'Testimonial 1' },
  { id: 2, image: testimonial_02, alt: 'Testimonial 2' },
  { id: 3, image: testimonial_03, alt: 'Testimonial 3' },
  { id: 4, image: testimonial_04, alt: 'Testimonial 4' },
  { id: 5, image: testimonial_05, alt: 'Testimonial 5' },
  { id: 6, image: testimonial_06, alt: 'Testimonial 6' },
  { id: 7, image: testimonial_07, alt: 'Testimonial 7' },
  { id: 8, image: testimonial_08, alt: 'Testimonial 8' },
  { id: 9, image: testimonial_09, alt: 'Testimonial 9' },
];

const Testimonials = () => {
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
      id="testimonials"
      className="testimonials-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Endorsement of our Success</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>We don`t write stories, but imprint out Success - Success Stories more to come.</motion.p>
      <motion.div className="testimonials-grid" variants={containerVariants}>
        {testimonials.map((testimonial) => (
          <motion.div
            className="testimonial-card"
            key={testimonial.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={testimonial.image} alt={testimonial.alt} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
