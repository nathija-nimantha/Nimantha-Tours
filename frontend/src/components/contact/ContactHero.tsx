import React from "react"
import { Fade } from "react-awesome-reveal"
import heroImage from "../../assets/img/contact-hero.jpg"

const ContactHero: React.FC = () => {
  return (
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-6 lg:px-16">
          <Fade direction="up" cascade>
            <div>
              <p className="text-sm text-green-300 uppercase tracking-wide mb-2">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Talk?</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                We can help you plan a great holiday, assist you in your hotel bookings, and recommend the best
                destinations and experiences.
              </p>
              <a
                  href="tel:+94779024795"
                  className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-full shadow-lg transition duration-300"
              >
                <i className="bi bi-telephone-fill mr-2"></i> +94 779 024 795
              </a>
            </div>
          </Fade>
        </div>
      </section>
  )
}

export default ContactHero
