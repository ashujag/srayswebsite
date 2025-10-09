import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Clients.css";

import ksreiImage from "../assets/ksrei_v1.jpg";
import sairamgroupImage from "../assets/sairamgroup_v1.png";

const clients = [
  {
    id: 1,
    image: ksreiImage,
    alt: "KSR Educational Institutions",
    name: "KSR Educational Institutions",
  },
  {
    id: 2,
    image: sairamgroupImage,
    alt: "Sairam Group of Institutions",
    name: "Sairam Group of Institutions",
  },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="clients"
      className="clients-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Our Valued Clients</motion.h2>
      <motion.p className="section-description" variants={itemVariants}>
        Trusted by leading educational institutions — empowering their digital
        HR transformation journey.
      </motion.p>

      <motion.div className="clients-grid" variants={containerVariants}>
        {clients.map((client) => (
          <motion.div
            className="client-card"
            key={client.id}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img src={client.image} alt={client.alt} />
            <p>{client.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Clients;
