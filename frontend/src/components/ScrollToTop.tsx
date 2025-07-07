"use client"

import React from "react"
import { useState, useEffect } from "react"

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95"
            aria-label="Scroll to top"
          >
            <i className="bi bi-arrow-up text-lg group-hover:animate-bounce"></i>
          </button>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
