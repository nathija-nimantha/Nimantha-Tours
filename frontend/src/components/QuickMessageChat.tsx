"use client"

import React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

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
    // If chat is open, close it first
    if (isOpen) {
      onToggle()
    }
  }

  const handleShow = () => {
    setIsVisible(true)
  }

  // If chat is hidden, show only a small floating button to restore it
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <button
          onClick={handleShow}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95"
          aria-label="Open chat"
        >
          <i className="bi bi-chat-dots text-lg sm:text-xl group-hover:animate-pulse"></i>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">1</span>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-4 sm:left-6 z-50">
      {/* Chat Window - Mobile Optimized */}
      <div
        className={`mb-0 bg-white shadow-2xl border border-gray-300 transition-all duration-300 ease-in-out transform origin-bottom ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-full pointer-events-none"
        }`}
        style={{
          width: "min(90vw, 350px)",
          maxWidth: "350px",
          height: isOpen ? "min(80vh, 500px)" : "0px",
          borderRadius: "12px 12px 0 0",
          borderBottom: "none",
        }}
      >
        {/* Chat Header - Mobile Optimized */}
        <div className="bg-white border-b border-gray-200 p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  NT
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm truncate">Nimantha Tours</h3>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                  <span className="truncate">Active now</span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <button
                onClick={onToggle}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 active:scale-95"
                aria-label="Minimize chat"
              >
                <i className="bi bi-dash text-lg sm:text-xl font-bold"></i>
              </button>
              <button
                onClick={handleClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 flex items-center justify-center text-red-600 hover:text-red-700 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                aria-label="Close chat"
              >
                <i className="bi bi-x text-sm sm:text-lg font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Body - Mobile Optimized */}
        <div className="overflow-y-auto bg-gray-50 p-3" style={{ height: "calc(100% - 60px)" }}>
          {isSuccess ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="bi bi-check-circle-fill text-green-500 text-xl sm:text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Message Sent!</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 px-2">
                Thank you for your message. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors duration-200 active:scale-95"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              {/* Welcome Message Bubble */}
              <div className="mb-4">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                    NT
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-gray-200 max-w-xs">
                      <p className="text-xs sm:text-sm text-gray-800">
                        👋 Hi there! How can we help you plan your Sri Lankan adventure?
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 ml-2">Just now</div>
                  </div>
                </div>
              </div>

              {/* Quick Message Form - Mobile Optimized */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2.5 sm:p-3 rounded-full border ${
                      errors.name ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm bg-white`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-3">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2.5 sm:p-3 rounded-full border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm bg-white`}
                    placeholder="Your email"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-3">{errors.email}</p>}
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-2.5 sm:p-3 rounded-full border ${
                      errors.subject ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm bg-white`}
                    placeholder="Subject"
                    disabled={isSubmitting}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-3">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full p-2.5 sm:p-3 rounded-2xl border ${
                      errors.message ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm bg-white`}
                    placeholder="Type your message..."
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-3">{errors.message}</p>}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                    <p className="text-red-600 text-xs flex items-center">
                      <i className="bi bi-exclamation-triangle mr-1"></i>
                      {errors.submit}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 text-xs sm:text-sm active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send</span>
                        <i className="bi bi-send text-xs"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Quick Contact Options - Mobile Optimized */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center mb-2">Or contact us directly:</p>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a
                    href="tel:+94779024795"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors duration-300 active:scale-95"
                  >
                    <i className="bi bi-telephone"></i>
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/94779024795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-xs font-medium transition-colors duration-300 active:scale-95"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@nimanthatours.com"
                    className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 text-xs font-medium transition-colors duration-300 active:scale-95"
                  >
                    <i className="bi bi-envelope"></i>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chat Tab Button - Mobile Optimized */}
      <div
        className={`bg-white border border-gray-300 border-b-0 shadow-lg cursor-pointer transition-all duration-300 ${
          isOpen ? "rounded-none" : "rounded-t-lg hover:shadow-xl"
        }`}
        onClick={onToggle}
        style={{ width: "min(90vw, 350px)", maxWidth: "350px" }}
      >
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            {/* Avatar with online indicator */}
            <div className="relative flex-shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                NT
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 text-sm truncate">Nimantha Tours</h3>
                {/* Unread message indicator */}
                {!isOpen && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>}
              </div>
              <p className="text-xs text-gray-500 truncate">
                {isOpen ? "Active now" : "👋 Hi there! How can we help you..."}
              </p>
            </div>
          </div>

          {/* Close Button and Notification Badge */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {!isOpen && (
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">1</span>
              </div>
            )}
            {!isOpen && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 flex items-center justify-center text-red-600 hover:text-red-700 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                aria-label="Close chat completely"
              >
                <i className="bi bi-x text-xs sm:text-sm font-bold"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickMessageChat
