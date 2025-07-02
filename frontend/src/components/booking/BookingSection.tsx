import React from "react";

export const BookingSection = () => {
  return (
    <section className="py-12 bg-teal-500 text-white" id="booking">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Start Your Adventure Today
        </h2>
        <p className="mb-6">
          Reach out to us to plan your unforgettable journey.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md shadow-md w-full md:w-1/3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md shadow-md w-full md:w-1/3"
          />
          <button
            type="submit"
            className="bg-white text-teal-500 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};
