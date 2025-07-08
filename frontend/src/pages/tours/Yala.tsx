"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const Yala: React.FC = () => {
  const tourData = {
    title: "Yala National Park Safari",
    heroImage: "/src/assets/img/card-Yala.jpg",
    description:
      "Embark on an unforgettable wildlife safari in Sri Lanka's premier national park. Experience thrilling game drives with opportunities to spot leopards, elephants, sloth bears, and over 200 bird species in their natural habitat.",
    duration: "Full Day",
    difficulty: "Easy",
    price: "$120",
    highlights: [
      "Leopard Spotting Opportunities",
      "Asian Elephant Herds",
      "Sloth Bear Sightings",
      "Over 200 Bird Species",
      "Crocodile Watching",
      "Wild Buffalo Herds",
      "Spotted Deer and Sambur",
      "Professional Wildlife Tracking",
    ],
    included: [
      "4WD safari vehicle with driver",
      "Professional wildlife tracker/guide",
      "National park entrance fees",
      "Breakfast and packed lunch",
      "Binoculars for wildlife viewing",
      "Bottled water throughout safari",
      "Photography assistance",
      "Wildlife identification guide",
    ],
    gallery: [
      "/src/assets/img/card-Yala.jpg",
      "/src/assets/img/leoperd.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/scenery2.jpg",
      "/src/assets/img/img1.jpg",
      "/src/assets/img/img2.jpg",
    ],
    itinerary: [
      {
        day: "Early Morning",
        title: "Safari Preparation",
        description: "Early start for optimal wildlife viewing",
        activities: [
          "4:30 AM hotel pickup",
          "Drive to Yala National Park",
          "Safari briefing and safety instructions",
          "Meet your wildlife tracker",
          "Equipment check and distribution",
        ],
      },
      {
        day: "Morning Safari",
        title: "First Game Drive",
        description: "Prime time for wildlife activity",
        activities: [
          "Enter Yala National Park",
          "Morning game drive begins",
          "Leopard tracking attempts",
          "Elephant herd observations",
          "Bird watching opportunities",
        ],
      },
      {
        day: "Mid-Morning",
        title: "Wildlife Photography",
        description: "Capture amazing wildlife moments",
        activities: [
          "Professional photography guidance",
          "Close encounters with wildlife",
          "Habitat and behavior explanations",
          "Conservation education",
          "Rest stop with refreshments",
        ],
      },
      {
        day: "Late Morning",
        title: "Breakfast in the Wild",
        description: "Enjoy breakfast surrounded by nature",
        activities: [
          "Scenic breakfast location",
          "Fresh air and natural sounds",
          "Wildlife spotting continues",
          "Tracker shares local knowledge",
          "Preparation for afternoon safari",
        ],
      },
      {
        day: "Afternoon",
        title: "Second Game Drive",
        description: "Afternoon wildlife activity session",
        activities: [
          "Afternoon game drive",
          "Visit different park zones",
          "Water hole observations",
          "Sloth bear territory exploration",
          "Crocodile spotting at lagoons",
        ],
      },
      {
        day: "Late Afternoon",
        title: "Final Safari and Departure",
        description: "Last chances for wildlife sightings",
        activities: [
          "Final wildlife tracking",
          "Sunset photography opportunities",
          "Park exit and journey back",
          "Safari experience discussion",
          "Hotel drop-off by evening",
        ],
      },
    ],
    location: {
      province: "Southern Province",
      district: "Hambantota District",
      coordinates: "6.3725° N, 81.5185° E",
    },
    bestTime: "February to July - Dry season when animals gather around water sources, making wildlife spotting easier",
    tips: [
      "Wear neutral colored clothing (khaki, brown, green)",
      "Bring a hat and sunscreen for sun protection",
      "Keep noise to minimum during wildlife encounters",
      "Respect park rules and maintain safe distances",
      "Charge camera batteries - you'll take many photos",
      "Bring extra memory cards for extensive photography",
      "Stay hydrated but limit fluid intake before long drives",
      "Listen to your tracker's advice for best sighting opportunities",
    ],
  }

  return <TourDetail {...tourData} />
}

export default Yala
