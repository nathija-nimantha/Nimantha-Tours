"use client"

import React from "react"
import { useRef, useEffect, useState, useCallback } from "react"

// Images
import sigiriyaImg from "../assets/img/card-Sigiriya.jpg"
import ellaImg from "../assets/img/card-Ella.jpg"
import kandyImg from "../assets/img/card-Kandy.jpg"
import galleImg from "../assets/img/card-Galle.jpg"
import nuwaraEliyaImg from "../assets/img/card-NuwaraEliya.jpg"
import yalaImg from "../assets/img/card-Yala.jpg"
import anuradhapuraImg from "../assets/img/card-Anuradhapura.png"
import polonnaruwaImg from "../assets/img/card-Polonnaruwa.jpg"
import dambullaImg from "../assets/img/card-DambullaRoyalCave.jpg"
import hortonsPlainsImg from "../assets/img/card-HortonPlains.jpg"
import colomboImg from "../assets/img/card-Colombo.jpg"
import ambuluwawaImg from "../assets/img/card-Ambuluwawa.jpg"

interface Tour {
  title: string
  img: string
  description: string
  link: string
  duration: string
  difficulty: string
  highlights: string[]
}

const FeaturedTours: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [dragStartTime, setDragStartTime] = useState<number>(0)
  const [dragDistance, setDragDistance] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth <= 1024

      setIsMobile(isMobileDevice || (isTouchDevice && isSmallScreen))
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (isAutoScrolling && !isDragging) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const scrollAmount = container.clientWidth * 0.8

          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" })
          } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" })
          }
        }
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoScrolling, isDragging])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || !scrollContainerRef.current) return

      setIsDragging(true)
      setIsAutoScrolling(false)
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
      setScrollLeft(scrollContainerRef.current.scrollLeft)
      setDragStartTime(Date.now())
      setDragDistance(0)

      scrollContainerRef.current.style.cursor = "grabbing"
      scrollContainerRef.current.style.userSelect = "none"
    },
    [isMobile],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || !isDragging || !scrollContainerRef.current) return

      e.preventDefault()
      const x = e.pageX - scrollContainerRef.current.offsetLeft
      const walk = (x - startX) * 2
      const newScrollLeft = scrollLeft - walk

      scrollContainerRef.current.scrollLeft = newScrollLeft
      setDragDistance(Math.abs(walk))
    },
    [isMobile, isDragging, startX, scrollLeft],
  )

  const handleMouseUp = useCallback(() => {
    if (isMobile || !scrollContainerRef.current) return

    setIsDragging(false)
    scrollContainerRef.current.style.cursor = "grab"
    scrollContainerRef.current.style.userSelect = "auto"

    const dragDuration = Date.now() - dragStartTime
    if (dragDistance < 50 && dragDuration < 200) {
      setTimeout(() => setIsAutoScrolling(true), 3000)
    } else {
      setTimeout(() => setIsAutoScrolling(true), 8000)
    }
  }, [isMobile, dragStartTime, dragDistance])

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return

    if (isDragging) {
      handleMouseUp()
    }
  }, [isMobile, isDragging, handleMouseUp])

  const handleCardClick = useCallback(
    (e: React.MouseEvent, link: string) => {
      if (isMobile) {
        window.location.href = link
        return
      }

      const dragDuration = Date.now() - dragStartTime
      if (dragDistance > 10 || dragDuration > 300) {
        e.preventDefault()
        return
      }

      window.location.href = link
    },
    [isMobile, dragStartTime, dragDistance],
  )

  const tours: Tour[] = [
    {
      title: "Sigiriya",
      img: sigiriyaImg,
      description: "Ancient rock fortress with stunning panoramic views and fascinating frescoes.",
      link: "/tours/sigiriya",
      duration: "Full Day",
      difficulty: "Moderate",
      highlights: ["Ancient Frescoes", "Lion's Gate", "Summit Views"],
    },
    {
      title: "Ella",
      img: ellaImg,
      description: "Scenic highlands with lush tea plantations and breathtaking mountain views.",
      link: "/tours/ella",
      duration: "2-3 Days",
      difficulty: "Easy",
      highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Factories"],
    },
    {
      title: "Kandy",
      img: kandyImg,
      description: "Cultural capital with the sacred Temple of the Tooth Relic.",
      link: "/tours/kandy",
      duration: "Full Day",
      difficulty: "Easy",
      highlights: ["Temple of Tooth", "Royal Botanical Gardens", "Cultural Shows"],
    },
    {
      title: "Galle",
      img: galleImg,
      description: "Historic fortified city with well-preserved Dutch colonial architecture.",
      link: "/tours/galle",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Galle Fort", "Lighthouse", "Colonial Architecture"],
    },
    {
      title: "Nuwara Eliya",
      img: nuwaraEliyaImg,
      description: "Known as 'Little England' for its cool climate and pristine tea plantations.",
      link: "/tours/nuwara-eliya",
      duration: "1-2 Days",
      difficulty: "Easy",
      highlights: ["Tea Plantations", "Gregory Lake", "Strawberry Fields"],
    },
    {
      title: "Yala National Park",
      img: yalaImg,
      description: "Premier wildlife reserve famous for leopards, elephants, and diverse fauna.",
      link: "/tours/yala",
      duration: "Full Day",
      difficulty: "Easy",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching"],
    },
    {
      title: "Anuradhapura",
      img: anuradhapuraImg,
      description: "Ancient city with well-preserved ruins and sacred Buddhist sites.",
      link: "/tours/anuradhapura",
      duration: "Full Day",
      difficulty: "Easy",
      highlights: ["Sri Maha Bodhi", "Ruwanwelisaya", "Isurumuniya"],
    },
    {
      title: "Polonnaruwa",
      img: polonnaruwaImg,
      description: "Medieval capital with impressive archaeological sites and ancient temples.",
      link: "/tours/polonnaruwa",
      duration: "Full Day",
      difficulty: "Easy",
      highlights: ["Gal Vihara", "Royal Palace", "Parakrama Samudra"],
    },
    {
      title: "Dambulla Cave Temple",
      img: dambullaImg,
      description: "Famous cave temple complex with stunning Buddha statues and frescoes.",
      link: "/tours/dambulla",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Golden Buddha", "Cave Frescoes", "Rock Temple"],
    },
    {
      title: "Horton Plains National Park",
      img: hortonsPlainsImg,
      description: "High-altitude national park known for its unique biodiversity and scenic hikes.",
      link: "/tours/hortons-plains",
      duration: "Full Day",
      difficulty: "Moderate",
      highlights: ["World's End", "Baker's Falls", "Flora & Fauna"],
    },
    {
      title: "Colombo City Tour",
      img: colomboImg,
      description:
        "Explore the vibrant capital city with a mix of modern attractions and colonial heritage.",
      link: "/tours/colombo",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Galle Face Green", "Gangaramaya Temple", "National Museum"],
    },
    {
      title: "Ambuluwawa Tower",
      img: ambuluwawaImg,
      description:
        "Unique tower offering panoramic views of the surrounding mountains and valleys, set in a serene environment.",
      link: "/tours/ambuluwawa",
      duration: "Half Day",
      difficulty: "Moderate",
      highlights: ["360° Views", "Biodiversity Park", "Cultural Significance"],
    },
  ]

  const getDifficultyColor = (difficulty: string): string => {
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-30 -translate-x-18 sm:-translate-x-24 lg:-translate-x-36 -translate-y-18 sm:-translate-y-24 lg:-translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tl from-orange-100 to-yellow-100 rounded-full opacity-30 translate-x-24 sm:translate-x-32 lg:translate-x-48 translate-y-24 sm:translate-y-32 lg:translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 animate-bounce">
            Discover Sri Lanka
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="block text-gray-900">Explore Our</span>
            <span className="block bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
              Featured Destinations
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ancient wonders to natural paradises, discover the most captivating destinations that Sri Lanka has to
            offer
          </p>
        </div>

        {!isMobile && (
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <i className="bi bi-mouse"></i>
              <span>Click and drag to scroll</span>
              <i className="bi bi-arrow-left-right"></i>
            </p>
          </div>
        )}

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className={`flex space-x-4 sm:space-x-6 snap-x snap-mandatory overflow-x-auto pb-4 scrollbar-hide ${
              !isMobile ? "cursor-grab active:cursor-grabbing select-none" : ""
            }`}
            onMouseDown={!isMobile ? handleMouseDown : undefined}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            onMouseUp={!isMobile ? handleMouseUp : undefined}
            onMouseLeave={() => {
              if (!isMobile && handleMouseLeave) handleMouseLeave()
              setIsAutoScrolling(true)
            }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {tours.map((tour, index) => (
              <div
                key={index}
                className="snap-start flex-none w-72 sm:w-80 lg:w-96 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleCardClick(e, tour.link)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.img || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {tour.duration}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(tour.difficulty)}`}
                    >
                      {tour.difficulty}
                    </span>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <i className="bi bi-arrow-right text-white text-2xl"></i>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-semibold text-sm sm:text-base">
                      {isMobile ? "Tap to explore" : "Click to explore"}
                    </span>
                    <i className="bi bi-arrow-right text-teal-600 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/tours"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group text-sm sm:text-base"
          >
            <span>View All Destinations</span>
            <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export { FeaturedTours }
