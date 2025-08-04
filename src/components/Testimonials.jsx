import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonialData = [
  {
    text: "Volunteering with this NGO changed my life. The smiles I got in return were priceless.",
    author: "Priya Sharma",
    role: "Health Camp Volunteer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Teaching rural kids was an unforgettable experience. I learned as much as I taught.",
    author: "Rahul Verma",
    role: "Education Volunteer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Planting trees and seeing communities come together was inspiring. Highly recommend!",
    author: "Anita Singh",
    role: "Sustainability Volunteer",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24"
    aria-labelledby="testimonials-heading"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2
        id="testimonials-heading"
        className="text-5xl font-extrabold text-blue-600 mb-16"
      >
        What Our Volunteers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonialData.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
            tabIndex={0}
            role="article"
            aria-label={`Testimonial from ${t.author}, ${t.role}`}
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src={t.avatar}
                alt={`Photo of ${t.author}`}
                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-blue-200 shadow-md"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{t.author}</h3>
                <p className="text-sm text-gray-500 italic">{t.role}</p>
              </div>
            </div>
            <blockquote className="relative text-gray-700 italic leading-relaxed">
              <FaQuoteLeft className="absolute left-0 -top-3 text-blue-200 text-3xl" />
              <p className="mb-6">{t.text}</p>
              <FaQuoteRight className="absolute right-0 -bottom-3 text-blue-200 text-3xl" />
            </blockquote>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fadeIn 0.6s ease forwards;
      }
      .animate-fade-in:nth-child(1) {
        animation-delay: 0.1s;
      }
      .animate-fade-in:nth-child(2) {
        animation-delay: 0.3s;
      }
      .animate-fade-in:nth-child(3) {
        animation-delay: 0.5s;
      }
    `}</style>
  </section>
);

export default Testimonials;
