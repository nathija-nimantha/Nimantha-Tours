"use client"

import React from "react"
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"

interface QuickMessageFormProps {
  isOpen: boolean
  onClose: () => void
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

const QuickMessageForm: React.FC<QuickMessageFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

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

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error(error)
      setErrors({ submit: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <i className="bi bi-envelope text-white text-lg"></i>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Quick Message</h2>
              <p className="text-sm text-gray-600">Send us a message instantly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 active:scale-95"
            aria-label="Close modal"
          >
            <i className="bi bi-x text-lg font-bold"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-check-circle-fill text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-4">Thank you for your message. We'll get back to you within 24 hours.</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <i className="bi bi-clock"></i>
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
                  className={`input-modern ${errors.name ? "input-error" : ""}`}
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
                  className={`input-modern ${errors.email ? "input-error" : ""}`}
                  placeholder="Enter your email address"
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
                  className={`input-modern ${errors.subject ? "input-error" : ""}`}
                  placeholder="What's this about?"
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
                  className={`input-modern resize-none ${errors.message ? "input-error" : ""}`}
                  placeholder="Tell us how we can help you..."
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
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                {isSubmitting ? (
                  <>
                    <div className="spinner mr-2"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-2">Need immediate assistance?</p>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <a
                  href="tel:+94779024795"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors duration-300 active:scale-95"
                >
                  <i className="bi bi-telephone"></i>
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/94779024795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium transition-colors duration-300 active:scale-95"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuickMessageForm
