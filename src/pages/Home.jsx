import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import VisionMission from '../components/VisionMission.jsx';
import AboutUs from '../components/AboutUs.jsx';
import BusinessServices from '../components/BusinessServices.jsx';
import Testimonials from '../components/Testimonials.jsx';
import SkillsExpertise from '../components/SkillsExpertise.jsx';
import CallToAction from '../components/CallToAction.jsx';
import LatestNews from '../components/LatestNews.jsx';
import KnowledgeSpot from '../components/KnowledgeSpot.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Clients from '../components/Clients.jsx';
import ContactUs from '../components/ContactUs.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <VisionMission />
      <AboutUs />
      <BusinessServices />
      <Testimonials />
      <SkillsExpertise />
      <CallToAction />
      <LatestNews />
      <KnowledgeSpot />
      <Newsletter />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
