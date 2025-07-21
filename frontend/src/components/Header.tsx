"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navItems = [
    { path: "/", label: "Home", icon: "bi-house-heart-fill" },
    { path: "/about", label: "About", icon: "bi-info-circle-fill" },
    { path: "/tours", label: "Tours", icon: "bi-compass-fill" },
    { path: "/itineraries", label: "Itineraries", icon: "bi-map-fill" },
    { path: "/memories", label: "Memories", icon: "bi-camera-reels-fill" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo Section - Responsive */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group hover:scale-105 transition-all duration-300 flex-shrink-0"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <i className="bi bi-geo-alt-fill text-white text-sm sm:text-lg lg:text-xl"></i>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Nimantha
              </span>
              <span className="text-xs sm:text-sm lg:text-sm text-teal-600 font-semibold -mt-1 hidden sm:block">
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 lg:px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 group text-sm lg:text-base ${
                  location.pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                <i className={`${item.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
                <span>{item.label}</span>
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-2 px-4 xl:px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm xl:text-base"
            >
              <i className="bi bi-calendar-check text-sm mr-1 xl:mr-2"></i>
              <span className="hidden xl:inline">Book Now</span>
              <span className="xl:hidden">Book</span>
            </Link>
            <Link
              to="/contactUs"
              className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-2 px-4 xl:px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm xl:text-base"
            >
              <i className="bi bi-chat-dots text-sm mr-1 xl:mr-2"></i>
              <span className="hidden xl:inline">Contact</span>
              <span className="xl:hidden">Chat</span>
            </Link>
          </div>

          {/* Mobile/Tablet Actions */}
          <div className="flex items-center space-x-2 xl:hidden">
            {/* Quick Contact Buttons - Responsive sizes */}
            <a
              href="tel:+94779024795"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 shadow-md"
              aria-label="Call us"
            >
              <i className="bi bi-telephone text-xs sm:text-sm"></i>
            </a>

            <a
              href="https://wa.me/94779024795"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 shadow-md"
              aria-label="WhatsApp us"
            >
              <i className="bi bi-whatsapp text-xs sm:text-sm"></i>
            </a>

            {/* Hamburger Menu Button */}
            <button
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex flex-col justify-center items-center">
                <span
                  className={`absolute block w-4 sm:w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute block w-4 sm:w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-4 sm:w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile/Tablet Navigation Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 space-y-1 sm:space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 text-base sm:text-lg ${
                  location.pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    location.pathname === item.path ? "bg-teal-100" : "bg-gray-100"
                  }`}
                >
                  <i className={`${item.icon} text-sm sm:text-base`}></i>
                </div>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Link
                to="/booking"
                className="block w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 text-center text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bi bi-calendar-check mr-2"></i>
                Book Your Adventure
              </Link>
              <Link
                to="/contactUs"
                className="block w-full bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 text-center text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bi bi-chat-dots mr-2"></i>
                Get in Touch
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="space-y-2 text-sm sm:text-base">
                <a
                  href="tel:+94779024795"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors duration-300 px-4 py-2 sm:py-3"
                >
                  <i className="bi bi-telephone text-teal-500 text-base"></i>
                  <span>(+94) 779 024 795</span>
                </a>
                <a
                  href="mailto:info@nimanthatours.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors duration-300 px-4 py-2 sm:py-3"
                >
                  <i className="bi bi-envelope text-teal-500 text-base"></i>
                  <span>info@nimanthatours.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-600 px-4 py-2 sm:py-3">
                  <i className="bi bi-shield-check text-green-500 text-base"></i>
                  <span>SLTDA Licensed Agency</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Quick Contact Bar (Desktop only, appears on scroll) */}
      {isScrolled && (
        <div className="hidden xl:block bg-gradient-to-r from-teal-600 to-blue-700 text-white py-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <a
                  href="tel:+94779024795"
                  className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
                >
                  <i className="bi bi-telephone text-xs"></i>
                  <span>(+94) 779 024 795</span>
                </a>
                <a
                  href="mailto:info@nimanthatours.com"
                  className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
                >
                  <i className="bi bi-envelope text-xs"></i>
                  <span>info@nimanthatours.com</span>
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <i className="bi bi-shield-check text-xs"></i>
                  <span>SLTDA Licensed</span>
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://wa.me/94779024795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  >
                    <i className="bi bi-whatsapp text-xs"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/nimanthatours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  >
                    <i className="bi bi-instagram text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export { Header }
