import React from "react"
import BookingHero from "../components/booking/BookingHero";
import BookingForm from "../components/booking/BookingForm";
import BookingHelp from "../components/booking/BookingHelp";
import ServiceProcess from "../components/ServiceProcess"

export const Booking: React.FC = () => {
  return (
      <div className="bg-gray-50 min-h-screen">
        <div className="w-full">
          <BookingHero />
        </div>

        <div className="w-full bg-white py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <div className="xl:col-span-3 order-2 xl:order-1">
                <BookingForm />
              </div>

              <div className="xl:col-span-1 order-1 xl:order-2">
                <div className="sticky top-24 space-y-6">
                  <BookingHelp />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-teal-50 to-blue-50 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  How Our{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                  Booking Works
                </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simple steps to plan your perfect Sri Lankan adventure
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <ServiceProcess />
                </div>

                <div className="order-1 lg:order-2">
                  <div className="space-y-8">
                    {[
                      {
                        step: "01",
                        title: "Fill the Form",
                        description: "Complete our detailed booking form with your travel preferences and requirements.",
                        icon: "bi-pencil-square",
                        color: "from-blue-500 to-purple-600",
                      },
                      {
                        step: "02",
                        title: "Get Your Quote",
                        description: "Receive a personalized quote within 2 hours during business hours.",
                        icon: "bi-calculator",
                        color: "from-teal-500 to-green-600",
                      },
                      {
                        step: "03",
                        title: "Confirm & Travel",
                        description: "Confirm your booking and get ready for an unforgettable Sri Lankan experience.",
                        icon: "bi-airplane",
                        color: "from-orange-500 to-red-600",
                      },
                    ].map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div
                              className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <i className={`${step.icon} text-white text-xl`}></i>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-2xl font-bold text-gray-300">{step.step}</span>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="bi bi-award text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Nimantha Tours?</h3>
                    <p className="text-gray-600">Your trusted partner for Sri Lankan adventures</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "bi-shield-check",
                        title: "SLTDA Licensed",
                        desc: "Officially recognized travel agency",
                        color: "text-green-600",
                      },
                      {
                        icon: "bi-people",
                        title: "Expert Local Guides",
                        desc: "Passionate about Sri Lankan culture",
                        color: "text-blue-600",
                      },
                      {
                        icon: "bi-heart",
                        title: "Personalized Service",
                        desc: "Tailored to your preferences",
                        color: "text-red-600",
                      },
                      {
                        icon: "bi-headset",
                        title: "24/7 Support",
                        desc: "Always here when you need us",
                        color: "text-purple-600",
                      },
                      {
                        icon: "bi-star",
                        title: "500+ Happy Travelers",
                        desc: "Trusted by customers worldwide",
                        color: "text-yellow-600",
                      },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 p-3 hover:bg-white rounded-xl transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <i className={`${item.icon} ${item.color} text-lg`}></i>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-600">{item.desc}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="bi bi-geo-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Popular Destinations</h3>
                    <p className="text-gray-600">Must-visit places in Sri Lanka</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Sigiriya Rock", icon: "bi-geo-alt-fill", color: "from-blue-500 to-purple-600" },
                      { name: "Kandy Temple", icon: "bi-building", color: "from-teal-500 to-green-600" },
                      { name: "Ella Tea Country", icon: "bi-tree", color: "from-green-500 to-teal-600" },
                      { name: "Yala Safari", icon: "bi-binoculars", color: "from-orange-500 to-red-600" },
                      { name: "Galle Fort", icon: "bi-shield", color: "from-indigo-500 to-blue-600" },
                      { name: "Nuwara Eliya", icon: "bi-snow", color: "from-pink-500 to-rose-600" },
                    ].map((destination, index) => (
                        <div
                            key={index}
                            className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                          <div
                              className={`w-12 h-12 bg-gradient-to-r ${destination.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                          >
                            <i className={`${destination.icon} text-white text-lg`}></i>
                          </div>
                          <div className="text-center">
                        <span className="text-sm font-semibold text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                          {destination.name}
                        </span>
                          </div>
                        </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <a
                        href="/featuredTours"
                        className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300"
                    >
                      <span>View All Destinations</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-teal-600 to-blue-700 py-12 lg:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Help with Your Booking?</h2>
              <p className="text-xl mb-8 opacity-90">Our travel experts are ready to assist you</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-telephone text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:+94779024795" className="text-lg hover:text-yellow-300 transition-colors duration-300">
                    (+94) 779 024 795
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-whatsapp text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <a
                      href="https://wa.me/94779024795"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-yellow-300 transition-colors duration-300"
                  >
                    Chat with us
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-envelope text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a
                      href="mailto:info@nimanthatours.com"
                      className="text-lg hover:text-yellow-300 transition-colors duration-300"
                  >
                    info@nimanthatours.com
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-left mb-4 md:mb-0">
                    <h4 className="text-lg font-bold mb-1">Quick Response Guarantee</h4>
                    <p className="opacity-90">We respond within 2 hours during business hours</p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                        href="tel:+94779024795"
                        className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="bi bi-telephone mr-2"></i>
                      Call Now
                    </a>
                    <a
                        href="https://wa.me/94779024795"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="bi bi-whatsapp mr-2"></i>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
