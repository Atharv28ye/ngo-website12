import React from "react";
import { FaBook, FaHeartbeat, FaSeedling, FaHandsHelping } from "react-icons/fa";

const projects = [
  {
    icon: <FaBook />,
    title: "Education Drives",
    desc: "We organize tutoring programs and donate books to underserved communities.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Camps",
    desc: "Free medical checkups, vaccinations, and health awareness workshops.",
  },
  {
    icon: <FaSeedling />,
    title: "Sustainability",
    desc: "Tree plantations, clean-up drives, and recycling initiatives.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Women Empowerment",
    desc: "Skill training, micro-loans, and mentorship programs for women.",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="bg-white py-20 px-6 md:px-12 lg:px-24"
    aria-labelledby="projects-heading"
  >
    <div className="max-w-7xl mx-auto text-center">
      <h2
        id="projects-heading"
        className="text-5xl font-extrabold text-blue-600 mb-16"
      >
        Our Initiatives
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 cursor-pointer"
            tabIndex={0}
            role="article"
            aria-labelledby={`project-title-${i}`}
          >
            <div className="text-6xl text-blue-600 mb-6 drop-shadow-lg">{p.icon}</div>
            <h3
              id={`project-title-${i}`}
              className="text-3xl font-bold mb-4 text-gray-800"
            >
              {p.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
