"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ⬅️ loader state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // start loader

    const formDataToSend = {
      access_key: "ae4c0fc5-e654-4e51-9e2f-bedd17f1532e", // your Web3Forms key
      ...formData,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await res.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Try again later.");
    } finally {
      setIsLoading(false); // stop loader
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 py-16 px-4"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            We're here to help you on your journey to better health
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100 transform transition-all duration-300 hover:shadow-3xl space-y-6"
        >
          {/* Name Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Your Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500">
                <FaUser className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-700"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Your Email *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-700"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Your Message *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-6 text-blue-500">
                <FaComments className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us how we can help you..."
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-700 resize-none"
              />
            </div>
          </div>

          {/* Submit Button with Loader */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              <>
                Send Message
                <FaPaperPlane className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up z-50">
            <FaCheckCircle className="w-6 h-6" />
            <span className="font-semibold">
              Message sent successfully! We'll get back to you soon.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
