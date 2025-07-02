import React from "react";

type CardProps = {
    title: string;
    imgSrc: string;
    description: string;
    link: string;
};

const Card = ({ title, imgSrc, description, link }: CardProps) => {
    return (
        <div className="snap-start flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a
                    href={link}
                    className="text-teal-500 hover:underline flex items-center"
                >
                    Learn More <i className="bi bi-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    );
};

export default Card;
