import React from "react"
import { Fade, Slide } from "react-awesome-reveal"
import storyImage from "../../assets/img/scenery2.jpg"

const CompanyStory: React.FC = () => {
  return (
    <section id="company-story" className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Our Story
          </h2>
        </Fade>
        <Slide direction="up" triggerOnce>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Discover the journey of Nimantha Tours & Travels, where we turn your travel dreams into reality.
          </p>
        </Slide>
        <Fade triggerOnce>
          <img src={storyImage} alt="Our Story" className="mx-auto rounded-lg shadow-lg" />
        </Fade>
      </div>
    </section>
  )
}

export default CompanyStory
