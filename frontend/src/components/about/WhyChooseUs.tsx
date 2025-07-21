import React from "react"
import { Fade, Slide } from "react-awesome-reveal"
import teamImage from "../../assets/img/about-business.jpg"

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: "bi bi-award",
      title: "Award-Winning Service",
      description: "Recognized for excellence in customer service and travel experiences",
      stats: "4.9/5 Rating",
    },
    {
      icon: "bi bi-people",
      title: "Expert Local Guides",
      description: "Passionate locals who know every hidden gem and cultural secret",
      stats: "15+ Expert Guides",
    },
    {
      icon: "bi bi-gear",
      title: "Customized Experiences",
      description: "Tailored itineraries designed around your interests and preferences",
      stats: "100% Personalized",
    },
    {
      icon: "bi bi-shield-check",
      title: "Licensed & Insured",
      description: "Fully licensed by SLTDA with comprehensive travel insurance coverage",
      stats: "SLTDA Certified",
    },
    {
      icon: "bi bi-clock",
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your entire journey",
      stats: "Always Available",
    },
    {
      icon: "bi bi-heart",
      title: "Authentic Experiences",
      description: "Genuine cultural immersion and connections with local communities",
      stats: "100% Authentic",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full opacity-60 -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100/40 to-yellow-100/40 rounded-full opacity-60 translate-x-40 translate-y-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div>
            <Fade direction="left" triggerOnce>
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-20 transform -rotate-6 scale-105 group-hover:-rotate-12 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 rounded-3xl opacity-15 transform rotate-3 scale-110 group-hover:rotate-6 transition-transform duration-700" />

                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={teamImage || "/placeholder.svg"}
                    alt="Our professional team at work"
                    className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 aspect-[4/5]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-3xl shadow-2xl z-10">
                  <div className="text-center">
                    <i className="bi bi-trophy-fill text-2xl mb-2 block" />
                    <div className="text-sm font-bold">Best Service</div>
                    <div className="text-xs">Award 2023</div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <Slide direction="right" triggerOnce>
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
                  <i className="bi bi-star mr-2" />
                  Why Choose Us
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Experience the{" "}
                  <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                    Difference
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  With over a decade of experience and hundreds of satisfied travelers, we've perfected the art of
                  creating unforgettable Sri Lankan adventures.
                </p>
              </div>
            </Slide>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <Fade key={index} direction="up" delay={100 * index} triggerOnce>
                  <div className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${reason.icon} text-white text-lg`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">{reason.description}</p>
                        <div className="text-teal-600 font-semibold text-sm">{reason.stats}</div>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>

            {/* CTA Section */}
            <Fade direction="up" delay={800} triggerOnce>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Sri Lanka?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join hundreds of satisfied travelers who have discovered the magic of Sri Lanka with us. Let's create
                  your perfect adventure together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/booking"
                    className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <i className="bi bi-calendar-check group-hover:animate-bounce" />
                      <span>Plan Your Trip</span>
                    </span>
                  </a>
                  <a
                    href="/contactUs"
                    className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-3 px-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <i className="bi bi-chat-dots group-hover:animate-pulse" />
                      <span>Contact Us</span>
                    </span>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
