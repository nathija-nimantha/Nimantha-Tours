import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-white hover:text-gray-400">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/memories" className="text-white hover:text-gray-400">
              Memories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
