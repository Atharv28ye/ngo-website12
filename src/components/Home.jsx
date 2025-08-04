import React, { useEffect, useRef } from 'react';
import { FaHandsHelping, FaUsers, FaRegLightbulb } from 'react-icons/fa';
import bannerImg from "../assets/banner.jpg";

// Simple counter animation hook
function useCountUp(end, duration = 1200) {
  const ref = useRef();
  useEffect(() => {
    let frame, start, progress;
    const el = ref.current;
    if (!el) return;
    let current = 0;
    function animate(ts) {
      if (!start) start = ts;
      progress = ts - start;
      current = Math.min(Math.round((end * progress) / duration), end);
      el.textContent = current.toLocaleString();
      if (progress < duration) frame = requestAnimationFrame(animate);
      else el.textContent = end.toLocaleString();
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return ref;
}

const Home = () => {
  const livesRef = useCountUp(1200);
  const volunteersRef = useCountUp(500, 1400);
  const initiativesRef = useCountUp(85, 1000);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden"
      aria-labelledby="home-heading"
    >
      {/* Decorative Animated SVG Blobs */}
      <svg
        className="absolute -top-16 -left-24 w-[340px] h-[340px] opacity-40 blur-2xl animate-pulse pointer-events-none"
        viewBox="0 0 340 340"
        fill="none"
      >
        <circle cx="170" cy="170" r="170" fill="#93c5fd" />
      </svg>
      <svg
        className="absolute -bottom-20 -right-32 w-[450px] h-[450px] opacity-30 blur-3xl animate-blob animation-delay-2000 pointer-events-none"
        viewBox="0 0 450 450"
        fill="none"
      >
        <circle cx="225" cy="225" r="225" fill="#bae6fd" />
      </svg>

      <div className="relative max-w-6xl mx-auto text-center flex flex-col gap-14">
        <div>
          <h1
            id="home-heading"
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-400 animate-in fade-in"
          >
            Welcome to <span className="">NGO Connect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-700 animate-in slide-in-up">
            We strive to make a difference in the lives of those who need it the most.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-in fade-in delay-200">
            <a
              href="#volunteer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition tracking-wide font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <FaHandsHelping className="mr-2 text-2xl" />
              Volunteer with Us
            </a>
            <a
              href="#about"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 underline-offset-4 underline transition font-medium self-center text-lg"
            >
              <span>Learn More About Us</span>
              <FaRegLightbulb className="ml-2 text-xl" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with Parallax/Reveal */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:scale-[1.03] group transition-transform">
            <img
              src={bannerImg}
              alt="Volunteers helping community"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              draggable="false"
            />
            {/* Parallax Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-20 transition"></div>
          </div>
          {/* Animated Stats */}
          <div className="space-y-8 text-left px-2">
            <div className="flex items-center space-x-5">
              <FaUsers className="text-4xl text-blue-500 drop-shadow" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-gray-800 tracking-tight">
                  <span ref={livesRef} />+ Lives Impacted
                </h3>
                <p className="text-blue-700 font-medium">and still counting</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <FaHandsHelping className="text-4xl text-cyan-600" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-gray-800 tracking-tight">
                  <span ref={volunteersRef} />+ Volunteers
                </h3>
                <p className="text-blue-700 font-medium">driving change</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <FaRegLightbulb className="text-4xl text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-gray-800 tracking-tight">
                  <span ref={initiativesRef} />+ Initiatives
                </h3>
                <p className="text-blue-700 font-medium">across communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
