"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Fade, Slide } from "react-awesome-reveal"
import aboutHeroImage from "../../assets/img/about-hero.jpg"

const AboutHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    const aboutContent = document.getElementById("about-content")
    if (aboutContent) {
      aboutContent.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutHeroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-50" />
        <div className="absolute top-60 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <Slide direction="down" triggerOnce>
            <div className="inline-flex items-center mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </Slide>

          {/* Main Heading */}
          <Fade cascade triggerOnce>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-6 sm:mb-8">
              <span className="block text-white mb-2 drop-shadow-2xl">Discover</span>
              <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Nimantha Tours
              </span>
            </h1>
          </Fade>

          {/* Subtitle */}
          <Fade direction="up" delay={300} triggerOnce>
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed mb-4">
                Your trusted partner for <span className="text-teal-400 font-semibold">extraordinary journeys</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
                Crafting unforgettable experiences across Sri Lanka since 2010
              </p>
            </div>
          </Fade>

          {/* CTA Buttons */}
          <Fade direction="up" delay={600} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
              <button
                onClick={scrollToContent}
                className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-arrow-down-circle text-lg sm:text-xl group-hover:animate-bounce" />
                  <span className="text-base sm:text-lg">Learn Our Story</span>
                </span>
              </button>

              <a
                href="/booking"
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-calendar-check text-lg sm:text-xl group-hover:animate-pulse" />
                  <span className="text-base sm:text-lg">Plan Your Trip</span>
                </span>
              </a>
            </div>
          </Fade>

          {/* Stats */}
          <Fade delay={800} triggerOnce>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              {[
                {
                  number: "500+",
                  label: "Happy Travelers",
                  icon: "bi-people-fill",
                  color: "from-teal-400 to-teal-600",
                },
                { number: "50+", label: "Destinations", icon: "bi-geo-alt-fill", color: "from-blue-400 to-blue-600" },
                {
                  number: "10+",
                  label: "Years Experience",
                  icon: "bi-calendar-fill",
                  color: "from-purple-400 to-purple-600",
                },
                { number: "4.9", label: "Rating", icon: "bi-star-fill", color: "from-yellow-400 to-orange-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${stat.icon} text-white text-base sm:text-lg`} />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToContent}
          className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-teal-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-teal-400 transition-colors duration-300" />
          </div>
          <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
        </button>
      </div>
    </section>
  )
}

export default AboutHero
