"use client"

import React from "react"
import { useState } from "react"
import QuickMessageForm from "./QuickMessageForm"
import QuickMessageChat from "./QuickMessageChat"

const FloatingActions: React.FC = () => {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState<boolean>(false)
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Scroll to Top Button - Mobile Optimized */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 no-print"
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up text-lg sm:text-xl group-hover:animate-bounce"></i>
      </button>

      {/* Quick Message Button - Mobile Optimized */}
      <button
        onClick={() => setIsMessageFormOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 no-print"
        aria-label="Send quick message"
      >
        <i className="bi bi-envelope text-lg sm:text-xl group-hover:animate-pulse"></i>
      </button>

      {/* WhatsApp Button - Mobile Optimized */}
      <a
        href="https://wa.me/94779024795"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-36 right-4 sm:bottom-40 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 no-print"
        aria-label="Contact via WhatsApp"
      >
        <i className="bi bi-whatsapp text-lg sm:text-xl group-hover:animate-pulse"></i>
      </a>

      {/* Phone Button - Mobile Optimized */}
      <a
        href="tel:+94779024795"
        className="fixed bottom-52 right-4 sm:bottom-56 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 no-print"
        aria-label="Call us"
      >
        <i className="bi bi-telephone text-lg sm:text-xl group-hover:animate-pulse"></i>
      </a>

      {/* Quick Message Form Modal */}
      <QuickMessageForm isOpen={isMessageFormOpen} onClose={() => setIsMessageFormOpen(false)} />

      {/* Quick Message Chat - Left Side for Mobile */}
      <QuickMessageChat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </>
  )
}

export default FloatingActions
