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
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-8">
            Why Choose Nimantha Tours & Travels?
          </h2>
        </Fade>
        <Slide direction="up" triggerOnce>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            Discover the unique advantages that set us apart in Sri Lanka's travel industry.
          </p>
        </Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className={`${reason.icon} text-white text-xl`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{reason.description}</p>
              <span className="text-teal-400 font-bold">{reason.stats}</span>
            </div>
          ))}
        </div>
        <Fade triggerOnce>
          <img src={teamImage} alt="Our Team" className="mt-12 mx-auto rounded-lg shadow-lg" />
        </Fade>
      </div>
    </section>
  )
}

export default WhyChooseUs
