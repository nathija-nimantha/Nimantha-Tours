import React from "react"

const WhyChooseUs = () => {
  const items = [
    {
      icon: "bi-globe",
      title: "Global Reach",
      desc: "We cater to tourists from all around the world with personalized experiences.",
      color: "from-blue-500 to-purple-600",
      delay: "0s",
    },
    {
      icon: "bi-calendar-check",
      title: "Easy Booking",
      desc: "Simplified booking system for a hassle-free and seamless experience.",
      color: "from-teal-500 to-green-600",
      delay: "0.2s",
    },
    {
      icon: "bi-shield-check",
      title: "Trusted Guides",
      desc: "Experienced local guides to ensure your safety and complete satisfaction.",
      color: "from-orange-500 to-red-600",
      delay: "0.4s",
    },
    {
      icon: "bi-heart-fill",
      title: "Personalized Service",
      desc: "Tailored itineraries designed specifically for your preferences and interests.",
      color: "from-pink-500 to-rose-600",
      delay: "0.6s",
    },
    {
      icon: "bi-award-fill",
      title: "Award Winning",
      desc: "Recognized for excellence in tourism and customer service across Sri Lanka.",
      color: "from-yellow-500 to-orange-600",
      delay: "0.8s",
    },
    {
      icon: "bi-clock-fill",
      title: "24/7 Support",
      desc: "Round-the-clock assistance to ensure your journey is smooth and worry-free.",
      color: "from-indigo-500 to-blue-600",
      delay: "1s",
    },
  ]

  return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-100 to-blue-100 rounded-full opacity-30 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-30 -translate-x-40 translate-y-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-bounce-custom">
            Why Choose Us
          </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">Why Choose </span>
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
              Nimantha Tours?
            </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the preferred choice for travelers seeking authentic Sri Lankan experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="group p-6 sm:p-8 text-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                    style={{ animationDelay: item.delay }}
                >
                  <div className="relative mb-6">
                    <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <i className={`${item.icon} text-white text-2xl sm:text-3xl`}></i>
                    </div>
                    <div
                        className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r ${item.color} rounded-2xl opacity-20 blur-xl transform transition-all duration-300 group-hover:scale-125`}
                    ></div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>

                  {/* Hover effect indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mx-auto"></div>
                  </div>
                </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Adventure?</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied travelers who have experienced the magic of Sri Lanka with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary group">
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-calendar-check group-hover:animate-bounce"></i>
                  <span>Book Your Tour</span>
                </span>
                </a>
                <a
                    href="/contactUs"
                    className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                <span className="flex items-center justify-center space-x-2">
                  <i className="bi bi-chat-dots group-hover:animate-pulse"></i>
                  <span>Get in Touch</span>
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export { WhyChooseUs }
