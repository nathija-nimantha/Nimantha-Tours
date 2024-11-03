import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              <i className="bi bi-house-fill mr-2"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-white hover:text-gray-400">
              <i className="bi bi-calendar-check mr-2"></i>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              <i className="bi bi-info-circle mr-2"></i>
              About
            </Link>
          </li>
          <li>
            <Link to="/memories" className="text-white hover:text-gray-400">
              <i className="bi bi-images mr-2"></i>
              Memories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
