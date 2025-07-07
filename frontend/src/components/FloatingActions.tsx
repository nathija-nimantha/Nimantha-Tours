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
      {/* Quick Message Form Modal */}
      <QuickMessageForm isOpen={isMessageFormOpen} onClose={() => setIsMessageFormOpen(false)} />

      {/* Quick Message Chat - Left Bottom Only */}
      <QuickMessageChat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </>
  )
}

export default FloatingActions
