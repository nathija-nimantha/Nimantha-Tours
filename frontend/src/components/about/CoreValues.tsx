import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"

interface Value {
  title: string
  description: string
  icon: string
  color: string
  bgColor: string
}

const CoreValues: React.FC = () => {
  const values: Value[] = [
    {
      title: "Customer First",
      description:
        "Your satisfaction is our top priority. We go above and beyond to ensure your travel experience exceeds expectations.",
      icon: "bi bi-emoji-smile",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to eco-friendly practices and supporting local communities for responsible tourism.",
      icon: "bi bi-tree",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Expertise",
      description:
        "Our team of experienced guides and travel planners are passionate about showcasing Sri Lanka's beauty.",
      icon: "bi bi-compass",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Authenticity",
      description: "We provide genuine local experiences that connect you with Sri Lankan culture and traditions.",
      icon: "bi bi-heart",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Safety First",
      description: "Your safety and security are paramount. We maintain the highest standards in all our operations.",
      icon: "bi bi-shield-check",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Innovation",
      description: "We continuously evolve our services using modern technology to enhance your travel experience.",
      icon: "bi bi-lightbulb",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-30 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100 to-yellow-100 rounded-full opacity-30 translate-x-40 translate-y-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Fade triggerOnce>
            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block text-gray-900">What Drives</span>
              <span className="block bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do, ensuring every journey with us is exceptional
            </p>
          </Fade>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Zoom key={index} delay={100 * index} triggerOnce>
              <div
                className={`group p-6 lg:p-8 ${value.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <i className={`${value.icon} text-white text-xl lg:text-2xl`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">{value.description}</p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-12 h-1 bg-gradient-to-r ${value.color} rounded-full`} />
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Call to Action */}
        <Fade delay={600} triggerOnce>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Experience Our Values in Action</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let us show you how our commitment to excellence translates into unforgettable travel experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-calendar-check group-hover:animate-bounce" />
                    <span>Start Your Journey</span>
                  </span>
                </a>
                <a
                  href="/contactUs"
                  className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-chat-dots group-hover:animate-pulse" />
                    <span>Learn More</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default CoreValues
