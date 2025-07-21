import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
        </Fade>
        <Zoom triggerOnce>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Join us for an unforgettable journey through the wonders of Sri Lanka.
          </p>
        </Zoom>
        <Fade triggerOnce>
          <a
            href="/booking"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Book Your Trip
          </a>
        </Fade>
      </div>
    </section>
  )
}

export default CallToAction
