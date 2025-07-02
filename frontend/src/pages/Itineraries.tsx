"use client"

import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import EnhancedItineraryCard from "../components/itinerary/EnhancedItineraryCard"
import ItineraryFilters from "../components/itinerary/ItineraryFilters"
import { enhancedItineraries } from "../components/Itineraries/enhancedItinerariesData"
import itinerariesHeroImg from "../assets/img/img3.jpg"
import React from "react"

const Itineraries = () => {
  const navigate = useNavigate()
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItineraries = useMemo(() => {
    return enhancedItineraries.filter((itinerary) => {
      const matchesDuration = selectedDuration === "all" || itinerary.duration === selectedDuration
      const matchesDifficulty = selectedDifficulty === "all" || itinerary.difficulty === selectedDifficulty
      const matchesCategory = selectedCategory === "all" || itinerary.category === selectedCategory
      const matchesSearch =
          searchTerm === "" ||
          itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          itinerary.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          itinerary.highlights.some((highlight) => highlight.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesDuration && matchesDifficulty && matchesCategory && matchesSearch
    })
  }, [selectedDuration, selectedDifficulty, selectedCategory, searchTerm])

  const handleCardClick = (id: number) => {
    navigate(`/itinerary/${id}`)
  }

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
            className="relative h-[60vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${itinerariesHeroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>

          <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center text-white">
            <Fade cascade triggerOnce>
            <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-6 animate-bounce-custom">
              Plan Your Journey
            </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Discover</span>
                <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sri Lanka
              </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Explore our carefully crafted itineraries designed to showcase the best of Sri Lanka's culture, nature,
                and adventure
              </p>
            </Fade>
          </div>
        </section>

        {/* Filters */}
        <ItineraryFilters
            selectedDuration={selectedDuration}
            selectedDifficulty={selectedDifficulty}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onDurationChange={setSelectedDuration}
            onDifficultyChange={setSelectedDifficulty}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchTerm}
        />

        {/* Results Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-16">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <Fade direction="left" triggerOnce>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                  {filteredItineraries.length === enhancedItineraries.length
                      ? "All Itineraries"
                      : `${filteredItineraries.length} Itineraries Found`}
                </h2>
              </Fade>

              <Fade direction="right" triggerOnce>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>
                  Showing {filteredItineraries.length} of {enhancedItineraries.length} results
                </span>
                </div>
              </Fade>
            </div>

            {/* Itineraries Grid */}
            {filteredItineraries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredItineraries.map((itinerary, index) => (
                      <div
                          key={itinerary.id}
                          onClick={() => handleCardClick(itinerary.id)}
                          className="cursor-pointer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <EnhancedItineraryCard
                            day={itinerary.day}
                            title={itinerary.title}
                            description={itinerary.description}
                            image={itinerary.image}
                            duration={itinerary.duration}
                            highlights={itinerary.highlights}
                            difficulty={itinerary.difficulty}
                            price={itinerary.price}
                            included={itinerary.included}
                        />
                      </div>
                  ))}
                </div>
            ) : (
                <Fade triggerOnce>
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="bi bi-search text-gray-400 text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No itineraries found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                    <button
                        onClick={() => {
                          setSelectedDuration("all")
                          setSelectedDifficulty("all")
                          setSelectedCategory("all")
                          setSearchTerm("")
                        }}
                        className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </Fade>
            )}

            {/* Call to action */}
            <Fade delay={400} triggerOnce>
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Can't Find What You're Looking For?
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Let us create a custom itinerary tailored specifically to your interests and preferences
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/booking" className="btn-primary group">
                    <span className="flex items-center justify-center space-x-2">
                      <i className="bi bi-calendar-check group-hover:animate-bounce"></i>
                      <span>Book Custom Tour</span>
                    </span>
                    </a>
                    <a
                        href="/contactUs"
                        className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                    >
                    <span className="flex items-center justify-center space-x-2">
                      <i className="bi bi-chat-dots group-hover:animate-pulse"></i>
                      <span>Contact Us</span>
                    </span>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </div>
  )
}

export default Itineraries
