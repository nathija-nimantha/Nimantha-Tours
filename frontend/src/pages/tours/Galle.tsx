"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const Galle: React.FC = () => {
  const tourData = {
    title: "Historic Galle Fort & Southern Beaches",
    heroImage: "/src/assets/img/card-Galle.jpg",
    description:
      "Step back in time as you explore the UNESCO World Heritage Galle Fort, with its well-preserved Dutch colonial architecture, historic lighthouse, and charming cobblestone streets, followed by relaxation on pristine southern beaches.",
    duration: "Full Day",
    difficulty: "Easy",
    price: "$70",
    highlights: [
      "UNESCO World Heritage Galle Fort",
      "Dutch Reformed Church",
      "Historic Galle Lighthouse",
      "Colonial Architecture Walking Tour",
      "Rampart Walls and Bastions",
      "Unawatuna Beach Visit",
      "Stilt Fishermen Experience",
      "Local Craft Shopping",
    ],
    included: [
      "Professional historical guide",
      "Galle Fort entrance fees",
      "Beach time and activities",
      "Fresh seafood lunch",
      "Transportation to beaches",
      "Cultural insights",
      "Photography assistance",
      "Local craft demonstrations",
    ],
    gallery: [
      "/src/assets/img/card-Galle.jpg",
      "/src/assets/img/galle.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/scenery2.jpg",
      "/src/assets/img/img3.jpg",
      "/src/assets/img/sideImage.jpg",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Galle Fort Exploration",
        description: "Discover the historic Dutch colonial fortress",
        activities: [
          "Arrival at Galle Fort",
          "Historical briefing by guide",
          "Walk along the rampart walls",
          "Visit Dutch Reformed Church",
          "Explore colonial buildings",
        ],
      },
      {
        day: "Mid-Morning",
        title: "Lighthouse and Museums",
        description: "Visit iconic landmarks and learn local history",
        activities: [
          "Galle Lighthouse visit",
          "Maritime Museum tour",
          "Clock Tower viewing",
          "Old Gate and bastions",
          "Photography opportunities",
        ],
      },
      {
        day: "Late Morning",
        title: "Cultural Walking Tour",
        description: "Immerse in local culture and crafts",
        activities: [
          "Cobblestone streets exploration",
          "Local artisan workshops",
          "Antique shops browsing",
          "Colonial mansion visits",
          "Cultural interactions",
        ],
      },
      {
        day: "Noon",
        title: "Seafood Lunch",
        description: "Enjoy fresh coastal cuisine",
        activities: [
          "Traditional seafood restaurant",
          "Fresh catch of the day",
          "Local curry varieties",
          "Tropical fruit desserts",
          "Ocean view dining",
        ],
      },
      {
        day: "Afternoon",
        title: "Unawatuna Beach",
        description: "Relax on one of Sri Lanka's most beautiful beaches",
        activities: [
          "Transfer to Unawatuna Beach",
          "Beach relaxation time",
          "Swimming and snorkeling",
          "Beach volleyball (optional)",
          "Coconut water refreshments",
        ],
      },
      {
        day: "Late Afternoon",
        title: "Stilt Fishermen Experience",
        description: "Witness traditional fishing methods",
        activities: [
          "Visit stilt fishermen locations",
          "Learn traditional techniques",
          "Photography with fishermen",
          "Cultural exchange",
          "Sunset viewing and departure",
        ],
      },
    ],
    location: {
      province: "Southern Province",
      district: "Galle District",
      coordinates: "6.0535° N, 80.2210° E",
    },
    bestTime:
      "November to April - Dry season with calm seas perfect for beach activities and clear skies for fort exploration",
    tips: [
      "Wear comfortable walking shoes for cobblestone streets",
      "Bring sunscreen and hat for beach time",
      "Respect local customs when photographing fishermen",
      "Bargain politely when shopping for crafts",
      "Try local seafood specialties - they're exceptional",
      "Watch for strong currents when swimming",
      "Carry cash for small vendors and tips",
      "Allow extra time for sunset photography",
    ],
  }

  return <TourDetail {...tourData} />
}

export default Galle
