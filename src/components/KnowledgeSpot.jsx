import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./KnowledgeSpot.css";

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
      <div className="video-container">
        <div className="video-wrapper">
          <iframe id="latest-youtube-vid-0" className="latestVideoEmbed" vnum="0" cid="UCJ01Gtpe2gRsy6sYtfKnk9g" width="600" height="340" frameborder="0" allowfullscreen="" src="https://youtube.com/embed/zqR8bw8bqdM?controls=0&autoplay=0"></iframe>
        </div>
        <div className="video-wrapper">
          <iframe id="latest-youtube-vid-1" className="latestVideoEmbed" vnum="1" cid="UCJ01Gtpe2gRsy6sYtfKnk9g" width="600" height="340" frameborder="0" allowfullscreen="" src="https://youtube.com/embed/7s-uYaQcqq4?controls=0&autoplay=0"></iframe>
        </div>
        <div className="video-wrapper">
          <iframe id="latest-youtube-vid-2" class="latestVideoEmbed" vnum="2" cid="UCJ01Gtpe2gRsy6sYtfKnk9g" width="600" height="340" frameborder="0" allowfullscreen="" src="https://youtube.com/embed/7CenIv7jl_k?controls=0&amp;autoplay=0"></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default KnowledgeSpot;
