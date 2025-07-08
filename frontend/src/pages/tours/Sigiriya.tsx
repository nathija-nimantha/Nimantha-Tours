"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const Sigiriya: React.FC = () => {
  const tourData = {
    title: "Sigiriya Rock Fortress",
    heroImage: "/src/assets/img/card-Sigiriya.jpg",
    description:
      "Climb the magnificent Sigiriya Rock Fortress, an ancient citadel built atop a 200-meter high rock column. Marvel at the world-famous frescoes, explore the mirror wall, and enjoy breathtaking panoramic views of the surrounding landscape.",
    duration: "Full Day",
    difficulty: "Moderate",
    price: "$95",
    highlights: [
      "Ancient Rock Fortress Dating Back to 5th Century",
      "World-Famous Sigiriya Frescoes",
      "Mirror Wall with Ancient Graffiti",
      "Lion's Gate and Paws",
      "Summit Views of Central Sri Lanka",
      "Royal Water Gardens",
      "Archaeological Museum Visit",
      "Professional Guide Commentary",
    ],
    included: [
      "Professional English-speaking guide",
      "Entrance tickets to Sigiriya",
      "Transportation from/to hotel",
      "Bottled water throughout the tour",
      "Traditional Sri Lankan lunch",
      "First aid kit and safety equipment",
      "Photography assistance",
      "Cultural insights and historical context",
    ],
    gallery: [
      "/src/assets/img/card-Sigiriya.jpg",
      "/src/assets/img/img1.jpg",
      "/src/assets/img/img2.jpg",
      "/src/assets/img/img3.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/scenery2.jpg",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Departure and Arrival",
        description: "Early morning pickup from your hotel and scenic drive to Sigiriya",
        activities: [
          "Hotel pickup at 7:00 AM",
          "Scenic drive through rural Sri Lanka",
          "Brief stop at local market",
          "Arrival at Sigiriya Archaeological Site",
        ],
      },
      {
        day: "Mid-Morning",
        title: "Museum and Gardens",
        description: "Visit the archaeological museum and explore the water gardens",
        activities: [
          "Sigiriya Museum visit",
          "Water Gardens exploration",
          "Boulder Gardens walk",
          "Photography opportunities",
        ],
      },
      {
        day: "Late Morning",
        title: "The Climb Begins",
        description: "Start the ascent to the rock fortress",
        activities: [
          "Begin climb through terraced gardens",
          "Visit the famous Sigiriya Frescoes",
          "Explore the Mirror Wall",
          "Rest at Lion's Gate platform",
        ],
      },
      {
        day: "Noon",
        title: "Summit Experience",
        description: "Reach the summit and explore the ancient palace ruins",
        activities: [
          "Final ascent to the summit",
          "Explore royal palace ruins",
          "360-degree panoramic views",
          "Photography and relaxation time",
        ],
      },
      {
        day: "Afternoon",
        title: "Descent and Lunch",
        description: "Careful descent and traditional lunch",
        activities: [
          "Guided descent with safety tips",
          "Traditional Sri Lankan lunch",
          "Cultural discussion with guide",
          "Souvenir shopping opportunity",
        ],
      },
      {
        day: "Late Afternoon",
        title: "Return Journey",
        description: "Return to your hotel with memories to last a lifetime",
        activities: [
          "Departure from Sigiriya",
          "Scenic return journey",
          "Optional stops for refreshments",
          "Hotel drop-off by 5:00 PM",
        ],
      },
    ],
    location: {
      province: "Central Province",
      district: "Matale District",
      coordinates: "7.9568° N, 80.7592° E",
    },
    bestTime: "December to April (Dry Season) - Clear skies and minimal rainfall make for ideal climbing conditions",
    tips: [
      "Wear comfortable hiking shoes with good grip",
      "Bring a hat and sunscreen - limited shade during the climb",
      "Start early to avoid crowds and heat",
      "Carry water but note that bottles are provided",
      "The climb involves 1,200+ steps - moderate fitness required",
      "Photography is restricted in the fresco gallery",
      "Respect the archaeological site - no touching ancient structures",
      "Allow 4-5 hours for the complete experience",
    ],
  }

  return <TourDetail {...tourData} />
}

export default Sigiriya
