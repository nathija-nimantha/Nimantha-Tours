import { Fade, Zoom, Slide } from "react-awesome-reveal"
import bookingImage from "../../assets/img/booking-hero.jpg"
import React from "react"

const BookingHero = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[70vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${bookingImage})`,
            }}
        >
            {/* Animated overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>

            {/* Floating particles */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                <div
                    className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                    style={{ animationDelay: "3s" }}
                ></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <Slide direction="down" triggerOnce>
            <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-bounce-custom">
              Start Your Journey
            </span>
                    </Slide>

                    <Fade cascade triggerOnce>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="block">Plan Your</span>
                            <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Dream Journey
              </span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed opacity-90 max-w-2xl mx-auto">
                            Let us help you create unforgettable memories with personalized tours, expert guides, and seamless booking
                            experience across beautiful Sri Lanka.
                        </p>
                    </Fade>

                    <Zoom triggerOnce>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <a
                                href="#booking-form"
                                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-w-[180px]"
                            >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-calendar-check text-lg group-hover:animate-bounce"></i>
                  <span>Start Booking</span>
                </span>
                            </a>

                            <a
                                href="/featuredTours"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-w-[180px]"
                            >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-compass text-lg group-hover:animate-spin"></i>
                  <span>Explore Tours</span>
                </span>
                            </a>
                        </div>
                    </Zoom>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-teal-400 transition-colors duration-300 cursor-pointer">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse hover:bg-teal-400 transition-colors duration-300"></div>
                </div>
                <p className="text-xs mt-2 opacity-75 text-center text-white">Scroll Down</p>
            </div>
        </section>
    )
}

export default BookingHero
