"use client"

import React from "react"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"

interface ItineraryDetailProps {
  id: number
  day: string
  title: string
  description: string
  image: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  category: string
  price: string
  highlights: string[]
  included: string[]
}

const ItineraryDetail: React.FC<ItineraryDetailProps> = ({
  id,
  day,
  title,
  description,
  image,
  duration,
  difficulty,
  category,
  price,
  highlights,
  included,
}) => {
  const [activeSection, setActiveSection] = useState("overview")

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Challenging":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case "culture":
        return "bi-building"
      case "nature":
        return "bi-tree"
      case "wildlife":
        return "bi-binoculars"
      case "adventure":
        return "bi-mountain"
      default:
        return "bi-compass"
    }
  }

  const sections = [
    { id: "overview", label: "Overview", icon: "bi-info-circle" },
    { id: "details", label: "Details", icon: "bi-list-check" },
    { id: "booking", label: "Booking", icon: "bi-calendar-check" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
            <Fade direction="up" triggerOnce>
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full border border-white/30">
                    {day}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full border border-white/30">
                    {duration}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full border ${getDifficultyColor(difficulty)} bg-opacity-90`}
                  >
                    {difficulty}
                  </span>
                  <span className="bg-teal-500/90 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {price}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{title}</h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed">{description}</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "border-teal-500 text-teal-600 bg-teal-50/50"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-teal-300"
                }`}
              >
                <i className={`${section.icon} text-lg`}></i>
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview Section */}
              {activeSection === "overview" && (
                <Fade triggerOnce>
                  <div className="space-y-6 sm:space-y-8">
                    {/* Category and Description */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                          <i className={`${getCategoryIcon(category)} text-teal-600 text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
                            {category} Experience
                          </h3>
                          <p className="text-gray-600">Immersive {category} journey</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <i className="bi bi-star-fill text-yellow-500 mr-3"></i>
                        Experience Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                            <i className="bi bi-check-circle-fill text-teal-600"></i>
                            <span className="text-gray-800 font-medium text-sm sm:text-base">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              )}

              {/* Details Section */}
              {activeSection === "details" && (
                <Fade triggerOnce>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="bi bi-check2-square text-green-500 mr-3"></i>
                      What's Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {included.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <i className="bi bi-check-lg text-green-600"></i>
                          <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              )}

              {/* Booking Section */}
              {activeSection === "booking" && (
                <Fade triggerOnce>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="bi bi-calendar-check text-teal-600 mr-3"></i>
                      Book This Experience
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                        <div className="text-center mb-6">
                          <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{price}</div>
                          <div className="text-gray-600">per person</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="font-semibold text-gray-900">{duration}</div>
                            <div className="text-gray-600">Duration</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className={`font-semibold px-2 py-1 rounded ${getDifficultyColor(difficulty)}`}>
                              {difficulty}
                            </div>
                            <div className="text-gray-600 mt-1">Difficulty</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <a
                            href="/booking"
                            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl block text-sm sm:text-base"
                          >
                            Book This Experience
                          </a>
                          <a
                            href="/contactUs"
                            className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 block text-sm sm:text-base"
                          >
                            Ask Questions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Day</span>
                      <span className="font-semibold">{day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Difficulty</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(difficulty)}`}>
                        {difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold capitalize">{category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price</span>
                      <span className="font-bold text-teal-600">{price}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <i className="bi bi-telephone-fill text-teal-600"></i>
                      <span>+94 77 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="bi bi-envelope-fill text-teal-600"></i>
                      <span>info@srilankantours.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="bi bi-whatsapp text-green-600"></i>
                      <span>WhatsApp Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ItineraryDetail
