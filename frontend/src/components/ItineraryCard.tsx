import React from "react";
import { Fade } from "react-awesome-reveal";

interface ItineraryCardProps {
  day: string;
  title: string;
  description: string;
  image: string;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ day, title, description, image }) => {
  return (
    <Fade triggerOnce>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 left-2 bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {day}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Fade>
  );
};

export default ItineraryCard;
