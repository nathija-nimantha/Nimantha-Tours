import AboutHero from "../components/about/AboutHero"
import CompanyStory from "../components/about/CompanyStory"
import MissionVision from "../components/about/MissionVision"
import WhyChooseUs from "../components/about/WhyChooseUs"
import CallToAction from "../components/about/CallToAction"
import React from "react"

export const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}
