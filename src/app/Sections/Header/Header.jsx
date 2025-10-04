"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact Me" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-blue-500 to-sky-400 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <FaStethoscope className="text-white text-2xl" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Noor Mehmood
            </h2>
            <h4 className="text-sm font-medium tracking-wide text-blue-500">
              Physiotherapist
            </h4>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative group font-medium transition-colors duration-300 ${
                activeSection === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 rounded-full ${
                  activeSection === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-blue-500 to-sky-400 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-gradient-to-br from-blue-50 to-white border-t border-blue-100 shadow-inner">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg font-medium py-4 px-6 border-b border-blue-100"
              style={{
                animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-blue-500 to-sky-400 text-white text-center py-4 mx-6 my-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
        </nav>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
