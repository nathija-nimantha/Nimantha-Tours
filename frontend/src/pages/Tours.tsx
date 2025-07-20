"use client"

import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

// Images
import sigiriyaImg from '../assets/img/card-Sigiriya.jpg';
import ellaImg from '../assets/img/card-Ella.jpg';
import kandyImg from '../assets/img/card-Kandy.jpg';
import galleImg from '../assets/img/card-Galle.jpg';
import nuwaraEliyaImg from '../assets/img/card-NuwaraEliya.jpg';
import yalaImg from '../assets/img/card-Yala.jpg';
import anuradhapuraImg from '../assets/img/card-Anuradhapura.png';
import polonnaruwaImg from '../assets/img/card-Polonnaruwa.jpg';
import dambullaImg from '../assets/img/card-DambullaRoyalCave.jpg';
import hortonsPlainsImg from '../assets/img/card-HortonPlains.jpg';
import colomboImg from '../assets/img/card-Colombo.jpg';
import ambuluwawaImg from '../assets/img/card-Ambuluwawa.jpg';

interface Tour {
  id: string
  title: string
  location: string
  image: string
  duration: string
  price: string
  rating: number
  description: string
  category: string
  difficulty: string
  highlights: string[]
}

interface CustomTourData {
  destinations: string[]
  tourType: string
  startLocation: string
  duration: string
  groupSize: string
  interests: string[]
  accommodation: string
  transportation: string
  budget: string
  name: string
  email: string
  phone: string
  specialRequests: string
}

