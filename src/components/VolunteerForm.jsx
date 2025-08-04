import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const VolunteerForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(data.email)) errs.email = "Valid email is required";
    if (data.message.trim().length < 20)
      errs.message = "Please enter at least 20 characters";
    return errs;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (submitted) setErrors(validate());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setData({ name: "", email: "", message: "" });
        alert("Thank you for volunteering! We will contact you soon.");
      } catch {
        setIsSubmitting(false);
        alert("Submission failed, please try again.");
      }
    }
  };

  return (
    <section
      id="volunteer"
      className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16"
      aria-labelledby="volunteer-heading"
    >
      <div className="max-w-lg mx-auto">
        <h2
          id="volunteer-heading"
          className="text-4xl font-extrabold text-center text-blue-600 mb-8"
        >
          Become a Volunteer
        </h2>

        {submitted && Object.keys(errors).length === 0 && !isSubmitting && (
          <div className="flex items-center bg-green-100 text-green-800 px-4 py-3 rounded mb-6" role="alert">
            <FaCheckCircle className="mr-2" />
            Thank you for signing up!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-2xl shadow-lg"
          noValidate
          aria-live="polite"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={data.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-400" : "border-gray-300"
              } px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-400" : "focus:ring-blue-500"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={data.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-400" : "border-gray-300"
              } px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-blue-500"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Why Do You Want to Volunteer?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share your motivation (min. 20 characters)"
              value={data.message}
              onChange={handleChange}
              rows="5"
              className={`w-full border ${
                errors.message ? "border-red-400" : "border-gray-300"
              } px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-400" : "focus:ring-blue-500"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
