"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const Kandy: React.FC = () => {
  const tourData = {
    title: "Cultural Kandy Experience",
    heroImage: "/src/assets/img/card-Kandy.jpg",
    description:
      "Immerse yourself in the cultural heart of Sri Lanka. Visit the sacred Temple of the Tooth Relic, explore the Royal Botanical Gardens, and experience traditional Kandyan dance performances in this UNESCO World Heritage city.",
    duration: "Full Day",
    difficulty: "Easy",
    price: "$85",
    highlights: [
      "Temple of the Tooth Relic (Sri Dalada Maligawa)",
      "Royal Botanical Gardens Peradeniya",
      "Kandy Lake and City Center",
      "Traditional Kandyan Dance Show",
      "Gem Museum and Workshop",
      "Local Market Experience",
      "Colonial Architecture Tour",
      "Scenic Viewpoints",
    ],
    included: [
      "Professional cultural guide",
      "All entrance fees and tickets",
      "Traditional Sri Lankan lunch",
      "Cultural dance show tickets",
      "Transportation within Kandy",
      "Temple dress code assistance",
      "Photography permissions",
      "Cultural insights and history",
    ],
    gallery: [
      "/src/assets/img/card-Kandy.jpg",
      "/src/assets/img/about-hero.jpg",
      "/src/assets/img/img1.jpg",
      "/src/assets/img/img2.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/about-business.jpg",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Temple of the Tooth Relic",
        description: "Begin with the most sacred Buddhist temple in Sri Lanka",
        activities: [
          "Early morning pickup from hotel",
          "Temple dress code briefing",
          "Guided tour of Sri Dalada Maligawa",
          "Witness morning puja ceremony",
          "Learn about Buddhist traditions",
        ],
      },
      {
        day: "Mid-Morning",
        title: "Kandy Lake and City Walk",
        description: "Explore the heart of Kandy city",
        activities: [
          "Walk around scenic Kandy Lake",
          "Visit Queen's Bath ruins",
          "Explore Kandy city center",
          "Local market experience",
          "Colonial architecture viewing",
        ],
      },
      {
        day: "Late Morning",
        title: "Royal Botanical Gardens",
        description: "Discover one of Asia's finest botanical gardens",
        activities: [
          "Guided tour of Peradeniya Gardens",
          "Orchid house visit",
          "Giant bamboo grove walk",
          "Spice garden exploration",
          "Royal palm avenue stroll",
        ],
      },
      {
        day: "Noon",
        title: "Traditional Lunch",
        description: "Enjoy authentic Kandyan cuisine",
        activities: [
          "Traditional rice and curry lunch",
          "Local delicacies tasting",
          "Cultural dining experience",
          "Rest and refreshment time",
        ],
      },
      {
        day: "Afternoon",
        title: "Gem Museum and Workshop",
        description: "Learn about Sri Lanka's precious gem industry",
        activities: [
          "Gem museum guided tour",
          "Gem cutting demonstration",
          "Learn about precious stones",
          "Optional gem shopping",
          "Jewelry crafting workshop",
        ],
      },
      {
        day: "Evening",
        title: "Cultural Dance Performance",
        description: "Experience traditional Kandyan arts",
        activities: [
          "Traditional Kandyan dance show",
          "Fire walking demonstration",
          "Cultural music performance",
          "Interaction with performers",
          "Return to hotel",
        ],
      },
    ],
    location: {
      province: "Central Province",
      district: "Kandy District",
      coordinates: "7.2906° N, 80.6337° E",
    },
    bestTime: "December to April - Dry season with pleasant temperatures and clear skies for sightseeing",
    tips: [
      "Dress modestly for temple visits - cover shoulders and knees",
      "Remove shoes and hats before entering temples",
      "Photography may be restricted in certain temple areas",
      "Book cultural show tickets in advance during peak season",
      "Carry a light jacket for evening performances",
      "Respect local customs and religious practices",
      "Try local Kandyan tea varieties",
      "Allow time for traffic during festival seasons",
    ],
  }

  return <TourDetail {...tourData} />
}

export default Kandy
