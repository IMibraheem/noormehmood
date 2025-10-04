import React from "react";
import Header from "./Sections/Header/Header";
import Hero from "./Sections/HeroSec/HeroSec";
import About from "./Sections/AboutSec/AboutSec";
import HealthcareServices from "./Sections/Service/HealthcareServices";
import Reviews from "./Sections/Reviews/Reviews";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HealthcareServices />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
