"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Fade, Slide } from "react-awesome-reveal"
import aboutHeroImage from "../../assets/img/about-hero.jpg"

const AboutHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("company-story")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${aboutHeroImage})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Company Badge */}
          <Slide direction="down" triggerOnce>
            <div className="inline-flex items-center mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  <span>Est. 2010</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
            </div>
          </Slide>

          {/* Main Heading */}
          <Fade cascade triggerOnce>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8">
              <span className="block text-white mb-4 drop-shadow-2xl">Crafting Dreams Into</span>
              <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
          </Fade>

          {/* Subtitle */}
          <Fade direction="up" delay={300} triggerOnce>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-6">
                We are <span className="text-teal-400 font-semibold">Nimantha Tours & Travels</span>
              </p>
              <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Your gateway to discovering the hidden gems and breathtaking wonders of Sri Lanka through personalized,
                authentic travel experiences
              </p>
            </div>
          </Fade>

          {/* Key Highlights */}
          <Fade direction="up" delay={600} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: "bi-geo-alt-fill", text: "50+ Destinations", color: "from-teal-400 to-teal-600" },
                { icon: "bi-people-fill", text: "500+ Happy Travelers", color: "from-blue-400 to-blue-600" },
                { icon: "bi-award-fill", text: "Award Winning Service", color: "from-purple-400 to-purple-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <i className={`${item.icon} text-white text-xl`} />
                  </div>
                  <p className="text-white font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </Fade>

          {/* CTA Buttons */}
          <Fade direction="up" delay={800} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToNext}
                className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-book text-xl group-hover:animate-bounce" />
                  <span className="text-lg">Our Story</span>
                </span>
              </button>

              <a
                href="/booking"
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-compass text-xl group-hover:animate-spin" />
                  <span className="text-lg">Start Journey</span>
                </span>
              </a>
            </div>
          </Fade>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll to learn more"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-teal-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-teal-400 transition-colors duration-300" />
          </div>
          <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Discover
          </span>
        </button>
      </div>
    </section>
  )
}

export default AboutHero
