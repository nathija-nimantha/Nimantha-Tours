"use client"

import React from "react"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"

interface TourDetailProps {
  title: string
  heroImage: string
  description: string
  duration: string
  difficulty: string
  price: string
  highlights: string[]
  included: string[]
  gallery: string[]
  itinerary: {
    day: string
    title: string
    description: string
    activities: string[]
  }[]
  location: {
    province: string
    district: string
    coordinates: string
  }
  bestTime: string
  tips: string[]
}

const TourDetail: React.FC<TourDetailProps> = ({
  title,
  heroImage,
  description,
  duration,
  difficulty,
  price,
  highlights,
  included,
  gallery,
  itinerary,
  location,
  bestTime,
  tips,
}) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

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

  const tabs = [
    { id: "overview", label: "Overview", icon: "bi-info-circle" },
    { id: "itinerary", label: "Itinerary", icon: "bi-calendar-check" },
    { id: "gallery", label: "Gallery", icon: "bi-images" },
    { id: "location", label: "Location", icon: "bi-geo-alt" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
            <Fade direction="up" triggerOnce>
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full border border-white/30">
                    {duration}
                  </span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(difficulty)} bg-opacity-90`}
                  >
                    {difficulty}
                  </span>
                  <span className="bg-teal-500/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    From {price}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{title}</h1>
                <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">{description}</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-teal-500 text-teal-600 bg-teal-50/50"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-teal-300"
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <Fade triggerOnce>
                  <div className="space-y-8">
                    {/* Highlights */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <i className="bi bi-star-fill text-yellow-500 mr-3"></i>
                        Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                            <i className="bi bi-check-circle-fill text-teal-600"></i>
                            <span className="text-gray-800 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <i className="bi bi-check2-square text-green-500 mr-3"></i>
                        What's Included
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {included.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <i className="bi bi-check-lg text-green-600"></i>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <i className="bi bi-lightbulb-fill text-yellow-500 mr-3"></i>
                        Travel Tips
                      </h3>
                      <div className="space-y-3">
                        {tips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <i className="bi bi-arrow-right-circle-fill text-teal-600 mt-1"></i>
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              )}

              {/* Itinerary Tab */}
              {activeTab === "itinerary" && (
                <Fade triggerOnce>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <i className="bi bi-calendar-check text-teal-600 mr-3"></i>
                      Detailed Itinerary
                    </h3>
                    <div className="space-y-6">
                      {itinerary.map((day, index) => (
                        <div
                          key={index}
                          className="relative pl-8 pb-8 border-l-2 border-teal-200 last:border-l-0 last:pb-0"
                        >
                          <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                              {day.day}: {day.title}
                            </h4>
                            <p className="text-gray-600 mb-4">{day.description}</p>
                            <div className="space-y-2">
                              <h5 className="font-semibold text-gray-800">Activities:</h5>
                              <ul className="space-y-1">
                                {day.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <i className="bi bi-dot text-teal-600"></i>
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              )}

              {/* Gallery Tab */}
              {activeTab === "gallery" && (
                <Fade triggerOnce>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <i className="bi bi-images text-purple-600 mr-3"></i>
                      Photo Gallery
                    </h3>

                    {/* Main Image */}
                    <div className="mb-6">
                      <img
                        src={gallery[selectedImage] || "/placeholder.svg"}
                        alt={`${title} gallery ${selectedImage + 1}`}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                      />
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                      {gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                            selectedImage === index ? "ring-4 ring-teal-500 scale-105" : "hover:scale-105"
                          }`}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${title} thumbnail ${index + 1}`}
                            className="w-full h-16 sm:h-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </Fade>
              )}

              {/* Location Tab */}
              {activeTab === "location" && (
                <Fade triggerOnce>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <i className="bi bi-geo-alt-fill text-red-500 mr-3"></i>
                      Location & Best Time to Visit
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Location Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <i className="bi bi-map text-teal-600"></i>
                            <span>
                              <strong>Province:</strong> {location.province}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <i className="bi bi-pin-map text-teal-600"></i>
                            <span>
                              <strong>District:</strong> {location.district}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <i className="bi bi-geo text-teal-600"></i>
                            <span>
                              <strong>Coordinates:</strong> {location.coordinates}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Time to Visit</h4>
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <i className="bi bi-calendar-event text-orange-600 text-xl"></i>
                            <span className="text-gray-800 font-medium">{bestTime}</span>
                          </div>
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
                {/* Booking Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{price}</div>
                    <div className="text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-900">{duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Difficulty</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(difficulty)}`}
                      >
                        {difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="/booking"
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl block"
                    >
                      Book Now
                    </a>
                    <a
                      href="/contactUs"
                      className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 block"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <i className="bi bi-telephone-fill text-teal-600"></i>
                      <span>+94 77 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="bi bi-envelope-fill text-teal-600"></i>
                      <span>info@nimanthatours.com</span>
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

export default TourDetail
