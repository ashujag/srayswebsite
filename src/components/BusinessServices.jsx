import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BusinessServices.css';

import E_Learning_Img from '../assets/E-Learning.png';
import StatutoryCompliance_Img from '../assets/Statutory compliance.png';
import Hrms_Img from '../assets/Hrms.png';

const services = [
  {
    icon: E_Learning_Img,
    title: 'E-Learning',
    description: 'To satisfy people\'s hunger on learning, we provide HR Skill development courses for professional and Management students with the modern HR Trends to meet out the industrial expectations. A perfect landscape designed for live learning sessions along with case study workouts providing practical implementation of HR Concepts. Get ready to set out your career in HR with our skill development programs under the guidance of industrial experts.',
  },
  {
    icon: StatutoryCompliance_Img,
    title: 'Statutory Compliance',
    description: 'We provide an effective statutory compliance for Micro to Large scale companies and enterprise with a precise and well-managed solution. Our expertâ€™s works to align your organization with the updated statutory laws and norms which keeps you safe from compliance risk. We have a structured approach towards both HR (ESI, PF and Gratuity) and Payroll & Tax (TDS & Professional Tax) which results in better growth of your organization.',
  },
  {
    icon: Hrms_Img,
    title: 'HRMS',
    description: 'This is a form of HR software that makes day today employee related activities and cumbersome HR data feasible to be managed through our user friendly HRMS services. End to end automation of HR processes is assured without manual intervention',
  },
  {
    icon: 'assets/img/icons/service-web-design.png',
    title: 'Web Design',
    description: 'The different areas of web design include web graphic design; interface design; authoring, including standard code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects',
  },
  {
    icon: 'assets/img/icons/service-recruitment.png',
    title: 'Recruitment',
    description: 'Hiring the right resource is always a challenge, but with the blend of dedicated recruiters, technology & best hiring practices we provide the right set of resources for any challenging positions. Our recruitment process is crafted specifically to match your business needs and to streamline & enhance the quality of your human capital. Get ready to leverage the cost and time efficient recruitment with us!',
  },
  {
    icon: 'assets/img/icons/service-training-developement.png',
    title: 'Training & Development',
    description: 'We train your employees to develop them as successful resources who can contribute to the revenue of the organization. We as a consultant see through the client training needs and would execute training programs and events, through veteran trainers associated with us.',
  },
  {
    icon: 'assets/img/icons/service-organizational-development.png',
    title: 'Organizational Development Support',
    description: 'We provide a personalized OD which is tailored accordingly on your organizational assessment. An unique framework for OD crafted to focus on your organizational priorities and business requirements which helps to upheld your business standards. Our team provides ideal landscape for SME and fast growing corporates which look forward to develop organizational culture and performance to meet out their vision and mission.',
  },
  {
    icon: 'assets/img/icons/service-payroll-service.png',
    title: 'Payroll Services',
    description: 'Flexible and secured payroll process is a puzzle for employers. We provide end-to-end support for employee payroll with an error free & consistent service. The ideal option is to Leverage the benefits of working with our payroll experts to streamline the process with payroll laws. We are flexible enough to customize according to your expectations with our experts advise which helps to unlock your business insights.',
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

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
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
        {/* Left Side - Heading Section */}
        <div className="services-header">
          <motion.div className="header-content" variants={headingVariants}>
            <h2>
              Great Services,
              <br />
              <span className="highlight-text">Delivered</span>
              <br />
              <span className="highlight-text">Together.</span>
            </h2>
            <div className="header-meta">
              <div className="meta-label">AVAILABLE</div>
              <div className="meta-value">24/7 Support</div>
              <div className="meta-time">Anytime, Anywhere</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Services Grid */}
        <motion.div className="services-grid-container" variants={containerVariants}>
          <motion.p className="section-description" variants={itemVariants}>
            Business services are activities that combine or consolidate certain enterprise-wide needed support services
          </motion.p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="service-card-inner">
                  <div className="service-header">
                    <img src={service.icon} alt={service.title} className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
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
