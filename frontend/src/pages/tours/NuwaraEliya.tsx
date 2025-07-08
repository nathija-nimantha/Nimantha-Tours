"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const NuwaraEliya: React.FC = () => {
  const tourData = {
    title: "Nuwara Eliya - Little England",
    heroImage: "/src/assets/img/card-NuwaraEliya.jpg",
    description:
      "Experience the cool climate and colonial charm of 'Little England'. Explore pristine tea plantations, visit Gregory Lake, and enjoy the unique atmosphere of Sri Lanka's hill station with its English-style architecture and gardens.",
    duration: "1-2 Days",
    difficulty: "Easy",
    price: "$90",
    highlights: [
      "Tea Plantation Factory Tours",
      "Gregory Lake Boat Rides",
      "Strawberry Fields Visit",
      "Victoria Park Gardens",
      "Colonial Architecture Tour",
      "Hakgala Botanical Gardens",
      "Tea Tasting Sessions",
      "Scenic Train Journey",
    ],
    included: [
      "Tea plantation tour and tasting",
      "Professional guide services",
      "Train tickets (if applicable)",
      "Lunch with mountain views",
      "Boat ride at Gregory Lake",
      "Garden entrance fees",
      "Transportation within city",
      "Cultural insights",
    ],
    gallery: [
      "/src/assets/img/card-NuwaraEliya.jpg",
      "/src/assets/img/card-Ella.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/scenery2.jpg",
      "/src/assets/img/img4.jpg",
      "/src/assets/img/about-business2.jpg",
    ],
    itinerary: [
      {
        day: "Day 1 - Morning",
        title: "Arrival and Tea Plantation Tour",
        description: "Begin your hill country experience with tea plantation exploration",
        activities: [
          "Arrival in Nuwara Eliya",
          "Check-in to colonial-style hotel",
          "Visit working tea plantation",
          "Tea factory tour and processing demo",
          "Tea tasting session with expert",
        ],
      },
      {
        day: "Day 1 - Afternoon",
        title: "Gregory Lake and City Tour",
        description: "Explore the heart of Little England",
        activities: [
          "Gregory Lake boat ride",
          "Lakeside walk and photography",
          "Colonial architecture tour",
          "Visit Grand Hotel",
          "Local market exploration",
        ],
      },
      {
        day: "Day 1 - Evening",
        title: "Victoria Park and Dinner",
        description: "Evening stroll and traditional dinner",
        activities: [
          "Victoria Park gardens walk",
          "Bird watching opportunities",
          "Colonial-style dinner",
          "Evening rest at hotel",
        ],
      },
      {
        day: "Day 2 - Morning",
        title: "Hakgala Gardens and Strawberry Fields",
        description: "Explore botanical wonders and local agriculture",
        activities: [
          "Hakgala Botanical Gardens tour",
          "Rose garden and orchid house",
          "Strawberry fields visit",
          "Fresh strawberry picking",
          "Local farm experience",
        ],
      },
      {
        day: "Day 2 - Afternoon",
        title: "Scenic Train Journey",
        description: "Experience one of the world's most beautiful train rides",
        activities: [
          "Board scenic hill country train",
          "Mountain and valley views",
          "Tea plantation vistas",
          "Photography opportunities",
          "Cultural interactions with locals",
        ],
      },
      {
        day: "Day 2 - Evening",
        title: "Departure",
        description: "Final moments in the hill country",
        activities: [
          "Last-minute souvenir shopping",
          "Tea purchase from local estates",
          "Final viewpoint visit",
          "Departure to next destination",
        ],
      },
    ],
    location: {
      province: "Central Province",
      district: "Nuwara Eliya District",
      coordinates: "6.9497° N, 80.7891° E",
    },
    bestTime:
      "December to April - Dry season with clear mountain views and pleasant temperatures for outdoor activities",
    tips: [
      "Pack warm clothes - temperatures can drop to 10°C at night",
      "Book train tickets well in advance",
      "Try different tea varieties - each estate has unique flavors",
      "Bring camera for stunning landscape photography",
      "Wear comfortable shoes for garden walks",
      "Respect tea plantation workers and photography rules",
      "Sample fresh strawberries and local dairy products",
      "Allow extra time for train delays during peak season",
    ],
  }

  return <TourDetail {...tourData} />
}

export default NuwaraEliya
