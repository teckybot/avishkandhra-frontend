import { useRef } from "react";
import Logos from "../Components/Logos";
import AvishkAndhraBanner from "../Components/Hero";
import About from "../Components/About";
import Formpage from "../Components/RegComponents/Formpage";
import WhoCanJoin from "../Components/WhoCanJoin";
import Opportunities from "../Components/Opportunities";
import CertificateSample from "../Components/Certificate";
import Footer from "../Components/Footer";
import AnimatedSection from "../Components/AnimatedSection";
import Navbar from "../Components/Navbar";

const Home = () => {
  const videoPageRef = useRef(null);

  return (
    <>
    
      <Navbar />
      <AnimatedSection><div id="home"><Logos /></div></AnimatedSection>
      <AnimatedSection><AvishkAndhraBanner /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><WhoCanJoin /></AnimatedSection>
      <AnimatedSection><Opportunities /></AnimatedSection>
      <AnimatedSection><CertificateSample /></AnimatedSection>
      <AnimatedSection><div id="registration"><Formpage /></div></AnimatedSection>
      <Footer />
    </>
  );
};

export default Home;
