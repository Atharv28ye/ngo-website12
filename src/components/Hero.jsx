import React, { useEffect, useRef } from "react";
import heroImage from "../assets/hero.jpg";
import {
  FaArrowRight,
  FaHandsHelping,
  FaUsers,
  FaRegLightbulb,
} from "react-icons/fa";

const Hero = () => {
  // Parallax effect reference
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const offset = window.pageYOffset;
      imageRef.current.style.transform = `translateY(${offset * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-blue-50 to-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-50 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight animate-fade-in"
          >
            Empowering Communities
            <br className="hidden md:block" />
            for a Better Tomorrow
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-prose mx-auto md:mx-0 animate-slide-up-delay">
            Join our mission to uplift lives through education, healthcare, and community support.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 mt-8 animate-fade-in-delay-100">
            <div className="flex items-center space-x-4">
              <FaHandsHelping className="text-3xl text-blue-600 drop-shadow" />
              <span className="font-semibold text-gray-700">500+ Volunteers</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-3xl text-blue-600 drop-shadow" />
              <span className="font-semibold text-gray-700">1,200 Lives Impacted</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaRegLightbulb className="text-3xl text-blue-600 drop-shadow" />
              <span className="font-semibold text-gray-700">85 Projects</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 animate-slide-up-delay-200">
            <a
              href="#volunteer"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Become a Volunteer
              <FaArrowRight className="ml-4 text-xl" />
            </a>
          </div>
        </div>

        {/* Hero Image with Parallax */}
        <div className="flex-1 mb-12 md:mb-0 md:ml-16 overflow-hidden rounded-3xl shadow-2xl transform-gpu will-change-transform">
          <img
            src={heroImage}
            alt="Volunteers engaging with community members"
            ref={imageRef}
            className="w-full object-cover transition-transform duration-700 hover:scale-105"
            draggable={false}
          />
        </div>
      </div>

      {/* Keyframes Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fade-in-delay-100 {
          animation: fadeIn 1s ease forwards;
          animation-delay: 0.15s;
        }
        .animate-slide-up-delay {
          animation: fadeIn 1s ease forwards;
          animation-delay: 0.3s;
        }
        .animate-slide-up-delay-200 {
          animation: fadeIn 1.2s ease forwards;
          animation-delay: 0.45s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
