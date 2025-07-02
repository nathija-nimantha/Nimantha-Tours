import { HeroSection } from "../components/HeroSection"
import headerImg from "../assets/img/leoperd.jpg"
import { WhyChooseUs } from "../components/WhyChooseUs"
import { FeaturedTours } from '../components/FeaturedTours'
import { HomeHero } from "../components/home/HomeHero"
import React from "react"

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection backgroundImage={headerImg} />
            <HomeHero />
            <WhyChooseUs />
            <FeaturedTours />
        </div>
    )
}

export { Home }