const Tours = () => {
  const [activeTab, setActiveTab] = useState<"existing" | "custom">("existing")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [customTour, setCustomTour] = useState<CustomTourData>({
    destinations: [],
    tourType: "",
    startLocation: "",
    duration: "",
    groupSize: "",
    interests: [],
    accommodation: "",
    transportation: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const tours: Tour[] = [
    {
      id: "sigiriya",
      title: "Sigiriya Rock Fortress",
      location: "Central Province",
      image: sigiriyaImg,
      duration: "1 Day",
      price: "$89",
      rating: 4.8,
      description: "Ancient rock fortress with stunning frescoes and panoramic views",
      category: "cultural",
      difficulty: "Moderate",
      highlights: ["Ancient Frescoes", "Lion's Gate", "Summit Views"],
    },
    {
      id: "ella",
      title: "Ella Hill Country",
      location: "Uva Province",
      image: ellaImg,
      duration: "2 Days",
      price: "$159",
      rating: 4.9,
      description: "Tea plantations, waterfalls, and scenic train rides",
      category: "nature",
      difficulty: "Easy",
      highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Factories"],
    },
    {
      id: "kandy",
      title: "Kandy Cultural Tour",
      location: "Central Province",
      image: kandyImg,
      duration: "1 Day",
      price: "$79",
      rating: 4.7,
      description: "Temple of the Tooth and traditional cultural experiences",
      category: "cultural",
      difficulty: "Easy",
      highlights: ["Temple of Tooth", "Royal Botanical Gardens", "Cultural Shows"],
    },
    {
      id: "galle",
      title: "Galle Fort Heritage",
      location: "Southern Province",
      image: galleImg,
      duration: "1 Day",
      price: "$69",
      rating: 4.6,
      description: "Dutch colonial architecture and coastal charm",
      category: "coastal",
      difficulty: "Easy",
      highlights: ["Galle Fort", "Lighthouse", "Colonial Architecture"],
    },
    {
      id: "nuwara-eliya",
      title: "Nuwara Eliya",
      location: "Central Province",
      image: nuwaraEliyaImg,
      duration: "2 Days",
      price: "$139",
      rating: 4.5,
      description: "Little England with cool climate and tea estates",
      category: "nature",
      difficulty: "Easy",
      highlights: ["Tea Plantations", "Gregory Lake", "Strawberry Fields"],
    },
    {
      id: "yala",
      title: "Yala Safari",
      location: "Southern Province",
      image: yalaImg,
      duration: "2 Days",
      price: "$199",
      rating: 4.8,
      description: "Wildlife safari with leopards and elephants",
      category: "wildlife",
      difficulty: "Easy",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching"],
    },
    {
      id: "anuradhapura",
      title: "Anuradhapura Ancient City",
      location: "North Central Province",
      image: anuradhapuraImg,
      duration: "1 Day",
      price: "$75",
      rating: 4.6,
      description: "Ancient capital with sacred Buddhist sites",
      category: "cultural",
      difficulty: "Easy",
      highlights: ["Sacred Bo Tree", "Ancient Stupas", "Ruins"],
    },
    {
      id: "polonnaruwa",
      title: "Polonnaruwa Heritage",
      location: "North Central Province",
      image: polonnaruwaImg,
      duration: "1 Day",
      price: "$72",
      rating: 4.5,
      description: "Medieval capital with well-preserved ruins",
      category: "cultural",
      difficulty: "Easy",
      highlights: ["Gal Vihara", "Royal Palace", "Lotus Pond"],
    },
    {
      id: "dambulla",
      title: "Dambulla Cave Temple",
      location: "Central Province",
      image: dambullaImg,
      duration: "Half Day",
      price: "$45",
      rating: 4.4,
      description: "Golden temple with ancient cave paintings",
      category: "cultural",
      difficulty: "Easy",
      highlights: ["Cave Paintings", "Buddha Statues", "Golden Temple"],
    },
    {
      id: "horton-plains",
      title: "Horton Plains National Park",
      location: "Central Province",
      image: hortonsPlainsImg,
      duration: "1 Day",
      price: "$95",
      rating: 4.7,
      description: "Cloud forest with World's End cliff",
      category: "nature",
      difficulty: "Moderate",
      highlights: ["World's End", "Baker's Falls", "Cloud Forest"],
    },
    {
      id: "colombo",
      title: "Colombo City Tour",
      location: "Western Province",
      image: colomboImg,
      duration: "Half Day",
      price: "$55",
      rating: 4.3,
      description: "Modern capital with colonial heritage",
      category: "city",
      difficulty: "Easy",
      highlights: ["Gangaramaya Temple", "Pettah Market", "Galle Face Green"],
    },
    {
      id: "ambuluwawa",
      title: "Ambuluwawa Tower",
      location: "Central Province",
      image: ambuluwawaImg,
      duration: "Half Day",
      price: "$40",
      rating: 4.2,
      description: "Spiral tower with panoramic mountain views",
      category: "nature",
      difficulty: "Moderate",
      highlights: ["Spiral Tower", "Mountain Views", "Biodiversity Park"],
    },
  ]

  const categories = [
    { id: "all", name: "All Tours", icon: "bi-grid" },
    { id: "cultural", name: "Cultural", icon: "bi-building" },
    { id: "nature", name: "Nature", icon: "bi-tree" },
    { id: "wildlife", name: "Wildlife", icon: "bi-binoculars" },
    { id: "coastal", name: "Coastal", icon: "bi-water" },
    { id: "city", name: "City", icon: "bi-buildings" },
  ]

  const destinations = [
    "Sigiriya",
    "Kandy",
    "Ella",
    "Galle",
    "Nuwara Eliya",
    "Yala National Park",
    "Anuradhapura",
    "Polonnaruwa",
    "Dambulla",
    "Colombo",
    "Negombo",
    "Bentota",
    "Mirissa",
    "Unawatuna",
    "Arugam Bay",
    "Trincomalee",
    "Jaffna",
    "Horton Plains",
  ]

  const tourTypes = [
    "Day Tour",
    "City Tour",
    "Multi-day Tour",
    "Safari Tour",
    "Cultural Tour",
    "Adventure Tour",
    "Beach Tour",
    "Photography Tour",
  ]

  const interests = [
    "Wildlife",
    "Culture",
    "History",
    "Nature",
    "Adventure",
    "Photography",
    "Food",
    "Beaches",
    "Mountains",
    "Temples",
    "Tea Plantations",
    "Waterfalls",
    "Train Rides",
    "Local Markets",
    "Festivals",
  ]

  const filteredTours = selectedCategory === "all" ? tours : tours.filter((tour) => tour.category === selectedCategory)

  const handleDestinationToggle = (destination: string) => {
    setCustomTour((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(destination)
        ? prev.destinations.filter((d) => d !== destination)
        : [...prev.destinations, destination],
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setCustomTour((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleInputChange = (field: keyof CustomTourData, value: string) => {
    setCustomTour((prev) => ({ ...prev, [field]: value }))
  }

  const handleCustomTourSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Custom tour request:", customTour)
    alert("Thank you! We'll contact you soon with a customized tour proposal.")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Discover Sri Lanka</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose from our curated tours or create your perfect custom adventure
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveTab("existing")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "existing" ? "bg-white text-teal-600 shadow-lg" : "text-white hover:bg-white/10"
              }`}
            >
              Existing Tours
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "custom" ? "bg-white text-teal-600 shadow-lg" : "text-white hover:bg-white/10"
              }`}
            >
              Custom Tour
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {activeTab === "existing" ? (
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Tours by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-teal-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <i className={category.icon}></i>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <Link
                  key={tour.id}
                  to={`/tours/${tour.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-gray-900">{tour.price}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-white">{tour.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-teal-600 uppercase tracking-wide">{tour.location}</span>
                      <div className="flex items-center space-x-1">
                        <i className="bi bi-star-fill text-yellow-400 text-sm"></i>
                        <span className="text-sm font-medium text-gray-700">{tour.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

                    {/* Difficulty Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(tour.difficulty)}`}
                      >
                        {tour.difficulty}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <i className="bi bi-geo-alt"></i>
                        <span>Sri Lanka</span>
                      </div>
                      <div className="flex items-center space-x-1 text-teal-600 font-medium group-hover:translate-x-1 transition-transform">
                        <span className="text-sm">Explore</span>
                        <i className="bi bi-arrow-right text-sm"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Create Your Custom Tour</h2>

            <form onSubmit={handleCustomTourSubmit} className="space-y-8">
              {/* Destinations */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Where would you like to go? (Select multiple)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {destinations.map((destination) => (
                    <button
                      key={destination}
                      type="button"
                      onClick={() => handleDestinationToggle(destination)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                        customTour.destinations.includes(destination)
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {destination}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tour Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  What type of tour do you prefer?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {tourTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleInputChange("tourType", type)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                        customTour.tourType === type
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Location</label>
                  <select
                    value={customTour.startLocation}
                    onChange={(e) => handleInputChange("startLocation", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select starting point</option>
                    <option value="colombo">Colombo</option>
                    <option value="negombo">Negombo (Airport)</option>
                    <option value="kandy">Kandy</option>
                    <option value="galle">Galle</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    value={customTour.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="half-day">Half Day (4 hours)</option>
                    <option value="full-day">Full Day (8 hours)</option>
                    <option value="2-days">2 Days</option>
                    <option value="3-days">3 Days</option>
                    <option value="4-days">4 Days</option>
                    <option value="5-days">5 Days</option>
                    <option value="week">1 Week</option>
                    <option value="custom">Custom Duration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <select
                    value={customTour.groupSize}
                    onChange={(e) => handleInputChange("groupSize", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select group size</option>
                    <option value="solo">Solo Traveler</option>
                    <option value="couple">Couple (2 people)</option>
                    <option value="small">Small Group (3-6 people)</option>
                    <option value="medium">Medium Group (7-12 people)</option>
                    <option value="large">Large Group (13+ people)</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  What are you interested in? (Select multiple)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                        customTour.interests.includes(interest)
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferences Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference</label>
                  <select
                    value={customTour.accommodation}
                    onChange={(e) => handleInputChange("accommodation", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select accommodation</option>
                    <option value="budget">Budget Hotels</option>
                    <option value="mid-range">Mid-range Hotels</option>
                    <option value="luxury">Luxury Hotels</option>
                    <option value="boutique">Boutique Hotels</option>
                    <option value="eco">Eco Lodges</option>
                    <option value="homestay">Homestays</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transportation</label>
                  <select
                    value={customTour.transportation}
                    onChange={(e) => handleInputChange("transportation", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select transportation</option>
                    <option value="private-car">Private Car with Driver</option>
                    <option value="van">Private Van</option>
                    <option value="luxury-vehicle">Luxury Vehicle</option>
                    <option value="public-transport">Public Transport</option>
                    <option value="mixed">Mixed Transportation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per person)</label>
                  <select
                    value={customTour.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="budget">Budget ($50-100/day)</option>
                    <option value="mid-range">Mid-range ($100-200/day)</option>
                    <option value="luxury">Luxury ($200-400/day)</option>
                    <option value="premium">Premium ($400+/day)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customTour.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={customTour.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={customTour.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Additional Information
                </label>
                <textarea
                  value={customTour.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific experiences you'd like to include..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-teal-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-105"
                >
                  Request Custom Tour Quote
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your requirements and send you a personalized itinerary within 24 hours
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tours
