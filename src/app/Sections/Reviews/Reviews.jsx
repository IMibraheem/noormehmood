"use client";
import { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Brian Hardy",
      role: "Osteoarthritis Patient",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "After struggling with knee osteoarthritis for years, Noor’s therapy helped me regain mobility and reduce my pain. I can now walk comfortably again.",
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "Back Pain Patient",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "I suffered from chronic back pain for months. The personalized treatment plan worked wonders—my pain is almost gone and I feel stronger than ever.",
    },
    {
      id: 3,
      name: "Karis Smith",
      role: "Frozen Shoulder Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "My frozen shoulder was affecting my daily life. Thanks to Noor’s exercises and guidance, I regained full movement in just a few months.",
    },
    {
      id: 4,
      name: "Nina Duncan",
      role: "Mother of CP Child",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Noor worked with my child with cerebral palsy and the progress has been amazing. My child is more confident and independent now.",
    },
    {
      id: 5,
      name: "Alex Johnson",
      role: "Stroke Recovery Patient",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "After my stroke, I thought I’d never regain my strength. Noor’s rehabilitation program gave me hope and today I’m able to walk on my own again.",
    },
    {
      id: 6,
      name: "Sarah Williams",
      role: "Sciatica Patient",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "The sciatica pain in my leg was unbearable. Through targeted therapy sessions, I finally found relief and can sleep peacefully at night.",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Neck Pain Patient",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "My neck pain made it hard to work at a desk all day. Noor’s treatment plan and posture correction exercises have completely changed my life.",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = reviews.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-16 px-4"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            We Care About Our Customers
          </h2>
          <p className="text-xl text-gray-600">Experience Too</p>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-sky-400">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {review.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mb-4">{review.role}</p>

                {/* Review Text */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {review.review}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-sky-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full bg-sky-400 text-white transition-all duration-300 cursor-pointer shine overflow-hidden ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-sky-500 hover:shadow-lg "
              }`}
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "bg-sky-400 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`p-3 rounded-full bg-sky-400 text-white transition-all duration-300 cursor-pointer shine overflow-hidden ${
                currentIndex === maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-sky-500 hover:shadow-lg"
              }`}
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
