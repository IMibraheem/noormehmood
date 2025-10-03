import React from "react";
import Header from "./Sections/Header/Header";
import Hero from "./Sections/HeroSec/HeroSec";
import About from "./Sections/AboutSec/AboutSec";
import HealthcareServices from "./Sections/Service/HealthcareServices";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HealthcareServices />
    </>
  );
};

export default page;
