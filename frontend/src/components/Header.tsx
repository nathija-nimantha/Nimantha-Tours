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
    { path: "/featuredTours", label: "Tours", icon: "bi-compass-fill" },
    { path: "/itineraries", label: "Itineraries", icon: "bi-map-fill" },
    { path: "/memories", label: "Memories", icon: "bi-camera-reels-fill" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-modern border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300 flex-shrink-0"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <i className="bi bi-geo-alt-fill text-white text-lg lg:text-xl"></i>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Nimantha
              </span>
              <span className="text-xs lg:text-sm text-teal-600 font-semibold -mt-1">Tours & Travels</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 group ${
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

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Link to="/booking" className="btn-primary">
              <i className="bi bi-calendar-check text-sm mr-2"></i>
              Book Now
            </Link>
            <Link to="/contactUs" className="btn-secondary">
              <i className="bi bi-chat-dots text-sm mr-2"></i>
              Contact
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+94779024795"
              className="w-9 h-9 rounded-lg bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 shadow-md"
              aria-label="Call us"
            >
              <i className="bi bi-telephone text-sm"></i>
            </a>

            <a
              href="https://wa.me/94779024795"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 shadow-md"
              aria-label="WhatsApp us"
            >
              <i className="bi bi-whatsapp text-sm"></i>
            </a>

            <button
              className="relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute block w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  location.pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    location.pathname === item.path ? "bg-teal-100" : "bg-gray-100"
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                </div>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Link to="/booking" className="block w-full btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                <i className="bi bi-calendar-check mr-2"></i>
                Book Your Adventure
              </Link>
              <Link
                to="/contactUs"
                className="block w-full btn-secondary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bi bi-chat-dots mr-2"></i>
                Get in Touch
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+94779024795"
                  className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 px-4 py-2"
                >
                  <i className="bi bi-telephone text-teal-500"></i>
                  <span>(+94) 779 024 795</span>
                </a>
                <a
                  href="mailto:info@nimanthatours.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 px-4 py-2"
                >
                  <i className="bi bi-envelope text-teal-500"></i>
                  <span>info@nimanthatours.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-600 px-4 py-2">
                  <i className="bi bi-shield-check text-green-500"></i>
                  <span>SLTDA Licensed Agency</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Quick Contact Bar (Desktop only, appears on scroll) */}
      {isScrolled && (
        <div className="hidden lg:block bg-gradient-to-r from-teal-600 to-blue-700 text-white py-1">
          <div className="container-modern">
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
