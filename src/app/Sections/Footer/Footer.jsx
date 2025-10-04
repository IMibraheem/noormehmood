"use client";
import Link from "next/link";
import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + or spaces)
    const phoneNumber = "923064002469"; // Example: Pakistan number
    const message =
      "Hello! I would like to inquire about your physiotherapy services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Noor Mahmood</h3>
            <p className="text-blue-200 leading-relaxed mb-4">
              Your trusted partner in rehabilitation and wellness. We provide
              expert physiotherapy services to help you recover, strengthen, and
              thrive.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-blue-200">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Health Street, Medical Plaza, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <FaPhone className="w-5 h-5 flex-shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <FaEnvelope className="w-5 h-5 flex-shrink-0" />
                <span>info@physiohealth.com</span>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="mt-4 bg-sky-500 hover:bg-sky-600 cursor-pointer shine overflow-hidden text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-full justify-center"
              >
                <FaWhatsapp className="w-6 h-6" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200">
          <p className="text-sm text-center md:text-left">
            © {currentYear} PhysioHealth. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button (Sticky) */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </button>
    </footer>
  );
};

export default Footer;
