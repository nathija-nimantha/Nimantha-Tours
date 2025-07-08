"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

interface HeroSectionProps {
  backgroundImage: string
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = backgroundImage
  }, [backgroundImage])

  const scrollToContent = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Animated particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center text-white max-w-6xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block animate-fadeInUp">Welcome to</span>
            <span
              className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              Nimantha Tours & Travels
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-fadeInUp opacity-90 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ animationDelay: "0.6s" }}
          >
            Explore the beauty of Sri Lanka with us. Your dream journey starts here with unforgettable experiences and
            memories that last a lifetime.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fadeInUp px-4"
            style={{ animationDelay: "0.9s" }}
          >
            <Link
              to="/booking"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] text-center group"
            >
              <span className="flex items-center justify-center space-x-2">
                <i className="bi bi-calendar-check text-lg group-hover:animate-bounce"></i>
                <span className="text-sm sm:text-base">Book Your Adventure</span>
              </span>
            </Link>

            <Link
              to="/featuredTours"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] text-center group"
            >
              <span className="flex items-center justify-center space-x-2">
                <i className="bi bi-compass text-lg group-hover:animate-spin"></i>
                <span className="text-sm sm:text-base">Explore Tours</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
        onClick={scrollToContent}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToContent()
          }
        }}
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-teal-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse hover:bg-teal-400 transition-colors duration-300"></div>
        </div>
        <p className="text-xs mt-2 opacity-75 text-center">Scroll Down</p>
      </div>
    </section>
  )
}

export { HeroSection }
