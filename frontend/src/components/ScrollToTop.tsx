"use client"

import React from "react"
import { useState, useEffect } from "react"

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-40 w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
            aria-label="Scroll to top"
        >
            <i className="bi bi-arrow-up text-lg group-hover:animate-bounce"></i>
        </button>
    )
}

export default ScrollToTop
