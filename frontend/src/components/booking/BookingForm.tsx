"use client"

import React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Fade, Slide } from "react-awesome-reveal"

interface FormData {
  title: string
  name: string
  nationality: string
  email: string
  phone: string
  startDate: string
  nights: string
  adults: string
  children: string
  accommodation: string
  specialNote: string
  hearAboutUs: string
  otherDetails: string
}

interface ValidationErrors {
  [key: string]: string
}

interface ToastMessage {
  type: "success" | "error" | "warning"
  message: string
  show: boolean
}

const BookingForm: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [toast, setToast] = useState<ToastMessage>({
    type: "success",
    message: "",
    show: false,
  })
  const [formData, setFormData] = useState<FormData>({
    title: "",
    name: "",
    nationality: "",
    email: "",
    phone: "",
    startDate: "",
    nights: "",
    adults: "",
    children: "",
    accommodation: "",
    specialNote: "",
    hearAboutUs: "",
    otherDetails: "",
  })

  const showToast = (type: "success" | "error" | "warning", message: string) => {
    setToast({ type, message, show: true })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }))
    }, 5000)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/
    return nameRegex.test(name.trim())
  }

  const validateNationality = (nationality: string): boolean => {
    const nationalityRegex = /^[a-zA-Z\s]{2,50}$/
    return nationalityRegex.test(nationality.trim())
  }

  const validateDate = (date: string): boolean => {
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return selectedDate >= today
  }

  const validateStep1 = (): ValidationErrors => {
    const stepErrors: ValidationErrors = {}

    if (!formData.title.trim()) {
      stepErrors.title = "Please select a title"
    }

    if (!formData.name.trim()) {
      stepErrors.name = "Name is required"
    } else if (!validateName(formData.name)) {
      stepErrors.name = "Name should contain only letters and be 2-50 characters long"
    }

    if (!formData.nationality.trim()) {
      stepErrors.nationality = "Nationality is required"
    } else if (!validateNationality(formData.nationality)) {
      stepErrors.nationality = "Nationality should contain only letters and be 2-50 characters long"
    }

    if (!formData.email.trim()) {
      stepErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      stepErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      stepErrors.phone = "Phone number is required"
    }

    return stepErrors
  }

  const validateStep2 = (): ValidationErrors => {
    const stepErrors: ValidationErrors = {}

    if (!formData.startDate) {
      stepErrors.startDate = "Start date is required"
    } else if (!validateDate(formData.startDate)) {
      stepErrors.startDate = "Start date cannot be in the past"
    }

    if (!formData.nights) {
      stepErrors.nights = "Number of nights is required"
    } else if (Number.parseInt(formData.nights) < 1 || Number.parseInt(formData.nights) > 365) {
      stepErrors.nights = "Number of nights must be between 1 and 365"
    }

    if (!formData.adults) {
      stepErrors.adults = "Number of adults is required"
    } else if (Number.parseInt(formData.adults) < 1 || Number.parseInt(formData.adults) > 20) {
      stepErrors.adults = "Number of adults must be between 1 and 20"
    }

    if (formData.children && (Number.parseInt(formData.children) < 0 || Number.parseInt(formData.children) > 20)) {
      stepErrors.children = "Number of children must be between 0 and 20"
    }

    if (!formData.accommodation) {
      stepErrors.accommodation = "Please select accommodation type"
    }

    return stepErrors
  }

  const validateStep3 = (): ValidationErrors => {
    const stepErrors: ValidationErrors = {}

    if (!formData.hearAboutUs) {
      stepErrors.hearAboutUs = "Please tell us how you heard about us"
    }

    if (formData.hearAboutUs === "other" && !formData.otherDetails.trim()) {
      stepErrors.otherDetails = "Please specify how you heard about us"
    }

    return stepErrors
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleNext = (): void => {
    let stepErrors: ValidationErrors = {}

    if (step === 1) {
      stepErrors = validateStep1()
    } else if (step === 2) {
      stepErrors = validateStep2()
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      showToast("error", "Please fix the errors before proceeding")
      return
    }

    setErrors({})
    setStep(step + 1)
    showToast("success", `Step ${step} completed successfully!`)
  }

  const handleBack = (): void => {
    setStep(step - 1)
    setErrors({})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const step3Errors = validateStep3()
    if (Object.keys(step3Errors).length > 0) {
      setErrors(step3Errors)
      showToast("error", "Please fix the errors before submitting")
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form Data Submitted: ", formData)

      showToast("success", "🎉 Booking submitted successfully! We will contact you within 24 hours.")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: "",
          name: "",
          nationality: "",
          email: "",
          phone: "",
          startDate: "",
          nights: "",
          adults: "",
          children: "",
          accommodation: "",
          specialNote: "",
          hearAboutUs: "",
          otherDetails: "",
        })
        setStep(1)
      }, 3000)
    } catch (error) {
      showToast("error", "Failed to submit booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStepTitle = (): string => {
    switch (step) {
      case 1:
        return "Personal Information"
      case 2:
        return "Travel Details"
      case 3:
        return "Additional Information"
      default:
        return "Booking Form"
    }
  }

  const getStepIcon = (): string => {
    switch (step) {
      case 1:
        return "bi-person-fill"
      case 2:
        return "bi-calendar-event"
      case 3:
        return "bi-chat-square-text"
      default:
        return "bi-form"
    }
  }

  const getToastIcon = (type: string): string => {
    switch (type) {
      case "success":
        return "bi-check-circle-fill"
      case "error":
        return "bi-exclamation-triangle-fill"
      case "warning":
        return "bi-info-circle-fill"
      default:
        return "bi-info-circle-fill"
    }
  }

  const getToastColor = (type: string): string => {
    switch (type) {
      case "success":
        return "bg-green-500"
      case "error":
        return "bg-red-500"
      case "warning":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
      <div className="w-full">
        {/* Toast Notification */}
        <div
            className={`fixed top-24 right-4 z-50 transform transition-all duration-500 ease-in-out ${
                toast.show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
          <div className={`${getToastColor(toast.type)} text-white px-6 py-4 rounded-xl shadow-2xl max-w-md`}>
            <div className="flex items-center space-x-3">
              <i className={`${getToastIcon(toast.type)} text-xl`}></i>
              <div>
                <p className="font-semibold text-sm">{toast.message}</p>
              </div>
              <button
                  onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                  className="ml-auto text-white hover:text-gray-200 transition-colors duration-200"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <Fade triggerOnce>
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-full">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${getStepIcon()} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Fill in your details</h2>
                    <p className="text-gray-600 text-sm">
                      Step {step} of 3 - {getStepTitle()}
                    </p>
                  </div>
                </div>

                {/* Step indicators */}
                <div className="flex space-x-2 justify-center sm:justify-end">
                  {[1, 2, 3].map((stepNum) => (
                      <div
                          key={stepNum}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                              stepNum === step
                                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white scale-110"
                                  : stepNum < step
                                      ? "bg-green-500 text-white"
                                      : "bg-gray-200 text-gray-500"
                          }`}
                      >
                        {stepNum < step ? <i className="bi bi-check text-xs"></i> : stepNum}
                      </div>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative">
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                      className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Personal</span>
                  <span>Travel</span>
                  <span>Additional</span>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {step === 1 && (
                  <Slide direction="right" triggerOnce>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-person-badge mr-2 text-teal-500"></i>
                            Title *
                          </label>
                          <select
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.title ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              required
                          >
                            <option value="" disabled>
                              Select Title
                            </option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                          </select>
                          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-person mr-2 text-teal-500"></i>
                            Full Name *
                          </label>
                          <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.name ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="Your full name"
                              required
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center">
                          <i className="bi bi-globe mr-2 text-teal-500"></i>
                          Nationality *
                        </label>
                        <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg border-2 ${
                                errors.nationality ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                            placeholder="Your nationality"
                            required
                        />
                        {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-envelope mr-2 text-teal-500"></i>
                            Email Address *
                          </label>
                          <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.email ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="your.email@example.com"
                              required
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-telephone mr-2 text-teal-500"></i>
                            Phone Number *
                          </label>
                          <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.phone ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="+1 234 567 8900"
                              required
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                    </div>
                  </Slide>
              )}

              {step === 2 && (
                  <Slide direction="left" triggerOnce>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-calendar-date mr-2 text-teal-500"></i>
                            Start Date *
                          </label>
                          <input
                              type="date"
                              name="startDate"
                              value={formData.startDate}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.startDate ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              required
                          />
                          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-moon mr-2 text-teal-500"></i>
                            Number of Nights *
                          </label>
                          <input
                              type="number"
                              name="nights"
                              value={formData.nights}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.nights ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="7"
                              min="1"
                              max="365"
                              required
                          />
                          {errors.nights && <p className="text-red-500 text-sm mt-1">{errors.nights}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-people mr-2 text-teal-500"></i>
                            Number of Adults *
                          </label>
                          <input
                              type="number"
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.adults ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="2"
                              min="1"
                              max="20"
                              required
                          />
                          {errors.adults && <p className="text-red-500 text-sm mt-1">{errors.adults}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2 flex items-center">
                            <i className="bi bi-person-hearts mr-2 text-teal-500"></i>
                            Number of Children
                          </label>
                          <input
                              type="number"
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              className={`w-full p-3 rounded-lg border-2 ${
                                  errors.children ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                              } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                              placeholder="0"
                              min="0"
                              max="20"
                          />
                          {errors.children && <p className="text-red-500 text-sm mt-1">{errors.children}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center">
                          <i className="bi bi-building mr-2 text-teal-500"></i>
                          Type of Accommodation *
                        </label>
                        <select
                            name="accommodation"
                            value={formData.accommodation}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg border-2 ${
                                errors.accommodation
                                    ? "border-red-300 focus:ring-red-400"
                                    : "border-gray-200 focus:ring-teal-400"
                            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                            required
                        >
                          <option value="" disabled>
                            Select accommodation type
                          </option>
                          <option value="5-star hotel">5 Star Luxury Hotel</option>
                          <option value="4-star hotel">4 Star Hotel</option>
                          <option value="3-star hotel">3 Star Hotel</option>
                          <option value="luxury boutique">Luxury Boutique Hotel</option>
                          <option value="eco-lodge">Eco Lodge</option>
                          <option value="wallet-friendly">Budget Friendly</option>
                        </select>
                        {errors.accommodation && <p className="text-red-500 text-sm mt-1">{errors.accommodation}</p>}
                      </div>
                    </div>
                  </Slide>
              )}

              {step === 3 && (
                  <Slide direction="up" triggerOnce>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center">
                          <i className="bi bi-chat-square-text mr-2 text-teal-500"></i>
                          Special Requests or Notes
                        </label>
                        <textarea
                            name="specialNote"
                            value={formData.specialNote}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 resize-none"
                            placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center">
                          <i className="bi bi-question-circle mr-2 text-teal-500"></i>
                          How did you hear about us? *
                        </label>
                        <select
                            name="hearAboutUs"
                            value={formData.hearAboutUs}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg border-2 ${
                                errors.hearAboutUs ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                            required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="google">Google Search</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="twitter">Twitter</option>
                          <option value="trip-advisor">TripAdvisor</option>
                          <option value="friend-family">Friend or Family Recommendation</option>
                          <option value="travel-blog">Travel Blog</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.hearAboutUs && <p className="text-red-500 text-sm mt-1">{errors.hearAboutUs}</p>}
                      </div>

                      {formData.hearAboutUs === "other" && (
                          <Fade triggerOnce>
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">Please specify</label>
                              <input
                                  type="text"
                                  name="otherDetails"
                                  value={formData.otherDetails}
                                  onChange={handleChange}
                                  className={`w-full p-3 rounded-lg border-2 ${
                                      errors.otherDetails
                                          ? "border-red-300 focus:ring-red-400"
                                          : "border-gray-200 focus:ring-teal-400"
                                  } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                                  placeholder="Please tell us how you found us"
                              />
                              {errors.otherDetails && <p className="text-red-500 text-sm mt-1">{errors.otherDetails}</p>}
                            </div>
                          </Fade>
                      )}
                    </div>
                  </Slide>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                {step > 1 ? (
                    <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        disabled={isSubmitting}
                    >
                      <i className="bi bi-arrow-left"></i>
                      <span>Back</span>
                    </button>
                ) : (
                    <div></div>
                )}

                <div className="flex items-center space-x-3">
                  {step < 3 ? (
                      <button
                          type="button"
                          onClick={handleNext}
                          className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                          disabled={isSubmitting}
                      >
                        <span>Next Step</span>
                        <i className="bi bi-arrow-right"></i>
                      </button>
                  ) : (
                      <button
                          type="submit"
                          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              <span>Submitting...</span>
                            </>
                        ) : (
                            <>
                              <i className="bi bi-check-circle"></i>
                              <span>Submit Booking</span>
                            </>
                        )}
                      </button>
                  )}
                </div>
              </div>
              {/* Quick Response Guarantee */}
              <Fade delay={400} triggerOnce>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-info-circle text-white text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                          <i className="bi bi-lightning-charge text-yellow-600 mr-2"></i>
                          Quick Response Guarantee
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          We respond to all inquiries within{" "}
                          <span className="font-semibold text-orange-600">2 hours during business hours</span>, and within{" "}
                          <span className="font-semibold text-orange-600">24 hours on weekends</span>. Your dream vacation
                          planning starts immediately!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                              <i className="bi bi-clock text-teal-600"></i>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Business Hours</div>
                              <div className="text-xs">Mon-Fri: 8AM-8PM</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <i className="bi bi-calendar text-blue-600"></i>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Weekends</div>
                              <div className="text-xs">Sat-Sun: 9AM-6PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </form>
          </div>
        </Fade>
      </div>
  )
}

export default BookingForm
