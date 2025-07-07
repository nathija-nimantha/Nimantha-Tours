import { Link } from "react-router-dom"
import galleImage from "../../assets/img/card-Galle.jpg"
import React from "react"

const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white section-padding overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-50 translate-y-24 -translate-x-24"></div>

      <div className="container-modern relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl group">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-tr-[120px] rounded-tl-[40px] rounded-br-[40px] rounded-bl-[120px] opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

              <img
                src={galleImage || "/placeholder.svg"}
                alt="Galle Fort - Historic Dutch colonial architecture"
                className="w-full h-auto rounded-tr-[120px] rounded-tl-[40px] rounded-br-[40px] rounded-bl-[120px] shadow-modern transform transition-all duration-500 hover:scale-105 relative z-10 object-cover aspect-photo"
                loading="lazy"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-custom">
                <i className="bi bi-geo-alt-fill text-white text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2 space-y-6">
            <div className="animate-fadeInUp space-y-4">
              <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full animate-bounce-custom">
                Featured Destination
              </span>

              <h1 className="heading-primary">
                <span className="block text-gray-900">Galle</span>
                <span className="block gradient-text">Day Tour</span>
              </h1>

              <p className="text-body text-gray-600 max-w-xl mx-auto lg:mx-0">
                Absorb the Sun, Sand, and Waters of South Sri Lanka. Discover the historic Galle Fort, pristine beaches,
                and colonial charm that makes this UNESCO World Heritage site truly magical.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/featuredTours" className="btn-primary group w-full sm:w-auto min-w-[180px] text-center">
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-compass-fill group-hover:animate-spin"></i>
                  <span>Explore More</span>
                </span>
              </Link>

              <Link to="/booking" className="btn-secondary group w-full sm:w-auto min-w-[180px] text-center">
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-calendar2-check-fill group-hover:animate-bounce"></i>
                  <span>Book This Tour</span>
                </span>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="pt-8">
              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-teal-600 mb-1">500+</div>
                    <div className="text-sm text-gray-500">Happy Travelers</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-sm text-gray-500">Destinations</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-orange-600 mb-1">10+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
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
