"use client"

import React from "react"
import TourDetail from "../../components/tours/TourDetail"

const Ella: React.FC = () => {
  const tourData = {
    title: "Ella Hill Country Adventure",
    heroImage: "/src/assets/img/card-Ella.jpg",
    description:
      "Discover the breathtaking beauty of Ella, nestled in Sri Lanka's hill country. Experience the famous Nine Arch Bridge, hike to Little Adam's Peak, and immerse yourself in lush tea plantations with stunning mountain vistas.",
    duration: "2-3 Days",
    difficulty: "Easy",
    price: "$80",
    highlights: [
      "Iconic Nine Arch Bridge",
      "Little Adam's Peak Hike",
      "Ella Rock Adventure",
      "Tea Plantation Tours",
      "Ravana Falls Visit",
      "Train Journey Experience",
      "Mountain Viewpoints",
      "Local Village Interactions",
    ],
    included: [
      "Accommodation for 2 nights",
      "All meals (breakfast, lunch, dinner)",
      "Professional hiking guide",
      "Transportation within Ella",
      "Train tickets (if applicable)",
      "Tea plantation tour and tasting",
      "Entrance fees to attractions",
      "Photography assistance",
    ],
    gallery: [
      "/src/assets/img/card-Ella.jpg",
      "/src/assets/img/card-NuwaraEliya.jpg",
      "/src/assets/img/scenery.jpg",
      "/src/assets/img/scenery2.jpg",
      "/src/assets/img/img4.jpg",
      "/src/assets/img/sideImage.jpg",
    ],
    itinerary: [
      {
        day: "Day 1 - Morning",
        title: "Arrival and Nine Arch Bridge",
        description: "Arrive in Ella and visit the famous Nine Arch Bridge",
        activities: [
          "Check-in to accommodation",
          "Welcome breakfast with mountain views",
          "Walk to Nine Arch Bridge",
          "Train spotting and photography",
          "Local lunch at hillside restaurant",
        ],
      },
      {
        day: "Day 1 - Afternoon",
        title: "Little Adam's Peak",
        description: "Easy hike to Little Adam's Peak for sunset views",
        activities: [
          "Begin hike to Little Adam's Peak",
          "Tea plantation walk",
          "Summit views and photography",
          "Sunset viewing",
          "Return to accommodation for dinner",
        ],
      },
      {
        day: "Day 2 - Morning",
        title: "Ella Rock Adventure",
        description: "Challenging hike to Ella Rock summit",
        activities: [
          "Early morning departure",
          "Railway track walk",
          "Forest trail hiking",
          "Summit achievement",
          "Panoramic photography session",
        ],
      },
      {
        day: "Day 2 - Afternoon",
        title: "Tea Plantations and Ravana Falls",
        description: "Explore tea estates and visit the famous waterfall",
        activities: [
          "Tea factory tour and tasting",
          "Learn about tea processing",
          "Visit Ravana Falls",
          "Swimming opportunity",
          "Cultural dinner with locals",
        ],
      },
      {
        day: "Day 3 - Morning",
        title: "Village Experience",
        description: "Interact with local communities and explore village life",
        activities: [
          "Village walk with guide",
          "Meet local families",
          "Traditional cooking demonstration",
          "Handicraft workshop",
          "Farewell lunch",
        ],
      },
      {
        day: "Day 3 - Afternoon",
        title: "Departure",
        description: "Final views and departure from Ella",
        activities: [
          "Last-minute souvenir shopping",
          "Final viewpoint visit",
          "Check-out and departure",
          "Optional train journey to next destination",
        ],
      },
    ],
    location: {
      province: "Uva Province",
      district: "Badulla District",
      coordinates: "6.8667° N, 81.0500° E",
    },
    bestTime: "January to March and July to September - Clear weather with minimal rainfall for best hiking conditions",
    tips: [
      "Pack layers - mornings can be cool, afternoons warm",
      "Comfortable hiking boots essential for rock climbing",
      "Train schedules can change - check locally",
      "Book accommodation in advance during peak season",
      "Bring rain jacket during monsoon months",
      "Respect local communities and photography permissions",
      "Try local tea varieties - some of the world's best",
      "Allow extra time for train journeys - they can be delayed",
    ],
  }

  return <TourDetail {...tourData} />
}

export default Ella
