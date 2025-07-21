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
    <section className="py-16 bg-gray-700">
      <div className="container mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Our Mission, Vision & Values
          </h2>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {values.map((item, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${item.bgColor}`}>
              <div className={`flex items-center mb-4 ${item.color}`}>
                <i className={`${item.icon} text-2xl`} />
                <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
