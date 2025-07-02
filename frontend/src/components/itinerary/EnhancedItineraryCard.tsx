"use client"

import React from "react"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"

interface EnhancedItineraryCardProps {
    day: string
    title: string
    description: string
    image: string
    duration: string
    highlights: string[]
    difficulty: "Easy" | "Moderate" | "Challenging"
    price?: string
    included?: string[]
}

const EnhancedItineraryCard: React.FC<EnhancedItineraryCardProps> = ({
                                                                         day,
                                                                         title,
                                                                         description,
                                                                         image,
                                                                         duration,
                                                                         highlights,
                                                                         difficulty,
                                                                         price,
                                                                         included = [],
                                                                     }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-800"
            case "Moderate":
                return "bg-yellow-100 text-yellow-800"
            case "Challenging":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bi-check-circle"
            case "Moderate":
                return "bi-exclamation-triangle"
            case "Challenging":
                return "bi-lightning"
            default:
                return "bi-info-circle"
        }
    }

    return (
        <Fade triggerOnce>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Day badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-custom">
                        {day}
                    </div>

                    {/* Difficulty badge */}
                    <div className="absolute top-4 right-4">
            <span
                className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 ${getDifficultyColor(difficulty)}`}
            >
              <i className={`${getDifficultyIcon(difficulty)} text-xs`}></i>
              <span>{difficulty}</span>
            </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="bi bi-clock mr-1"></i>
                        {duration}
                    </div>

                    {/* Price badge */}
                    {price && (
                        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {price}
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

                    {/* Highlights */}
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="bi bi-star text-yellow-500 mr-2"></i>
                            Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {highlights.slice(0, isExpanded ? highlights.length : 3).map((highlight, index) => (
                                <span
                                    key={index}
                                    className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full border border-teal-200"
                                >
                  {highlight}
                </span>
                            ))}
                            {highlights.length > 3 && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-teal-600 text-xs font-semibold hover:text-teal-700 transition-colors duration-300"
                                >
                                    {isExpanded ? "Show less" : `+${highlights.length - 3} more`}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Included items (if expanded) */}
                    {isExpanded && included.length > 0 && (
                        <Fade triggerOnce>
                            <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                                <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                                    <i className="bi bi-check-circle text-green-500 mr-2"></i>
                                    What's Included
                                </h4>
                                <ul className="space-y-1">
                                    {included.map((item, index) => (
                                        <li key={index} className="text-xs text-gray-600 flex items-center">
                                            <i className="bi bi-check text-green-500 mr-2 text-xs"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm"
                        >
                            <i className={`bi bi-${isExpanded ? "chevron-up" : "chevron-down"} mr-2`}></i>
                            {isExpanded ? "Less Details" : "More Details"}
                        </button>

                        <button className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm">
                            <i className="bi bi-calendar-check mr-2"></i>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default EnhancedItineraryCard
