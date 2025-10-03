import Image from "next/image";
import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image - 40% */}
        <div className="w-full md:w-2/5 flex justify-center">
          <Image
            src="/hero/doctor.jpg" // Replace with your image path in /public
            alt="Physiotherapist Noor Mehmood"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side Content - 60% */}
        <div className="w-full md:w-3/5">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Dedicated to Your Recovery
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900">Noor Mehmood</span>, a
            compassionate physiotherapist with{" "}
            <span className="text-cyan-500 font-semibold underline">
              over 2 years of professional experience
            </span>{" "}
            in musculoskeletal and neurological rehabilitation. I specialize in
            creating personalized treatment plans to help patients relieve pain,
            improve mobility, and restore strength. My mission is to support
            your journey to a healthier, more active lifestyle.
          </p>

          {/* Download CV Section */}
          <div className="flex items-center gap-3 mt-6">
            <FaArrowRight className="text-cyan-500 text-xl" />
            <a
              href="/Noor_Mehmood_CV.docx" // Place your CV in /public
              download
              className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-cyan-600 transition shine overflow-hidden"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
