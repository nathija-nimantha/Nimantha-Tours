"use client"

import React, { useState } from "react"
import { Fade, Zoom } from "react-awesome-reveal"

// Images
import colomboImg from "/src/assets/img/card-Colombo.jpg"
import sigiriyaImg from "/src/assets/img/card-Sigiriya.jpg"
import kandyImg from "/src/assets/img/card-Kandy.jpg"
import nuwaraEliyaImg from "/src/assets/img/card-NuwaraEliya.jpg"
import yalaImg from "/src/assets/img/card-Yala.jpg"
import ellaImg from "/src/assets/img/card-Ella.jpg"
import galleImg from "/src/assets/img/card-Galle.jpg"
import hortonsPlainsImg from "/src/assets/img/card-HortonPlains.jpg"
import anuradhapuraImg from "/src/assets/img/card-Anuradhapura.png"
import polonnaruwaImg from "/src/assets/img/card-Polonnaruwa.jpg"
import dambullaImg from "/src/assets/img/card-DambullaRoyalCave.jpg"
import ambuluwawaImg from "/src/assets/img/card-Ambuluwawa.jpg"

interface Category {
    id: string
    name: string
    icon: string
}

interface Memory {
    id: number
    src: string
    title: string
    category: string
    description: string
    location: string
    date: string
}

const MemoriesGallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [selectedImage, setSelectedImage] = useState<Memory | null>(null)

    const categories: Category[] = [
        { id: "all", name: "All Memories", icon: "bi-grid" },
        { id: "wildlife", name: "Wildlife", icon: "bi-binoculars" },
        { id: "culture", name: "Culture", icon: "bi-building" },
        { id: "nature", name: "Nature", icon: "bi-tree" },
        { id: "adventure", name: "Adventure", icon: "bi-mountain" },
    ]

    const memories: Memory[] = [
        {
            id: 1,
            src: yalaImg,
            title: "Leopard Spotting at Yala",
            category: "wildlife",
            description: "Incredible wildlife encounter with Sri Lankan leopards",
            location: "Yala National Park",
            date: "March 2024",
        },
        {
            id: 2,
            src: sigiriyaImg,
            title: "Ancient Sigiriya Rock",
            category: "culture",
            description: "Climbing the magnificent ancient rock fortress",
            location: "Sigiriya",
            date: "February 2024",
        },
        {
            id: 3,
            src: ellaImg,
            title: "Tea Plantation Views",
            category: "nature",
            description: "Breathtaking views of lush tea plantations",
            location: "Ella",
            date: "January 2024",
        },
        {
            id: 4,
            src: kandyImg,
            title: "Temple of the Tooth",
            category: "culture",
            description: "Sacred Buddhist temple experience",
            location: "Kandy",
            date: "March 2024",
        },
        {
            id: 5,
            src: galleImg,
            title: "Galle Fort Sunset",
            category: "culture",
            description: "Historic Dutch fort at golden hour",
            location: "Galle",
            date: "February 2024",
        },
        {
            id: 6,
            src: hortonsPlainsImg,
            title: "World's End Cliff",
            category: "adventure",
            description: "Thrilling hike to the edge of the world",
            location: "Horton Plains",
            date: "January 2024",
        },
        {
            id: 7,
            src: nuwaraEliyaImg,
            title: "Little England",
            category: "nature",
            description: "Cool climate and beautiful landscapes",
            location: "Nuwara Eliya",
            date: "December 2023",
        },
        {
            id: 8,
            src: ambuluwawaImg,
            title: "Ambuluwawa Tower",
            category: "adventure",
            description: "Panoramic views from the spiral tower",
            location: "Ambuluwawa",
            date: "November 2023",
        },
    ]

    const filteredMemories =
        selectedCategory === "all"
            ? memories
            : memories.filter((memory) => memory.category === selectedCategory)

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-100 to-blue-100 rounded-full opacity-30 translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-30 -translate-x-40 translate-y-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <Fade triggerOnce>
            <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-6 animate-bounce-custom">
              Travel Memories
            </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="block text-gray-900">Captured</span>
                            <span className="block bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                Moments
              </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Relive the magical moments and unforgettable experiences from our travelers' journeys across Sri Lanka
                        </p>
                    </Fade>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <Fade key={category.id} delay={index * 100} triggerOnce>
                            <button
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                    selectedCategory === category.id
                                        ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                                }`}
                            >
                                <i className={`${category.icon} text-lg`}></i>
                                <span>{category.name}</span>
                            </button>
                        </Fade>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredMemories.map((memory, index) => (
                        <Zoom key={memory.id} delay={index * 100} triggerOnce>
                            <div
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                onClick={() => setSelectedImage(memory)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={memory.src || "/placeholder.svg"}
                                        alt={memory.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Overlay content */}
                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="font-bold text-lg mb-1">{memory.title}</h3>
                                        <p className="text-sm opacity-90">{memory.location}</p>
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {categories.find((cat) => cat.id === memory.category)?.name}
                    </span>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                        {memory.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{memory.description}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <i className="bi bi-geo-alt"></i>
                      <span>{memory.location}</span>
                    </span>
                                        <span className="flex items-center space-x-1">
                      <i className="bi bi-calendar"></i>
                      <span>{memory.date}</span>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedImage.src || "/placeholder.svg"}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[60vh] object-cover"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center space-x-2">
                    <i className="bi bi-geo-alt text-teal-500"></i>
                    <span>{selectedImage.location}</span>
                  </span>
                                    <span className="flex items-center space-x-2">
                    <i className="bi bi-calendar text-blue-500"></i>
                    <span>{selectedImage.date}</span>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to action */}
                <Fade delay={400} triggerOnce>
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Create Your Own Memories</h3>
                            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of travelers who have experienced the magic of Sri Lanka with us
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/booking" className="btn-primary group">
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-camera group-hover:animate-bounce"></i>
                    <span>Book Your Adventure</span>
                  </span>
                                </a>
                                <a
                                    href="/featuredTours"
                                    className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                                >
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-compass group-hover:animate-spin"></i>
                    <span>Explore Tours</span>
                  </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default MemoriesGallery
