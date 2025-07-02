import React from "react"
import MemoriesGallery from "../components/memories/MemoriesGallery"
import TestimonialsSection from "../components/memories/TestimonialsSection"
import { HeroSection } from "../components/HeroSection"
import memoriesHeroImg from "../assets/img/img2.jpg"

export const Memories: React.FC = () => {
    return (
        <div className="min-h-screen">
            <HeroSection backgroundImage={memoriesHeroImg} />
            <MemoriesGallery />
            <TestimonialsSection />
        </div>
    )
}
