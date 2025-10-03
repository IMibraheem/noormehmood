"use client";
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-white text-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 ">
        {/* Left Content */}
        <div className="flex-1  space-y-6 ">
          <p className="text-sky-500 font-semibold tracking-wide uppercase">
            Welcome to Better Health
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Expert Physiotherapy Care for{" "}
            <span className="text-sky-500 underline">Your Recovery</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            I’m{" "}
            <span className="font-semibold text-gray-900">Noor Mehmood</span>, a
            professional physiotherapist with{" "}
            <span className="text-sky-500 font-semibold underline">
              2 years of experience{" "}
            </span>
            helping patients recover mobility, reduce pain, and restore
            strength.
          </p>

          {/* Icons + Button */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://wa.me/923064002469"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition cursor-pointer shine overflow-hidden"
            >
              <FaWhatsapp size={22} className="text-white" />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition cursor-pointer shine overflow-hidden"
            >
              <FaEnvelope size={22} className="text-white" />
            </a>

            <button className="frutiger-button btn-bounce animate-slide-in shine overflow-hidden">
              <span className="inner">
                <span className="text ">Let’s Connect</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/hero/doctor.jpg" // Replace with your image path in /public
            alt="Physiotherapy session"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
