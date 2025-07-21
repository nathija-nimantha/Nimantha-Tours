import React from "react"
import { Fade, Slide, Zoom } from "react-awesome-reveal"
import aboutImg from "../../assets/img/scenery2.jpg"

const AboutContent: React.FC = () => {
  const features = [
    {
      icon: "bi-award-fill",
      title: "Licensed & Certified",
      subtitle: "SLTDA Approved",
      color: "from-teal-500 to-blue-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: "bi-people-fill",
      title: "Expert Guides",
      subtitle: "Local Knowledge",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: "bi-shield-fill-check",
      title: "Safe & Secure",
      subtitle: "Trusted Service",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: "bi-heart-fill",
      title: "Personalized",
      subtitle: "Custom Itineraries",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Travelers", icon: "bi-people" },
    { number: "50+", label: "Destinations", icon: "bi-geo-alt" },
    { number: "10+", label: "Years Experience", icon: "bi-calendar" },
    { number: "4.9", label: "Rating", icon: "bi-star" },
  ]

  return (
    <section
      id="about-content"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-teal-200/30 to-blue-200/30 rounded-full opacity-60 translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-200/30 to-yellow-200/30 rounded-full opacity-60 -translate-x-32 translate-y-32" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <Fade direction="left" triggerOnce>
              <div className="relative group">
                {/* Background Decorations */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-20 transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 rounded-3xl opacity-15 transform -rotate-2 scale-110 group-hover:-rotate-4 transition-transform duration-700" />

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={aboutImg || "/placeholder.svg"}
                    alt="About Nimantha Tours & Travels"
                    className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 aspect-[4/5]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 sm:p-4 rounded-2xl shadow-xl z-10">
                  <div className="text-center">
                    <i className="bi bi-award-fill text-xl sm:text-2xl mb-1 block" />
                    <div className="text-xs sm:text-sm font-semibold">Award Winning</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-4 sm:p-6 rounded-3xl shadow-2xl z-10">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">10+</div>
                    <div className="text-sm font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Header */}
              <Slide direction="right" triggerOnce>
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                    <i className="bi bi-building mr-2" />
                    About Our Company
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Welcome to{" "}
                    <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                      Nimantha Tours
                    </span>
                  </h2>
                </div>
              </Slide>

              {/* Description */}
              <Fade direction="up" delay={200} triggerOnce>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                  <p className="text-gray-700 font-medium">
                    <span className="text-teal-600 font-bold">Nimantha Tours & Travels</span> is your trusted partner
                    for exploring the breathtaking beauty of Sri Lanka. Established in 2010, our mission has always been
                    to provide unforgettable travel experiences for global tourists seeking authentic adventures.
                  </p>

                  <p className="text-gray-600">
                    From the ancient rock fortress of Sigiriya to the serene tea plantations of Nuwara Eliya, we
                    specialize in creating tailored itineraries that capture the essence of Sri Lanka. Our team of
                    expert guides ensures your journey is safe, enriching, and memorable.
                  </p>

                  <p className="text-gray-600">
                    Whether you're looking for adventure, culture, or relaxation, we're here to make your dream vacation
                    a reality with personalized service and unmatched local expertise.
                  </p>
                </div>
              </Fade>

              {/* Stats */}
              <Zoom delay={400} triggerOnce>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 sm:py-8 border-t border-b border-gray-200">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${stat.icon} text-white text-sm sm:text-lg`} />
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Zoom>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {features.map((feature, index) => (
                  <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                    <div
                      className={`group flex items-center space-x-4 p-4 lg:p-6 ${feature.bgColor} rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <i className={`${feature.icon} text-white text-lg lg:text-xl`} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base lg:text-lg group-hover:text-teal-600 transition-colors duration-300">
                          {feature.title}
                        </div>
                        <div className="text-sm lg:text-base text-gray-600">{feature.subtitle}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>

              {/* CTA Buttons */}
              <Slide direction="up" delay={600} triggerOnce>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6">
                  <a
                    href="/booking"
                    className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-calendar-check text-lg sm:text-xl group-hover:animate-bounce" />
                      <span className="text-base sm:text-lg">Plan Your Trip</span>
                    </span>
                  </a>

                  <a
                    href="/contactUs"
                    className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-chat-dots text-lg sm:text-xl group-hover:animate-pulse" />
                      <span className="text-base sm:text-lg">Get in Touch</span>
                    </span>
                  </a>
                </div>
              </Slide>

              {/* Trust Indicators */}
              <Fade delay={800} triggerOnce>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-shield-check text-green-500 text-lg" />
                    <span className="text-sm font-medium">SLTDA Licensed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-award text-yellow-500 text-lg" />
                    <span className="text-sm font-medium">Award Winning</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="bi bi-heart-fill text-red-500 text-lg" />
                    <span className="text-sm font-medium">500+ Happy Clients</span>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
