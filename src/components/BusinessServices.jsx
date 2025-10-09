import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BusinessServices.css';

// Import all necessary assets (Assuming these paths are correct)
import E_Learning_Img from '../assets/E-Learning.png';
import StatutoryCompliance_Img from '../assets/Statutory compliance.png';
import Hrms_Img from '../assets/Hrms.png';

// Placeholder for the new image (USE YOUR ACTUAL PATH)
import agentImage from '../assets/front-view-man-working-as-real-estate-agent.jpg'; 

const services = [
  // --- ORIGINAL CONTENT 1 ---
  {
    icon: E_Learning_Img,
    title: 'E-Learning',
    description: 'To satisfy people\'s hunger on learning, we provide HR Skill development courses for professional and Management students with the modern HR Trends to meet out the industrial expectations. A perfect landscape designed for live learning sessions along with case study workouts providing practical implementation of HR Concepts. Get ready to set out your career in HR with our skill development programs under the guidance of industrial experts.',
  },
  // --- ORIGINAL CONTENT 2 ---
  {
    icon: StatutoryCompliance_Img,
    title: 'Statutory Compliance',
    description: 'We provide an effective statutory compliance for Micro to Large scale companies and enterprise with a precise and well-managed solution. Our expert’s works to align your organization with the updated statutory laws and norms which keeps you safe from compliance risk. We have a structured approach towards both HR (ESI, PF and Gratuity) and Payroll & Tax (TDS & Professional Tax) which results in better growth of your organization.',
  },
  // --- ORIGINAL CONTENT 3 ---
  {
    icon: Hrms_Img,
    title: 'HRMS',
    description: 'This is a form of HR software that makes day today employee related activities and cumbersome HR data feasible to be managed through our user friendly HRMS services. End to end automation of HR processes is assured without manual intervention',
  },
  // --- RESTORED PLACEHOLDERS (Assuming these are the original contents for the 5 additional divs) ---
  { 
    icon: E_Learning_Img, 
    title: 'Recruitment', 
    description: 'Hiring the right resource is always a challenge, but with the blend of dedicated recruiters, technology & best hiring practices we provide the right set of resources for any challenging positions. Our recruitment process is crafted specifically to match your business needs and to streamline & enhance the quality of your human capital. Get ready to leverage the cost and time efficient recruitment with us!' 
  },
  { 
    icon: StatutoryCompliance_Img, 
    title: 'Web Design', 
    description: 'The different areas of web design include web graphic design; interface design; authoring, including standard code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects' 
  },
  { 
    icon: Hrms_Img, 
    title: 'Training & Development', 
    description: 'We train your employees to develop them as successful resources who can contribute to the revenue of the organization. We as a consultant see through the client training needs and would execute training programs and events, through veteran trainers associated with us.' 
  },
  { 
    icon: E_Learning_Img, 
    title: 'Organizational Development Support', 
    description: 'We provide a personalized OD which is tailored accordingly on your organizational assessment. An unique framework for OD crafted to focus on your organizational priorities and business requirements which helps to upheld your business standards. Our team provides ideal landscape for SME and fast growing corporates which look forward to develop organizational culture and performance to meet out their vision and mission.' 
  },
  { 
    icon: StatutoryCompliance_Img, 
    title: 'Payroll Services', 
    description: 'Flexible and secured payroll process is a puzzle for employers. We provide end-to-end support for employee payroll with an error free & consistent service. The ideal option is to Leverage the benefits of working with our payroll experts to streamline the process with payroll laws. We are flexible enough to customize according to your expectations with our experts advise which helps to unlock your business insights.' 
  },
];

const BusinessServices = () => {
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
      id="business-services"
      className="business-services-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="services-container">
        
        {/* ========================================== */}
        {/* LEFT SIDE: HEADER, DESCRIPTION, AND IMAGE CARD (Design Preserved) */}
        {/* ========================================== */}
        <motion.div className="services-header-container" variants={containerVariants}>
          <div className="services-header">
            <motion.h2 className="business-services-title" variants={itemVariants}>
              Our Business Services
            </motion.h2>
            <motion.p className="section-description-header" variants={itemVariants}>
              {/* Original text from the description section */}
              Business services are activities that combine or consolidate certain enterprise-wide needed support services
            </motion.p>
          </div>

          {/* Professional Image Card Section */}
          <motion.div className="image-meta-wrapper" variants={itemVariants}>
            <img 
              src={agentImage} 
              alt="Man working as a real estate agent" 
              style={{ width: '100%', objectPosition: 'top' }}
            />
            <div className="image-meta-content">
              <div className="meta-label">AVAILABLE</div>
              <div className="meta-value">24/7 Support</div>
              <div className="meta-time">Anytime, Anywhere</div>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================== */}
        {/* RIGHT SIDE: SERVICES GRID (8 DIVS with original text) */}
        {/* ========================================== */}
        <motion.div className="services-grid-container" variants={containerVariants}>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                variants={itemVariants}
                // Framer Motion interaction preserved
                whileHover={{ scale: 1.05, y: -10, boxShadow: '0 0 40px rgba(0, 240, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="service-card-inner">
                  <div className="service-header">
                    <img src={service.icon} alt={service.title} className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
                  {/* TEXT CONTENT REMAINS INTACT */}
                  <p>{service.description}</p> 
                  <div className="service-arrow">→</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessServices;
