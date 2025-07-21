import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"

const MissionVision: React.FC = () => {
  const values = [
    {
      title: "Our Mission",
      description:
        "To provide exceptional, personalized travel experiences that showcase the authentic beauty, culture, and warmth of Sri Lanka while creating lasting memories for our guests and supporting local communities.",
      icon: "bi bi-compass",
      color: "from-teal-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-blue-50",
    },
    {
      title: "Our Vision",
      description:
        "To be Sri Lanka's leading travel company, recognized globally for our commitment to sustainable tourism, exceptional service, and our role in promoting Sri Lanka as a premier travel destination.",
      icon: "bi bi-eye",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      title: "Our Values",
      description:
        "Authenticity, sustainability, excellence, and respect for local culture guide everything we do. We believe in responsible tourism that benefits both travelers and the communities we visit.",
      icon: "bi bi-heart",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full opacity-60 -translate-x-32" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full opacity-60 translate-x-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Fade triggerOnce>
            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full mb-6">
              Our Foundation
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Guided by</span>
              <span className="block bg-gradient-to-r from-teal-600 to-purple-700 bg-clip-text text-transparent">
                Purpose & Passion
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission, vision, and values shape every journey we create and every relationship we build
            </p>
          </Fade>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {values.map((item, index) => (
            <Zoom key={index} delay={200 * index} triggerOnce>
              <div
                className={`${item.bgColor} rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group h-full`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <i className={`${item.icon} text-white text-2xl`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 group-hover:text-teal-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>

                  {/* Decorative line */}
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-16 h-1 bg-gradient-to-r ${item.color} rounded-full`} />
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Commitment Section */}
        <Fade delay={600} triggerOnce>
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Commitment to You</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every journey with us is crafted with care, attention to detail, and a deep respect for the places we
                visit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "bi bi-shield-check",
                  title: "Safety First",
                  description: "Your safety and security are our top priorities in every aspect of your journey",
                },
                {
                  icon: "bi bi-leaf",
                  title: "Sustainable Tourism",
                  description:
                    "We practice responsible tourism that protects the environment and supports local communities",
                },
                {
                  icon: "bi bi-people",
                  title: "Local Expertise",
                  description: "Our experienced local guides provide authentic insights and unforgettable experiences",
                },
                {
                  icon: "bi bi-star",
                  title: "Excellence Always",
                  description: "We continuously strive to exceed expectations and deliver exceptional service",
                },
              ].map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${commitment.icon} text-white text-lg`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{commitment.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default MissionVision
