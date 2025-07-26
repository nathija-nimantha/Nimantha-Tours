"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"

interface Testimonial {
  id: number
  name: string
  location: string
  country: string
  rating: number
  review: string
  tourPackage: string
  date: string
  avatar: string
  verified: boolean
  highlights: string[]
}

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Thompson",
      location: "London",
      country: "United Kingdom",
      rating: 5,
      review:
        "Our Sri Lankan adventure with Nimantha Tours was absolutely magical! From the ancient temples of Anuradhapura to the pristine beaches of Galle, every moment was perfectly orchestrated. The attention to detail and genuine care for our experience made this trip unforgettable.",
      tourPackage: "Historic Galle Fort & Southern Beaches",
      date: "March 2024",
      avatar: "ET",
      verified: true,
      highlights: ["Expert Guide", "Seamless Planning", "Authentic Experiences"],
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      location: "Barcelona",
      country: "Spain",
      rating: 5,
      review:
        "As a solo traveler, I was initially nervous about exploring Sri Lanka alone. Nimantha Tours made me feel completely safe and welcomed. The wildlife safari at Yala was incredible - seeing leopards in their natural habitat was a dream come true!",
      tourPackage: "Yala National Park Safari",
      date: "February 2024",
      avatar: "MR",
      verified: true,
      highlights: ["Solo-Friendly", "Wildlife Expertise", "Safety First"],
    },
    {
      id: 3,
      name: "Yuki & Hiroshi Tanaka",
      location: "Tokyo",
      country: "Japan",
      rating: 5,
      review:
        "Our honeymoon in Sri Lanka exceeded all expectations! The romantic sunset dinner in Ella, the luxury tea plantation stay, and the private beach experience in Mirissa created memories we'll treasure forever. Thank you for making our special trip perfect!",
      tourPackage: "Ella Hill Country Adventure",
      date: "January 2024",
      avatar: "YT",
      verified: true,
      highlights: ["Romantic Settings", "Luxury Accommodations", "Private Experiences"],
    },
    {
      id: 4,
      name: "The Johnson Family",
      location: "Sydney",
      country: "Australia",
      rating: 5,
      review:
        "Traveling with three kids can be challenging, but Nimantha Tours made it effortless! The elephant orphanage visit was the highlight for our children, and the cultural performances in Kandy captivated the whole family. Perfectly paced for all ages!",
      tourPackage: "Cultural Kandy Experience",
      date: "December 2023",
      avatar: "JF",
      verified: true,
      highlights: ["Family-Friendly", "Kid-Safe Activities", "Educational Tours"],
    },
    {
      id: 5,
      name: "Dr. Sarah Mitchell",
      location: "Toronto",
      country: "Canada",
      rating: 5,
      review:
        "The photography tour was phenomenal! As a professional photographer, I was impressed by the unique locations and perfect timing for golden hour shots. From Sigiriya's ancient fortress to the tea plantations of Nuwara Eliya, every frame was Instagram-worthy!",
      tourPackage: "Sigiriya Rock Fortress",
      date: "November 2023",
      avatar: "SM",
      verified: true,
      highlights: ["Photography Focus", "Scenic Locations", "Perfect Timing"],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={`bi ${index < rating ? "bi-star-fill" : "bi-star"} text-yellow-400 text-lg`} />
    ))
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Fade triggerOnce>
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-lg">
              <i className="bi bi-chat-heart mr-2"></i>
              Traveler Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900 mb-2">What Our Guests</span>
              <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from travelers who discovered the magic of Sri Lanka with us
            </p>
          </Fade>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-7xl mx-auto mb-16">
          <Fade key={activeTestimonial} triggerOnce={false}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Testimonial Content */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden border border-gray-100">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    {/* Verified Badge */}
                    {currentTestimonial.verified && (
                      <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                        <i className="bi bi-patch-check-fill mr-2"></i>
                        Verified Review
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="flex space-x-1">{renderStars(currentTestimonial.rating)}</div>
                      <span className="text-lg font-bold text-gray-700">{currentTestimonial.rating}.0</span>
                    </div>

                    {/* Quote */}
                    <div className="mb-8">
                      <i className="bi bi-quote text-6xl text-teal-200 mb-4 block"></i>
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                        {currentTestimonial.review}
                      </blockquote>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentTestimonial.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 text-sm font-medium px-3 py-1 rounded-full border border-teal-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {currentTestimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{currentTestimonial.name}</h4>
                        <p className="text-gray-600 flex items-center space-x-2">
                          <i className="bi bi-geo-alt text-teal-500"></i>
                          <span>
                            {currentTestimonial.location}, {currentTestimonial.country}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Package Info */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src="/src/assets/img/card-Sigiriya.jpg"
                      alt="Sri Lanka Tour Experience"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Tour Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold mb-2">{currentTestimonial.tourPackage}</h3>
                        <div className="flex items-center justify-between text-sm opacity-90">
                          <span className="flex items-center space-x-2">
                            <i className="bi bi-calendar3"></i>
                            <span>{currentTestimonial.date}</span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <i className="bi bi-geo-alt"></i>
                            <span>Sri Lanka</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600 mb-1">{currentTestimonial.rating}.0</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
          {/* Dots Navigation */}
          <div className="flex items-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`transition-all duration-300 transform hover:scale-125 ${
                  index === activeTestimonial
                    ? "w-12 h-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)
              }
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left text-lg"></i>
            </button>
            <button
              onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)}
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 border border-gray-200"
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right text-lg"></i>
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <Fade triggerOnce>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: "bi-people-fill",
                value: "1,200+",
                label: "Happy Travelers",
                description: "Satisfied customers worldwide",
                gradient: "from-teal-500 to-blue-600",
              },
              {
                icon: "bi-star-fill",
                value: "4.9",
                label: "Average Rating",
                description: "Based on verified reviews",
                gradient: "from-green-500 to-teal-600",
              },
              {
                icon: "bi-globe",
                value: "35+",
                label: "Countries Served",
                description: "Global reach and trust",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                icon: "bi-award-fill",
                value: "15+",
                label: "Years Experience",
                description: "Proven track record",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                >
                  <i className={`bi ${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Call to Action */}
        <Fade triggerOnce>
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-50 via-white to-blue-50 rounded-3xl p-8 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-gray-200 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 transform rotate-12 scale-150"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <i className="bi bi-heart-fill text-white text-2xl"></i>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Create Your Story?
                </h3>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of satisfied travelers who have discovered the magic of Sri Lanka with our personalized
                  tours
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="/booking"
                    className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-calendar-check text-xl group-hover:animate-bounce"></i>
                      <span className="text-lg">Start Your Journey</span>
                    </span>
                  </a>
                  <a
                    href="/contactUs"
                    className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-4 px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-chat-dots text-xl group-hover:animate-pulse"></i>
                      <span className="text-lg">Share Your Story</span>
                    </span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-shield-check text-green-500 text-xl"></i>
                    <span className="font-semibold">SLTDA Licensed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-award text-yellow-500 text-xl"></i>
                    <span className="font-semibold">Award Winning Service</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-heart-fill text-red-500 text-xl"></i>
                    <span className="font-semibold">1200+ Happy Travelers</span>
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
