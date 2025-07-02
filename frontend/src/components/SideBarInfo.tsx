import React from "react";
import sidebarImg from "../assets/img/img4.jpg";

const SidebarInfo = () => {
  return (
    <div className="w-full lg:w-1/3 bg-teal-100 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Book with Us?</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <i className="bi bi-check-circle-fill text-teal-500 text-lg mr-3"></i>
          Easy and secure booking process.
        </li>
        <li className="flex items-start">
          <i className="bi bi-check-circle-fill text-teal-500 text-lg mr-3"></i>
          Trusted by thousands of travelers.
        </li>
        <li className="flex items-start">
          <i className="bi bi-check-circle-fill text-teal-500 text-lg mr-3"></i>
          Expert guides to ensure memorable experiences.
        </li>
        <li className="flex items-start">
          <i className="bi bi-check-circle-fill text-teal-500 text-lg mr-3"></i>
          Personalized packages for your needs.
        </li>
      </ul>
      <div className="mt-8">
        <img
          src={sidebarImg}
          alt="Travel"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default SidebarInfo;
