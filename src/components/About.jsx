import React, { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaHeartbeat,
  FaFemale,
  FaLeaf,
  FaUsers,
  FaHandsHelping,
  FaRegLightbulb,
} from "react-icons/fa";

const statsData = [
  { icon: <FaBookOpen />, label: "Students Educated", value: 1200 },
  { icon: <FaHeartbeat />, label: "Health Camps", value: 85 },
  { icon: <FaFemale />, label: "Women Empowered", value: 450 },
  { icon: <FaLeaf />, label: "Trees Planted", value: 3000 },
];

const features = [
  {
    icon: <FaBookOpen className="text-5xl text-blue-600 drop-shadow-lg" />,
    title: "Education",
    desc:
      "Scholarships, schools, and learning resources for underprivileged children.",
  },
  {
    icon: <FaHeartbeat className="text-5xl text-red-500 drop-shadow-lg" />,
    title: "Healthcare",
    desc: "Free health camps, vaccinations, and mobile clinics in remote areas.",
  },
  {
    icon: <FaFemale className="text-5xl text-pink-500 drop-shadow-lg" />,
    title: "Women Empowerment",
    desc:
      "Skill training, micro-loans, and leadership programs for women.",
  },
  {
    icon: <FaLeaf className="text-5xl text-green-500 drop-shadow-lg" />,
    title: "Sustainable Development",
    desc:
      "Tree plantations, clean-energy workshops, and eco-initiatives.",
  },
];

const About = () => {
  const [stats, setStats] = useState(
    statsData.map((s) => ({ ...s, current: 0 }))
  );

  useEffect(() => {
    statsData.forEach((stat, idx) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 60);
      const timer = setInterval(() => {
        start = Math.min(start + step, end);
        setStats((prev) => {
          const updated = [...prev];
          updated[idx].current = start;
          return updated;
        });
        if (start >= end) clearInterval(timer);
      }, 30);
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Blurred Shapes */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2
          id="about-heading"
          className="text-5xl font-extrabold text-blue-600 mb-10 leading-tight"
        >
          Who We Are
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          We are a non-profit organization dedicated to transforming
          communities through education, healthcare, women’s empowerment, and
          sustainable development — building a better future together.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated Impact Stats */}
        <div className="flex flex-wrap justify-center gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center max-w-xs">
              <div className="text-5xl font-extrabold text-blue-500 mb-2">
                {stat.current.toLocaleString()}+
              </div>
              <div className="flex justify-center items-center space-x-2 text-gray-700 text-lg font-semibold">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
