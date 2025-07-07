"use client"

import React from "react"
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"

interface QuickMessageChatProps {
  isOpen: boolean
  onToggle: () => void
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ValidationErrors {
  [key: string]: string
}

const QuickMessageChat: React.FC<QuickMessageChatProps> = ({ isOpen, onToggle }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // Using 1024px as breakpoint for desktop
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onToggle()
      }
    }

    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, isMobile, onToggle])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch(import.meta.env.VITE_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      console.log("Quick Message Submitted:", formData)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSuccess(false)
        if (isMobile) {
          onToggle() // Close the modal on mobile
        }
      }, 3000)
    } catch (error) {
      console.error(error)
      setErrors({ submit: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setErrors({})
    setIsSuccess(false)
  }

  const handleClose = () => {
    setIsVisible(false)
    if (isOpen) {
      onToggle()
    }
  }

  const handleShow = () => {
    setIsVisible(true)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && isMobile) {
      onToggle()
    }
  }

  // Mobile/Tablet: Show floating button when not open, full-screen modal when open
  if (isMobile) {
    return (
      <>
        {/* Floating Chat Button - Mobile/Tablet Only - Now at bottom position */}
        {!isOpen && (
          <div className="fixed bottom-4 right-4 z-40">
            <button
              onClick={onToggle}
              className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95"
              aria-label="Open chat"
            >
              <i className="bi bi-chat-dots text-lg group-hover:animate-pulse"></i>

              {/* Notification Badge */}
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xs font-bold text-white">1</span>
              </div>

              {/* Floating Label */}
              <div className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with us
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
              </div>
            </button>
          </div>
        )}

        {/* Full Screen Modal - Mobile/Tablet Only */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                      <i className="bi bi-chat-dots text-xl"></i>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Quick Message</h2>
                      <p className="text-sm opacity-90">Send us a message instantly</p>
                    </div>
                  </div>
                  <button
                    onClick={onToggle}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-95"
                    aria-label="Close"
                  >
                    <i className="bi bi-x text-xl font-bold"></i>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <i className="bi bi-check-circle-fill text-green-500 text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Message Sent Successfully! 🎉</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Thank you for reaching out! Our travel experts will get back to you within 2-4 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <div className="animate-spin w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full"></div>
                      <span>Closing automatically...</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        <i className="bi bi-person mr-2 text-teal-600"></i>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-xl border-2 ${
                          errors.name ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-teal-500"
                        } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="bi bi-exclamation-circle mr-1"></i>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        <i className="bi bi-envelope mr-2 text-teal-600"></i>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-xl border-2 ${
                          errors.email ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-teal-500"
                        } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="bi bi-exclamation-circle mr-1"></i>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        <i className="bi bi-tag mr-2 text-teal-600"></i>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-xl border-2 ${
                          errors.subject ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-teal-500"
                        } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
                        placeholder="What can we help you with?"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="bi bi-exclamation-circle mr-1"></i>
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        <i className="bi bi-chat-text mr-2 text-teal-600"></i>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full p-3 rounded-xl border-2 ${
                          errors.message ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-teal-500"
                        } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none`}
                        placeholder="Tell us about your travel plans, preferred dates, group size, interests, or any specific requirements..."
                        disabled={isSubmitting}
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="bi bi-exclamation-circle mr-1"></i>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-red-600 text-sm flex items-center">
                          <i className="bi bi-exclamation-triangle mr-2"></i>
                          {errors.submit}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send"></i>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Quick Contact Options */}
                {!isSuccess && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center mb-4 font-medium">Need immediate assistance?</p>
                    <div className="grid grid-cols-3 gap-3">
                      <a
                        href="tel:+94779024795"
                        className="flex flex-col items-center space-y-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-blue-600 hover:text-blue-700 transition-all duration-300 active:scale-95"
                      >
                        <i className="bi bi-telephone text-lg"></i>
                        <span className="text-xs font-medium">Call</span>
                      </a>
                      <a
                        href="https://wa.me/94779024795"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center space-y-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl text-green-600 hover:text-green-700 transition-all duration-300 active:scale-95"
                      >
                        <i className="bi bi-whatsapp text-lg"></i>
                        <span className="text-xs font-medium">WhatsApp</span>
                      </a>
                      <a
                        href="mailto:info@nimanthatours.com"
                        className="flex flex-col items-center space-y-2 p-3 bg-teal-50 hover:bg-teal-100 rounded-xl text-teal-600 hover:text-teal-700 transition-all duration-300 active:scale-95"
                      >
                        <i className="bi bi-envelope text-lg"></i>
                        <span className="text-xs font-medium">Email</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  // Desktop: Show chat dock at bottom right (visible by default)
  // If chat is hidden, show only a small floating button to restore it
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={handleShow}
          className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95"
          aria-label="Open chat"
        >
          <i className="bi bi-chat-dots text-lg group-hover:animate-pulse"></i>

          {/* Notification Badge */}
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">1</span>
          </div>

          {/* Floating Label */}
          <div className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 right-4 z-40">
      {/* Chat Window - Desktop Only */}
      <div
        className={`mb-0 bg-white shadow-2xl border border-gray-300 transition-all duration-300 ease-in-out transform origin-bottom ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-full pointer-events-none"
        }`}
        style={{
          width: "380px",
          height: isOpen ? "580px" : "0px",
          borderRadius: "16px 16px 0 0",
          borderBottom: "none",
        }}
      >
        {/* Chat Header - Desktop */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white/30">
                  NT
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-base truncate">Nimantha Tours</h3>
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="truncate">Online • Typically replies instantly</span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={onToggle}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 active:scale-95"
                aria-label="Minimize chat"
              >
                <i className="bi bi-dash text-xl font-bold"></i>
              </button>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-red-500/80 hover:bg-red-500 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 active:scale-95"
                aria-label="Close chat"
              >
                <i className="bi bi-x text-lg font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Body - Desktop */}
        <div
          className="overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-4"
          style={{ height: "calc(100% - 80px)" }}
        >
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <i className="bi bi-check-circle-fill text-green-500 text-3xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Message Sent Successfully! 🎉</h4>
              <p className="text-gray-600 text-sm mb-4 px-4 leading-relaxed">
                Thank you for reaching out! Our travel experts will get back to you within 2-4 hours with personalized
                recommendations.
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 active:scale-95"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              {/* Welcome Message Bubble */}
              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    NT
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-200 max-w-xs">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        👋 <strong>Welcome to Nimantha Tours!</strong>
                        <br />
                        <br />
                        How can we help you plan your perfect Sri Lankan adventure? Share your travel dreams with us!
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 ml-3">Just now</div>
                  </div>
                </div>
              </div>

              {/* Quick Message Form - Enhanced */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border-2 ${
                      errors.name ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm bg-white placeholder-gray-400`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <i className="bi bi-exclamation-circle mr-1"></i>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border-2 ${
                      errors.email ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm bg-white placeholder-gray-400`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <i className="bi bi-exclamation-circle mr-1"></i>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border-2 ${
                      errors.subject ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm bg-white placeholder-gray-400`}
                    placeholder="What can we help you with?"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <i className="bi bi-exclamation-circle mr-1"></i>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full p-3 rounded-xl border-2 ${
                      errors.message ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm bg-white placeholder-gray-400`}
                    placeholder="Tell us about your travel plans, preferred dates, group size, interests, or any specific requirements..."
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <i className="bi bi-exclamation-circle mr-1"></i>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
                    <p className="text-red-600 text-sm flex items-center">
                      <i className="bi bi-exclamation-triangle mr-2"></i>
                      {errors.submit}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send text-sm"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Quick Contact Options - Enhanced */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4 font-medium">Need immediate assistance?</p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+94779024795"
                    className="flex flex-col items-center space-y-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-blue-600 hover:text-blue-700 transition-all duration-300 active:scale-95 group"
                  >
                    <i className="bi bi-telephone text-lg group-hover:animate-pulse"></i>
                    <span className="text-xs font-medium">Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/94779024795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl text-green-600 hover:text-green-700 transition-all duration-300 active:scale-95 group"
                  >
                    <i className="bi bi-whatsapp text-lg group-hover:animate-pulse"></i>
                    <span className="text-xs font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@nimanthatours.com"
                    className="flex flex-col items-center space-y-2 p-3 bg-teal-50 hover:bg-teal-100 rounded-xl text-teal-600 hover:text-teal-700 transition-all duration-300 active:scale-95 group"
                  >
                    <i className="bi bi-envelope text-lg group-hover:animate-pulse"></i>
                    <span className="text-xs font-medium">Email</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chat Tab Button - Desktop Only (Always visible by default) */}
      <div
        className={`bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-xl cursor-pointer transition-all duration-300 ${
          isOpen ? "rounded-none" : "rounded-t-2xl hover:shadow-2xl hover:scale-105"
        }`}
        onClick={onToggle}
        style={{ width: "380px" }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {/* Avatar with online indicator */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white/30">
                NT
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-sm truncate">Nimantha Tours</h3>
                {/* Unread message indicator */}
                {!isOpen && <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0"></div>}
              </div>
              <p className="text-xs text-white/90 truncate">
                {isOpen ? "Online • Ready to help you plan your trip" : "👋 Hi! Ready to explore Sri Lanka?"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Notification Badge and Animation */}
            {!isOpen && (
              <>
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                  <i className="bi bi-chevron-up text-white text-sm animate-bounce"></i>
                </div>
              </>
            )}

            {/* Close Button - Always visible */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-red-500/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-white transition-all duration-200 active:scale-95"
              aria-label="Close chat dock"
            >
              <i className="bi bi-x text-sm font-bold"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickMessageChat
