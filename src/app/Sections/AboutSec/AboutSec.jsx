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
          <p className="text-gray-600  mt-4 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900">Noor Mehmood</span>,
            an HCPC-registered physiotherapist with a Master’s in Sports
            Rehabilitation and Soft Tissue Therapy from Middlesex University,
            London, and a Doctor of Physical Therapy degree. I have treated
            patients with a wide range of conditions, including fractures,
            cerebral palsy, pre- and post-operative ACL injuries, ankle sprains,
            scoliosis, frozen shoulder, sciatica, and spinal pain. Throughout my
            career, I have collaborated closely with doctors, nurses, and senior
            physiotherapists to provide patient-centred, evidence-based care
            that empowers individuals to regain mobility, function, and
            confidence. My practice combines manual therapy, functional exercise
            programmes, and patient education to ensure recovery is effective
            and sustainable. I have also contributed to education as a visiting
            lecturer, mentoring students in anatomy, rehabilitation, and
            clinical practice. I am passionate about making a meaningful
            difference in people’s lives through tailored, goal-oriented
            physiotherapy, and I thrive in environments that value
            collaboration, accountability, and professional growth.
          </p>

          {/* Download CV Section */}
          <div className="flex items-center gap-3 mt-6">
            <FaArrowRight className="text-cyan-500 text-xl" />
            <a
              href="/cv/Noor_Mehmood_CV.docx" // Place your CV in /public
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
