import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full opacity-30 -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full opacity-30 translate-x-40 translate-y-40" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <Fade triggerOnce>
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full mb-6">
                <i className="bi bi-rocket mr-2" />
                Start Your Adventure
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Sri Lankan Adventure{" "}
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Awaits
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Don't just dream about exploring Sri Lanka's wonders. Let us turn your travel dreams into unforgettable
                memories.
              </p>
            </div>
          </Fade>

          {/* Features */}
          <Zoom delay={300} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "bi bi-lightning",
                  title: "Quick Response",
                  description: "Get your custom itinerary within 24 hours",
                },
                {
                  icon: "bi bi-shield-check",
                  title: "Secure Booking",
                  description: "Safe and secure payment processing",
                },
                {
                  icon: "bi bi-headset",
                  title: "Expert Support",
                  description: "24/7 assistance throughout your journey",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${feature.icon} text-white text-xl`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </Zoom>

          {/* CTA Buttons */}
          <Fade direction="up" delay={600} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="/booking"
                className="group bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 min-w-[220px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-calendar-plus text-xl group-hover:animate-bounce" />
                  <span className="text-lg">Book Your Trip Now</span>
                </span>
              </a>

              <a
                href="/contactUs"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 min-w-[220px]"
              >
                <span className="flex items-center justify-center space-x-3">
                  <i className="bi bi-telephone text-xl group-hover:animate-pulse" />
                  <span className="text-lg">Get Free Consultation</span>
                </span>
              </a>
            </div>
          </Fade>

          {/* Trust Indicators */}
          <Fade delay={800} triggerOnce>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <i className="bi bi-shield-fill-check text-green-300 text-lg" />
                <span className="text-sm font-medium">SLTDA Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="bi bi-star-fill text-yellow-300 text-lg" />
                <span className="text-sm font-medium">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="bi bi-people-fill text-blue-300 text-lg" />
                <span className="text-sm font-medium">500+ Happy Travelers</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="bi bi-award-fill text-orange-300 text-lg" />
                <span className="text-sm font-medium">Award Winning Service</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
