"use client"

import React from "react"
import { Fade } from "react-awesome-reveal"

interface ItineraryFiltersProps {
    selectedDuration: string
    selectedDifficulty: string
    selectedCategory: string
    searchTerm: string
    onDurationChange: (duration: string) => void
    onDifficultyChange: (difficulty: string) => void
    onCategoryChange: (category: string) => void
    onSearchChange: (search: string) => void
}

const ItineraryFilters: React.FC<ItineraryFiltersProps> = ({
                                                               selectedDuration,
                                                               selectedDifficulty,
                                                               selectedCategory,
                                                               searchTerm,
                                                               onDurationChange,
                                                               onDifficultyChange,
                                                               onCategoryChange,
                                                               onSearchChange,
                                                           }) => {
    const durations = [
        { value: "all", label: "All Durations", icon: "bi-clock" },
        { value: "half-day", label: "Half Day", icon: "bi-sun" },
        { value: "full-day", label: "Full Day", icon: "bi-brightness-high" },
        { value: "multi-day", label: "Multi Day", icon: "bi-calendar-range" },
    ]

    const difficulties = [
        { value: "all", label: "All Levels", icon: "bi-list" },
        { value: "Easy", label: "Easy", icon: "bi-check-circle", color: "text-green-600" },
        { value: "Moderate", label: "Moderate", icon: "bi-exclamation-triangle", color: "text-yellow-600" },
        { value: "Challenging", label: "Challenging", icon: "bi-lightning", color: "text-red-600" },
    ]

    const categories = [
        { value: "all", label: "All Categories", icon: "bi-grid" },
        { value: "culture", label: "Cultural", icon: "bi-building" },
        { value: "nature", label: "Nature", icon: "bi-tree" },
        { value: "wildlife", label: "Wildlife", icon: "bi-binoculars" },
        { value: "adventure", label: "Adventure", icon: "bi-mountain" },
        { value: "beach", label: "Beach", icon: "bi-water" },
    ]

    return (
        <section className="py-8 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                <Fade triggerOnce>
                    <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                        {/* Search bar */}
                        <div className="mb-6">
                            <div className="relative max-w-md mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    value={searchTerm}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                />
                                <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>

                        {/* Filter buttons */}
                        <div className="space-y-6">
                            {/* Duration filters */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                    <i className="bi bi-clock text-teal-500 mr-2"></i>
                                    Duration
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {durations.map((duration) => (
                                        <button
                                            key={duration.value}
                                            onClick={() => onDurationChange(duration.value)}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                                selectedDuration === duration.value
                                                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200"
                                            }`}
                                        >
                                            <i className={`${duration.icon} text-sm`}></i>
                                            <span>{duration.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Difficulty filters */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                    <i className="bi bi-speedometer text-blue-500 mr-2"></i>
                                    Difficulty
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {difficulties.map((difficulty) => (
                                        <button
                                            key={difficulty.value}
                                            onClick={() => onDifficultyChange(difficulty.value)}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                                selectedDifficulty === difficulty.value
                                                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200"
                                            }`}
                                        >
                                            <i className={`${difficulty.icon} text-sm ${difficulty.color || ""}`}></i>
                                            <span>{difficulty.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Category filters */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                    <i className="bi bi-tags text-purple-500 mr-2"></i>
                                    Category
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.value}
                                            onClick={() => onCategoryChange(category.value)}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                                selectedCategory === category.value
                                                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200"
                                            }`}
                                        >
                                            <i className={`${category.icon} text-sm`}></i>
                                            <span>{category.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Clear filters */}
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => {
                                    onDurationChange("all")
                                    onDifficultyChange("all")
                                    onCategoryChange("all")
                                    onSearchChange("")
                                }}
                                className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors duration-300 flex items-center space-x-2 mx-auto"
                            >
                                <i className="bi bi-arrow-clockwise"></i>
                                <span>Clear All Filters</span>
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default ItineraryFilters
