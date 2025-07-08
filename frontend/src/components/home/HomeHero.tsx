import { Link } from "react-router-dom"
import galleImage from "../../assets/img/card-Galle.jpg"
import React from "react"

const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32 translate-x-16 sm:translate-x-24 lg:translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-50 translate-y-12 sm:translate-y-18 lg:translate-y-24 -translate-x-12 sm:-translate-x-18 lg:-translate-x-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 xl:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl group">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-tr-[60px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px] rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[120px] opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

              <img
                src={galleImage || "/placeholder.svg"}
                alt="Galle Fort - Historic Dutch colonial architecture"
                className="w-full h-auto rounded-tr-[60px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px] rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[120px] shadow-2xl transform transition-all duration-500 hover:scale-105 relative z-10 object-cover aspect-[4/5]"
                loading="lazy"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <i className="bi bi-geo-alt-fill text-white text-lg sm:text-xl lg:text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="animate-fadeInUp space-y-3 sm:space-y-4">
              <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full animate-bounce">
                Featured Destination
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Galle</span>
                <span className="block bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                  Day Tour
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Absorb the Sun, Sand, and Waters of South Sri Lanka. Discover the historic Galle Fort, pristine beaches,
                and colonial charm that makes this UNESCO World Heritage site truly magical.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Link
                to="/featuredTours"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[180px] text-center group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-compass-fill group-hover:animate-spin text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Explore More</span>
                </span>
              </Link>

              <Link
                to="/booking"
                className="w-full sm:w-auto bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[180px] text-center group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-calendar2-check-fill group-hover:animate-bounce text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Book This Tour</span>
                </span>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="pt-6 sm:pt-8">
              <div className="border-t border-gray-200 pt-6 sm:pt-8">
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Happy Travelers</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Destinations</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">10+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HomeHero }
