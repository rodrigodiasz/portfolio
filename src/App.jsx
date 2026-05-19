import React from "react";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack"
// import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutSection />
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;