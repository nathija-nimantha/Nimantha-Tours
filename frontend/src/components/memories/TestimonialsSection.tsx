"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import type { JSX } from "react/jsx-runtime"

interface Testimonial {
    id: number
    name: string
    country: string
    rating: number
    text: string
    image: string
    tour: string
    date: string
    avatar: string
    location: string
}

const TestimonialsSection: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            country: "United Kingdom",
            rating: 5,
            text: "Nimantha Tours made our Sri Lankan adventure absolutely unforgettable! The attention to detail and personalized service exceeded all our expectations. Our guide was knowledgeable and passionate about sharing the beauty of Sri Lanka.",
            image: "/src/assets/img/card-Sigiriya.jpg",
            tour: "10-Day Cultural & Wildlife Tour",
            date: "March 2024",
            avatar: "SJ",
            location: "London, UK",
        },
        {
            id: 2,
            name: "Michael Chen",
            country: "Australia",
            rating: 5,
            text: "From the moment we landed until our departure, everything was perfectly organized. The wildlife safari at Yala was incredible, and climbing Sigiriya was a once-in-a-lifetime experience. Highly recommended!",
            image: "/src/assets/img/card-Yala.jpg",
            tour: "Adventure & Nature Package",
            date: "February 2024",
            avatar: "MC",
            location: "Sydney, Australia",
        },
        {
            id: 3,
            name: "Emma & David Wilson",
            country: "Canada",
            rating: 5,
            text: "Our honeymoon in Sri Lanka was magical thanks to Nimantha Tours. Every detail was taken care of, from romantic dinners to breathtaking sunset views. The tea plantation visit in Ella was absolutely stunning!",
            image: "/src/assets/img/card-Ella.jpg",
            tour: "Romantic Honeymoon Package",
            date: "January 2024",
            avatar: "EW",
            location: "Toronto, Canada",
        },
        {
            id: 4,
            name: "Hans Mueller",
            country: "Germany",
            rating: 5,
            text: "As a solo traveler, I felt completely safe and well-cared for throughout my journey. The cultural insights provided by my guide enriched my understanding of Sri Lankan history and traditions immensely.",
            image: "/src/assets/img/card-Kandy.jpg",
            tour: "Solo Cultural Discovery",
            date: "December 2023",
            avatar: "HM",
            location: "Berlin, Germany",
        },
        {
            id: 5,
            name: "The Rodriguez Family",
            country: "United States",
            rating: 4,
            text: "Traveling with kids can be challenging, but Nimantha Tours made it seamless. The itinerary was perfectly paced for our family, and our children still talk about the elephant encounter at Pinnawala!",
            image: "/src/assets/img/card-Galle.jpg",
            tour: "Family Adventure Package",
            date: "November 2023",
            avatar: "RF",
            location: "California, USA",
        },
    ]

    const changeTestimonial = (newIndex: number) => {
        if (newIndex === currentTestimonial || isTransitioning) return

        setIsTransitioning(true)

        setTimeout(() => {
            setCurrentTestimonial(newIndex)
            setTimeout(() => {
                setIsTransitioning(false)
            }, 50)
        }, 400)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentTestimonial + 1) % testimonials.length
            changeTestimonial(nextIndex)
        }, 7000)

        return () => clearInterval(interval)
    }, [currentTestimonial, testimonials.length])

    const renderStars = (rating: number): JSX.Element[] => {
        return Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`bi bi-star${index < rating ? "-fill" : ""} text-yellow-400 text-lg`}></i>
        ))
    }

    const currentTest = testimonials[currentTestimonial]

    return (
        <section className="testimonials-section py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Enhanced Background Elements - Optimized for mobile */}
            <div className="absolute inset-0 opacity-30 sm:opacity-40">
                <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-teal-200/30 to-blue-300/30 rounded-full blur-2xl sm:blur-3xl animate-pulse-custom"></div>
                <div
                    className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-purple-200/30 to-pink-300/30 rounded-full blur-2xl sm:blur-3xl animate-pulse-custom"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/4 sm:left-1/3 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-orange-200/20 to-yellow-300/20 rounded-full blur-xl sm:blur-2xl animate-bounce-custom"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                {/* Enhanced Header - Mobile Optimized */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <Fade triggerOnce>
                        <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg animate-bounce-custom">
                            <i className="bi bi-chat-heart mr-2 text-sm"></i>
                            What Our Travelers Say
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
                            <span className="block text-gray-900 mb-2">Real Stories from</span>
                            <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Happy Travelers
              </span>
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-6">
                            Discover why travelers from around the world choose Nimantha Tours for their Sri Lankan adventures
                        </p>
                    </Fade>
                </div>

                {/* Redesigned Testimonial Layout - Mobile First with Card Stack Design */}
                <div className="max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16">
                    <div className="relative min-h-[550px] sm:min-h-[600px] lg:min-h-[500px]">
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                                isTransitioning ? "opacity-0 translate-y-8 sm:translate-y-12 scale-95" : "opacity-100 translate-y-0 scale-100"
                            }`}
                        >
                            {/* Mobile: Single Column Card Stack Layout */}
                            <div className="block lg:hidden">
                                {/* Mobile Testimonial Card */}
                                <div className="testimonial-mobile-card bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden border border-gray-100 mb-6">
                                    {/* Mobile Header with Avatar and Rating */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                {currentTest.avatar}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900">{currentTest.name}</h4>
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <i className="bi bi-geo-alt text-teal-500 mr-1"></i>
                                                    {currentTest.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            {renderStars(currentTest.rating)}
                                        </div>
                                    </div>

                                    {/* Quote and Testimonial Text */}
                                    <div className="mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 transform -rotate-3">
                                            <i className="bi bi-quote text-white text-xl"></i>
                                        </div>
                                        <blockquote className="text-lg text-gray-700 leading-relaxed font-medium italic">
                                            "{currentTest.text}"
                                        </blockquote>
                                    </div>

                                    {/* Tour Info Card */}
                                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-4 border border-teal-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Tour Package</h5>
                                                <p className="text-gray-600 text-sm">{currentTest.tour}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500 mb-1">{currentTest.date}</p>
                                                <div className="w-10 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md flex items-center justify-center text-xs font-bold text-gray-600">
                                                    {currentTest.country.slice(0, 2).toUpperCase()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-100/30 to-blue-100/30 rounded-full -translate-y-10 translate-x-10"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full translate-y-8 -translate-x-8"></div>
                                </div>

                                {/* Mobile Image Card */}
                                <div className="mobile-image-card relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl group">
                                    <img
                                        src={currentTest.image || "/placeholder.svg"}
                                        alt={`${currentTest.tour} experience`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Verified Badge */}
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-gray-800">Verified Experience</span>
                                        </div>
                                    </div>

                                    {/* Rating overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
                                            <div className="flex items-center justify-between text-white">
                                                <span className="text-sm font-medium">Rating</span>
                                                <div className="flex items-center space-x-1">
                                                    <span className="text-lg font-bold">{currentTest.rating}.0</span>
                                                    <i className="bi bi-star-fill text-yellow-400"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop: Original Grid Layout */}
                            <div className="hidden lg:grid lg:grid-cols-12 gap-12 h-full">
                                {/* Left Side - Image & Tour Info */}
                                <div className="lg:col-span-5 relative">
                                    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={currentTest.image || "/placeholder.svg"}
                                            alt={`${currentTest.tour} experience`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                        {/* Tour Badge */}
                                        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-semibold text-gray-800">Verified Review</span>
                                            </div>
                                        </div>

                                        {/* Tour Info Overlay */}
                                        <div className="absolute bottom-6 left-6 right-6 text-white">
                                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                                <h4 className="text-xl font-bold mb-2">{currentTest.tour}</h4>
                                                <div className="flex items-center justify-between text-sm opacity-90">
                          <span className="flex items-center space-x-2">
                            <i className="bi bi-calendar3"></i>
                            <span>{currentTest.date}</span>
                          </span>
                                                    <span className="flex items-center space-x-2">
                            <i className="bi bi-geo-alt"></i>
                            <span>Sri Lanka</span>
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Testimonial Content */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <div className="testimonial-card bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden border border-gray-100">
                                        {/* Decorative Elements */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-100/50 to-blue-100/50 rounded-full -translate-y-16 translate-x-16"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full translate-y-12 -translate-x-12"></div>

                                        <div className="relative z-10">
                                            {/* Quote Icon */}
                                            <div className="mb-8">
                                                <div className="w-18 h-18 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                                    <i className="bi bi-quote text-white text-3xl"></i>
                                                </div>
                                            </div>

                                            {/* Rating Stars */}
                                            <div className="flex items-center space-x-1 mb-6">
                                                {renderStars(currentTest.rating)}
                                                <span className="ml-3 text-xl font-bold text-gray-700">{currentTest.rating}.0</span>
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                                                "{currentTest.text}"
                                            </blockquote>

                                            {/* Customer Profile */}
                                            <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                                                {/* Avatar */}
                                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                                                    {currentTest.avatar}
                                                </div>

                                                {/* Customer Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{currentTest.name}</h4>
                                                    <p className="text-base text-gray-600 flex items-center space-x-2">
                                                        <i className="bi bi-geo-alt text-teal-500 flex-shrink-0"></i>
                                                        <span>{currentTest.location}</span>
                                                    </p>
                                                </div>

                                                {/* Country Flag Placeholder */}
                                                <div className="w-12 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-xs font-bold text-gray-600 shadow-md flex-shrink-0">
                                                    {currentTest.country.slice(0, 2).toUpperCase()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Navigation - Mobile Optimized with Swipe Indicator */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10 sm:mb-12 lg:mb-16">
                    {/* Mobile Swipe Indicator */}
                    <div className="block lg:hidden mb-4 sm:mb-0">
                        <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                            <i className="bi bi-arrow-left"></i>
                            <span>Swipe or tap to navigate</span>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeTestimonial(index)}
                                disabled={isTransitioning}
                                className={`relative transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed ${
                                    index === currentTestimonial
                                        ? "w-12 h-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full shadow-lg"
                                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            >
                                {index === currentTestimonial && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => changeTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                            disabled={isTransitioning}
                            className="w-14 h-14 bg-white hover:bg-gray-50 rounded-2xl shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
                            aria-label="Previous testimonial"
                        >
                            <i className="bi bi-chevron-left text-xl"></i>
                        </button>
                        <button
                            onClick={() => changeTestimonial((currentTestimonial + 1) % testimonials.length)}
                            disabled={isTransitioning}
                            className="w-14 h-14 bg-white hover:bg-gray-50 rounded-2xl shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
                            aria-label="Next testimonial"
                        >
                            <i className="bi bi-chevron-right text-xl"></i>
                        </button>
                    </div>
                </div>

                {/* Enhanced Stats Grid - Mobile Optimized & Bigger */}
                <Fade triggerOnce>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
                        {[
                            {
                                icon: "bi-people-fill",
                                value: "500+",
                                label: "Happy Travelers",
                                colors: "from-teal-500 to-blue-600",
                                description: "Satisfied customers worldwide",
                            },
                            {
                                icon: "bi-star-fill",
                                value: "4.9",
                                label: "Average Rating",
                                colors: "from-green-500 to-teal-600",
                                description: "Based on verified reviews",
                            },
                            {
                                icon: "bi-globe",
                                value: "25+",
                                label: "Countries Served",
                                colors: "from-blue-500 to-purple-600",
                                description: "Global reach and trust",
                            },
                            {
                                icon: "bi-award-fill",
                                value: "10+",
                                label: "Years Experience",
                                colors: "from-orange-500 to-red-600",
                                description: "Proven track record",
                            },
                        ].map(({ icon, value, label, colors, description }, idx) => (
                            <div
                                key={idx}
                                className="group text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div
                                    className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${colors} rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                                >
                                    <i className={`bi ${icon} text-white text-2xl sm:text-3xl`}></i>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{value}</div>
                                <div className="text-base sm:text-lg font-semibold text-gray-700 mb-2">{label}</div>
                                <div className="text-sm text-gray-500">{description}</div>
                            </div>
                        ))}
                    </div>
                </Fade>

                {/* Enhanced Call To Action - Mobile Optimized */}
                <Fade delay={400} triggerOnce>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-teal-50 via-white to-blue-50 rounded-3xl p-8 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-gray-200 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500 to-blue-600 transform rotate-12 scale-150"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <i className="bi bi-heart-fill text-white text-3xl"></i>
                                </div>

                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Ready to Create Your Own Story?
                                </h3>
                                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                                    Join our community of satisfied travelers and experience the magic of Sri Lanka with personalized
                                    tours crafted just for you
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <a
                                        href="/booking"
                                        className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto sm:min-w-[200px]"
                                    >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-calendar-check text-xl group-hover:animate-bounce"></i>
                      <span className="text-lg">Book Your Tour</span>
                    </span>
                                    </a>
                                    <a
                                        href="/contactUs"
                                        className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-4 px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto sm:min-w-[200px]"
                                    >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-chat-dots text-xl group-hover:animate-pulse"></i>
                      <span className="text-lg">Share Your Story</span>
                    </span>
                                    </a>
                                </div>

                                {/* Trust Indicators - Mobile Optimized */}
                                <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-shield-check text-green-500 text-xl"></i>
                                        <span className="font-semibold">SLTDA Licensed</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-award text-yellow-500 text-xl"></i>
                                        <span className="font-semibold">Award Winning</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-heart-fill text-red-500 text-xl"></i>
                                        <span className="font-semibold">500+ Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default TestimonialsSection
