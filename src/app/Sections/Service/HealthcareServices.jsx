import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HealthcareServices() {
  const services = [
    {
      title: "Osteoarthritis",
      description:
        "Comprehensive treatment for joint pain and mobility improvement with specialized therapy programs.",
      image: "/service/OSTEOARTHRITIS.png",
    },
    {
      title: "Back Pain",
      description:
        "Expert care for chronic and acute back pain through evidence-based rehabilitation techniques.",
      image: "/service/backpain.png",
    },
    {
      title: "Frozen Shoulder",
      description:
        "Specialized therapy to restore shoulder mobility and reduce pain with targeted exercises.",
      image: "/service/SHOULDER.png",
    },
    {
      title: "Cerebral Palsy (CP)",
      description:
        "Tailored rehabilitation programs to enhance motor skills and promote independence.",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    },
    {
      title: "Stroke Recovery",
      description:
        "Comprehensive stroke rehabilitation focused on regaining strength and functional abilities.",
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    },
    {
      title: "Sciatica",
      description:
        "Effective treatment for sciatic nerve pain through manual therapy and therapeutic exercises.",
      image: "/service/SCIATICA.png",
    },
    {
      title: "Neck Pain",
      description:
        "Relief from neck pain and stiffness with personalized treatment plans and postural correction.",
      image: "/service/PAIN.png",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-white to-sky-50"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert care and personalized treatment plans for a wide range of
            conditions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Button */}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-sky-500/20 rounded-full blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        {/* <div className="mt-16 text-center bg-sky-500 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-sky-50 mb-6 max-w-2xl mx-auto">
            Our experienced team is here to help you achieve your health goals
            with personalized care
          </p>
          <Link
            href={"#contact"}
            className="bg-white text-sky-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Book a Consultation
          </Link>
        </div> */}
      </div>
    </section>
  );
}
