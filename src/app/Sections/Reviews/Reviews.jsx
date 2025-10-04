"use client";
import { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Brian Hardy",
      role: "Web Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Outstanding service! The team exceeded all my expectations. Highly professional and dedicated.",
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Incredible experience from start to finish. The quality of work is simply unmatched.",
    },
    {
      id: 3,
      name: "Karis Smith",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Absolutely amazing! They delivered beyond what we imagined. Truly a game changer.",
    },
    {
      id: 4,
      name: "Nina Duncan",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Professional, creative, and efficient. Working with this team was a pleasure.",
    },
    {
      id: 5,
      name: "Alex Johnson",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Top-notch quality and excellent communication. Would definitely recommend to others.",
    },
    {
      id: 6,
      name: "Sarah Williams",
      role: "Business Analyst",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Exceptional work! They understood our vision perfectly and brought it to life beautifully.",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Fantastic results! The attention to detail and creativity is remarkable.",
    },
    {
      id: 8,
      name: "Emma Davis",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Very impressed with the professionalism and quality. They made the process seamless.",
    },
    {
      id: 9,
      name: "James Wilson",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Outstanding collaboration and results. They truly care about delivering excellence.",
    },
    {
      id: 10,
      name: "Olivia Taylor",
      role: "Brand Strategist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Superb experience! Their expertise and dedication made all the difference.",
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
