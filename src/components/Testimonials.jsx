import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';


const testimonials = [
  { id: 1, image: '/assets/testimonials/01.jpg', alt: 'Testimonial 1' },
  { id: 2, image: '/assets/testimonials/02.jpg', alt: 'Testimonial 2' },
  { id: 3, image: '/assets/testimonials/03.jpg', alt: 'Testimonial 3' },
  { id: 4, image: '/assets/testimonials/04.jpg', alt: 'Testimonial 4' },
  { id: 5, image: '/assets/testimonials/05.jpg', alt: 'Testimonial 5' },
  { id: 6, image: '/assets/testimonials/06.jpg', alt: 'Testimonial 6' },
  { id: 7, image: '/assets/testimonials/07.jpg', alt: 'Testimonial 7' },
  { id: 8, image: '/assets/testimonials/08.jpg', alt: 'Testimonial 8' },
  { id: 9, image: '/assets/testimonials/09.jpg', alt: 'Testimonial 9' },
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
