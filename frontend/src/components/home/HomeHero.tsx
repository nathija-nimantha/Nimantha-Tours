import { Link } from "react-router-dom"
import galleImage from "../../../src/assets/img/card-Galle.jpg"
import React from "react"

const HomeHero = () => {
  return (
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50 -translate-y-16 translate-x-16 sm:-translate-y-24 sm:translate-x-24 md:-translate-y-32 md:translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-50 translate-y-12 -translate-x-12 sm:translate-y-18 sm:-translate-x-18 md:translate-y-24 md:-translate-x-24"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl group">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-tr-[60px] sm:rounded-tr-[80px] md:rounded-tr-[100px] lg:rounded-tr-[120px] xl:rounded-tr-[150px] rounded-tl-[20px] sm:rounded-tl-[25px] md:rounded-tl-[30px] lg:rounded-tl-[40px] xl:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[25px] md:rounded-br-[30px] lg:rounded-br-[40px] xl:rounded-br-[50px] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[100px] lg:rounded-bl-[120px] xl:rounded-bl-[150px] opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

                <img
                    src={galleImage || "/placeholder.svg"}
                    alt="Galle Fort - Historic Dutch colonial architecture"
                    className="w-full h-auto rounded-tr-[60px] sm:rounded-tr-[80px] md:rounded-tr-[100px] lg:rounded-tr-[120px] xl:rounded-tr-[150px] rounded-tl-[20px] sm:rounded-tl-[25px] md:rounded-tl-[30px] lg:rounded-tl-[40px] xl:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[25px] md:rounded-br-[30px] lg:rounded-br-[40px] xl:rounded-br-[50px] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[100px] lg:rounded-bl-[120px] xl:rounded-bl-[150px] shadow-xl sm:shadow-2xl transform transition-all duration-500 hover:scale-105 relative z-10 object-cover"
                    style={{ aspectRatio: "4/3" }}
                    loading="lazy"
                />

                {/* Floating badge - responsive sizing */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg animate-pulse-custom">
                  <i className="bi bi-geo-alt-fill text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="animate-fadeInUp space-y-3 sm:space-y-4">
              <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full animate-bounce-custom">
                Featured Destination
              </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  <span className="block text-gray-900">Galle</span>
                  <span className="block bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                  Day Tour
                </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Absorb the Sun, Sand, and Waters of South Sri Lanka. Discover the historic Galle Fort, pristine beaches,
                  and colonial charm that makes this UNESCO World Heritage site truly magical.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start pt-2 sm:pt-4">
                <Link
                    to="/featuredTours"
                    className="btn-primary group w-full sm:w-auto min-w-[160px] sm:min-w-[180px] text-center text-sm sm:text-base"
                >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-compass-fill group-hover:animate-spin text-sm sm:text-base"></i>
                  <span>Explore More</span>
                </span>
                </Link>

                <Link
                    to="/booking"
                    className="btn-secondary group w-full sm:w-auto min-w-[160px] sm:min-w-[180px] text-center text-sm sm:text-base"
                >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-calendar2-check-fill group-hover:animate-bounce text-sm sm:text-base"></i>
                  <span>Book This Tour</span>
                </span>
                </Link>
              </div>

              {/* Stats Section - Fully responsive */}
              <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-8">
                <div className="border-t border-gray-200 pt-6 sm:pt-8">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    <div className="text-center lg:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-600 mb-1">500+</div>
                      <div className="text-xs sm:text-sm text-gray-500 leading-tight">Happy Travelers</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">50+</div>
                      <div className="text-xs sm:text-sm text-gray-500 leading-tight">Destinations</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-1">10+</div>
                      <div className="text-xs sm:text-sm text-gray-500 leading-tight">Years Experience</div>
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
