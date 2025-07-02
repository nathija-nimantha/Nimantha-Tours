import AboutContent from "../components/about/AboutContent"
import CoreValues from "../components/about/CoreValues"
import AboutHero from "../components/about/AboutHero"
import React from "react"

export const About = () => {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <AboutContent />
            <CoreValues />
        </div>
    )
}
