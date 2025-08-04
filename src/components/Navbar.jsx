import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Volunteer", to: "/volunteer" },
  ];

  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition"
        >
          NGO Connect
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className={`relative py-2 hover:text-blue-600 transition ${
                location.pathname === to
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {name}
              {location.pathname === to && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-md" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-3 py-6 text-center">
            {navItems.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-lg hover:text-blue-600 transition ${
                    location.pathname === to
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
