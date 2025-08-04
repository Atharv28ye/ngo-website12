import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Simulate subscription API call or validation
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 px-6 md:px-12 lg:px-24"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Top Section: Contact & Social */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Contact Info */}
        <div className="text-center sm:text-left space-y-4">
          <h4 className="text-2xl font-semibold mb-4">Stay Connected</h4>

          <p className="flex items-center justify-center sm:justify-start space-x-3">
            <FaEnvelope aria-hidden="true" className="text-lg" />
            <span className="sr-only">Email:</span>
            <a
              href="mailto:contact@ngo.org"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
            >
              contact@ngo.org
            </a>
          </p>

          <p className="flex items-center justify-center sm:justify-start space-x-3">
            <FaMapMarkerAlt aria-hidden="true" className="text-lg" />
            <span className="sr-only">Address:</span>
            123 Community Lane, City, Country
          </p>
        </div>

        {/* Social + Subscribe */}
        <div className="text-center sm:text-right space-y-6">
          <div className="space-x-4 mb-4">
            <a
              href="https://instagram.com/ngo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NGO on Instagram"
              className="inline-block p-3 rounded-full bg-white text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/company/ngo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NGO on LinkedIn"
              className="inline-block p-3 rounded-full bg-white text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Newsletter Signup */}
          <form
            onSubmit={handleSubscribe}
            className="flex justify-center sm:justify-end gap-2"
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-full text-black w-48 sm:w-64 focus:outline-none focus:ring-2 focus:ring-white"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 rounded-r-full px-6 py-2 text-black font-semibold flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white transition"
            >
              <span>Subscribe</span> <FaPaperPlane />
            </button>
          </form>

          {subscribed && (
            <p className="mt-2 text-green-300 font-semibold">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-blue-400 pt-6 text-sm text-center select-none">
        © {new Date().getFullYear()} NGO Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
