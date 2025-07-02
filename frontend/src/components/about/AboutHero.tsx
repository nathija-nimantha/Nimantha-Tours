"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Fade, Slide, Zoom } from "react-awesome-reveal"
import aboutImage from "../../assets/img/about-hero.jpg"

const AboutHero: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = aboutImage
  }, [])

  const scrollToContent = (): void => {
    const aboutContent = document.getElementById("more-about-us")
    if (aboutContent) {
      aboutContent.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Dynamic Background with Parallax */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
            style={{
              backgroundImage: `url(${aboutImage})`,
              transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) scale(1.1)`,
            }}
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div
              className="absolute w-96 h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                top: "10%",
                left: "10%",
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              }}
          />
          <div
              className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                top: "60%",
                right: "10%",
                animationDelay: "2s",
                transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
              }}
          />
          <div
              className="absolute w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                bottom: "20%",
                left: "30%",
                animationDelay: "4s",
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              }}
          />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-60" />
          <div
              className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"
              style={{ animationDelay: "1s" }}
          />
          <div
              className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-50"
              style={{ animationDelay: "2s" }}
          />
          <div
              className="absolute top-60 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-30"
              style={{ animationDelay: "3s" }}
          />

          {/* Modern Geometric Shapes */}
          <div
              className="absolute top-32 right-40 w-8 h-8 border border-teal-400/30 rotate-45 animate-spin opacity-40"
              style={{ animationDuration: "20s" }}
          />
          <div className="absolute bottom-40 left-32 w-6 h-6 border border-blue-400/30 rotate-12 animate-pulse opacity-30" />
          <div
              className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div
                className={`transition-all duration-1000 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              {/* Modern Badge */}
              <Slide direction="down" triggerOnce>
                <div className="inline-flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full blur-lg opacity-60 animate-pulse" />
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span>Our Story</span>
                        <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>

              {/* Modern Typography */}
              <div className="space-y-6 mb-8">
                <Fade cascade triggerOnce>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                    <span className="block text-white mb-2 drop-shadow-2xl">About</span>
                    <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                    Nimantha Tours
                  </span>
                  </h1>
                </Fade>

                <Fade direction="up" delay={300} triggerOnce>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-4">
                      Crafting <span className="text-teal-400 font-semibold">extraordinary journeys</span> across the
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
                      pearl of the Indian Ocean since 2010
                    </p>
                  </div>
                </Fade>
              </div>

              {/* Modern CTA Buttons */}
              <Zoom delay={600} triggerOnce>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button
                      onClick={scrollToContent}
                      className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/25 min-w-[200px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center space-x-3">
                    <i className="bi bi-arrow-down-circle text-xl group-hover:animate-bounce" />
                    <span className="text-lg">Discover Our Story</span>
                  </span>
                  </button>

                  <a
                      href="/booking"
                      className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center space-x-3">
                    <i className="bi bi-calendar-check text-xl group-hover:animate-pulse" />
                    <span className="text-lg">Start Your Journey</span>
                  </span>
                  </a>
                </div>
              </Zoom>

              {/* Modern Stats Cards */}
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
                          className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                          style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative text-center">
                          <div
                              className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <i className={`${stat.icon} text-white text-lg`} />
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                          <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
              onClick={scrollToContent}
              className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Scroll to content"
          >
            <div className="relative">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-teal-400 transition-colors duration-300">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-teal-400 transition-colors duration-300" />
              </div>
              <div className="absolute -inset-2 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            </div>
            <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          </button>
        </div>

        {/* Modern Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-20">
          {["About", "Story", "Values"].map((section, index) => (
              <button
                  key={section}
                  className="group flex items-center space-x-3 text-white/60 hover:text-white transition-colors duration-300"
                  onClick={() => {
                    if (index === 0) scrollToContent()
                  }}
              >
                <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === 0 ? "bg-teal-400 w-8" : "bg-white/40 group-hover:bg-white/80 group-hover:w-4"
                    }`}
                />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section}
            </span>
              </button>
          ))}
        </div>

        {/* Ambient Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-teal-500/5 to-transparent pointer-events-none" />
      </section>
  )
}

export default AboutHero
