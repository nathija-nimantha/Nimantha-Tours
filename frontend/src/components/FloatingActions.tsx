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

      {/* Quick Message Form Modal */}
      <QuickMessageForm isOpen={isMessageFormOpen} onClose={() => setIsMessageFormOpen(false)} />

      {/* Quick Message Chat - Left Bottom Only */}
      <QuickMessageChat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </>
  )
}

export default FloatingActions
