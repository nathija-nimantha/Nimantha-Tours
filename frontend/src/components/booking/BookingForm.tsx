"use client"
import React from "react"
import { useState, useEffect, useRef } from "react"
import { Fade } from "react-awesome-reveal"
import { ChevronDown, Check } from "lucide-react"

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
  type: "success" | "error" | "warning" | "info"
  message: string
  show: boolean
}

interface SelectOption {
  value: string
  label: string
  icon: React.ReactNode
}

const CustomSelect: React.FC<{
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder: string
  error?: string
  required?: boolean
}> = ({ options, value, onChange, placeholder, error, required }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const selected = options.find((option) => option.value === value)
    setSelectedOption(selected || null)
  }, [value, options])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (option: SelectOption) => {
    onChange(option.value)
    setIsOpen(false)
  }

  return (
      <div className={`relative ${isOpen ? "z-40" : ""}`} ref={dropdownRef}>
        <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm text-left flex items-center justify-between ${
                error ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50" : ""
            }`}
        >
          <div className="flex items-center space-x-3">
            {selectedOption ? (
                <>
                  <span className="text-blue-500 flex-shrink-0">{selectedOption.icon}</span>
                  <span>{selectedOption.label}</span>
                </>
            ) : (
                <span className="text-slate-400">{placeholder}</span>
            )}
          </div>
          <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl shadow-xl z-40 max-h-48 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
              {options.map((option) => (
                  <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors duration-200 flex items-center space-x-3 border-b border-slate-100 last:border-b-0"
                  >
                    <span className="text-blue-500 flex-shrink-0">{option.icon}</span>
                    <span className="font-medium text-slate-800 flex-1">{option.label}</span>
                    {value === option.value && <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />}
                  </button>
              ))}
            </div>
        )}
      </div>
  )
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

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleNext = () => {
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

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }))
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [toast.show])

  const showToast = (type: ToastMessage["type"], message: string) => {
    setToast({ type, message, show: true })
  }

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/
    return nameRegex.test(name.trim())
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d\s\-()]{7,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const validateDate = (date: string): boolean => {
    if (!date) return false
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    selectedDate.setHours(0, 0, 0, 0)
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
    } else if (!validateName(formData.nationality)) {
      stepErrors.nationality = "Nationality should contain only letters and be 2-50 characters long"
    }
    if (!formData.email.trim()) {
      stepErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      stepErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      stepErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      stepErrors.phone = "Please enter a valid phone number"
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
    } else {
      const nights = Number.parseInt(formData.nights, 10)
      if (isNaN(nights) || nights < 1 || nights > 365) {
        stepErrors.nights = "Number of nights must be between 1 and 365"
      }
    }
    if (!formData.adults) {
      stepErrors.adults = "Number of adults is required"
    } else {
      const adults = Number.parseInt(formData.adults, 10)
      if (isNaN(adults) || adults < 1 || adults > 20) {
        stepErrors.adults = "Number of adults must be between 1 and 20"
      }
    }
    if (formData.children) {
      const children = Number.parseInt(formData.children, 10)
      if (isNaN(children) || children < 0 || children > 20) {
        stepErrors.children = "Number of children must be between 0 and 20"
      }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCustomSelectChange = (name: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
      const payload = {
        tourId: 1,
        title: formData.title,
        name: formData.name,
        nationality: formData.nationality,
        email: formData.email,
        phone: formData.phone,
        startDate: formData.startDate,
        nights: Number.parseInt(formData.nights, 10) || 0,
        adults: Number.parseInt(formData.adults, 10) || 0,
        children: Number.parseInt(formData.children || "0", 10),
        accommodation: formData.accommodation,
        specialNote: formData.specialNote,
        hearAboutUs: formData.hearAboutUs,
        otherDetails: formData.otherDetails,
      }
      console.log("Booking submitted:", payload)
      showToast("success", "🎉 Booking submitted successfully! We will contact you within 24 hours.")
      // Reset form after success
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
      console.error("Submission error:", error)
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
        return "👤"
      case 2:
        return "📅"
      case 3:
        return "💬"
      default:
        return "📝"
    }
  }

  const getToastIcon = (type: string): string => {
    switch (type) {
      case "success":
        return "✅"
      case "error":
        return "❌"
      case "warning":
        return "⚠️"
      case "info":
        return "ℹ️"
      default:
        return "ℹ️"
    }
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0]

  // Options for "How did you hear about us?" dropdown
  const hearAboutUsOptions: SelectOption[] = [
    {
      value: "google",
      label: "Google Search",
      icon: <span className="text-base">🔍</span>,
    },
    {
      value: "facebook",
      label: "Facebook",
      icon: <span className="text-base">📘</span>,
    },
    {
      value: "instagram",
      label: "Instagram",
      icon: <span className="text-base">📷</span>,
    },
    {
      value: "twitter",
      label: "Twitter",
      icon: <span className="text-base">🐦</span>,
    },
    {
      value: "trip-advisor",
      label: "TripAdvisor",
      icon: <span className="text-base">✈️</span>,
    },
    {
      value: "friend-family",
      label: "Friend or Family Recommendation",
      icon: <span className="text-base">👥</span>,
    },
    {
      value: "travel-blog",
      label: "Travel Blog",
      icon: <span className="text-base">📝</span>,
    },
    {
      value: "other",
      label: "Other",
      icon: <span className="text-base">❓</span>,
    },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 -top-36 -right-36 md:-top-40 md:-right-40 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 -bottom-36 -left-36 md:-bottom-40 md:-left-40 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        {/* Toast Notification */}
        <div
            className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out ${
                toast.show ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
            }`}
        >
          <div
              className={`text-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl max-w-xs md:max-w-md backdrop-blur-sm border border-white/20 ${
                  toast.type === "success"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                      : toast.type === "error"
                          ? "bg-gradient-to-r from-red-500 to-rose-600"
                          : toast.type === "warning"
                              ? "bg-gradient-to-r from-amber-500 to-orange-600"
                              : "bg-gradient-to-r from-blue-500 to-indigo-600"
              }`}
          >
            <div className="flex items-center space-x-3">
              <div className="text-lg">{getToastIcon(toast.type)}</div>
              <div className="font-semibold text-xs md:text-sm leading-relaxed flex-1">{toast.message}</div>
              <button
                  onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                  className="ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
          <Fade triggerOnce>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 p-4 md:p-8 lg:p-12 relative z-10">
              {/* Header Section */}
              <div className="text-center mb-8 md:mb-12">
                <Fade delay={100} triggerOnce>
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl mb-4 md:mb-6 shadow-lg text-2xl md:text-3xl">
                    {getStepIcon()}
                  </div>
                </Fade>
                <Fade delay={200} triggerOnce>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-2 md:mb-4">
                    Book Your Dream Journey
                  </h1>
                </Fade>
                <Fade delay={300} triggerOnce>
                  <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Step {step} of 3 - {getStepTitle()}
                  </p>
                </Fade>
              </div>

              {/* Progress Section */}
              <Fade delay={400} triggerOnce>
                <div className="relative mb-8 md:mb-12">
                  {/* Step Indicators */}
                  <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-6 md:mb-8">
                    {[1, 2, 3].map((stepNum, index) => (
                        <Fade key={stepNum} delay={500 + index * 100} triggerOnce>
                          <div className="flex flex-col items-center">
                            <div
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-base md:text-lg font-bold transition-all duration-500 ease-out shadow-lg ${
                                    stepNum === step
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white scale-110 shadow-blue-500/30"
                                        : stepNum < step
                                            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/30"
                                            : "bg-slate-200 text-slate-500"
                                }`}
                            >
                              {stepNum < step ? "✓" : stepNum}
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-slate-600 mt-2 md:mt-3 text-center">
                          {stepNum === 1 ? "Personal" : stepNum === 2 ? "Travel" : "Additional"}
                        </span>
                          </div>
                        </Fade>
                    ))}
                  </div>
                  {/* Progress Bar */}
                  <div className="bg-slate-200 rounded-full h-2 md:h-3 overflow-hidden shadow-inner">
                    <div
                        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-2 md:h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Fade>

              <form className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-6 md:space-y-8">
                      <Fade delay={100} triggerOnce>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">👤</span>
                              Title *
                            </label>
                            <select
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 transition-all duration-300 ease-out cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.title ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50" : ""
                                }`}
                                required
                            >
                              <option value="" disabled>
                                Select Your Title
                              </option>
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Ms">Ms</option>
                              <option value="Miss">Miss</option>
                              <option value="Dr">Dr</option>
                              <option value="Prof">Prof</option>
                            </select>
                            {errors.title && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.title}
                                </p>
                            )}
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">📝</span>
                              Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50" : ""
                                }`}
                                placeholder="Enter your full name"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.name}
                                </p>
                            )}
                          </div>
                        </div>
                      </Fade>
                      <Fade delay={200} triggerOnce>
                        <div className="space-y-2 md:space-y-3">
                          <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                            <span className="mr-2 text-blue-500 text-base md:text-lg">🌍</span>
                            Nationality *
                          </label>
                          <input
                              type="text"
                              name="nationality"
                              value={formData.nationality}
                              onChange={handleChange}
                              className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                  errors.nationality
                                      ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                      : ""
                              }`}
                              placeholder="Enter your nationality"
                              required
                          />
                          {errors.nationality && (
                              <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                <span className="mr-2 text-red-500">⚠️</span>
                                {errors.nationality}
                              </p>
                          )}
                        </div>
                      </Fade>
                      <Fade delay={300} triggerOnce>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">📧</span>
                              Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50" : ""
                                }`}
                                placeholder="your.email@example.com"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.email}
                                </p>
                            )}
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">📞</span>
                              Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50" : ""
                                }`}
                                placeholder="+1 234 567 8900"
                                required
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.phone}
                                </p>
                            )}
                          </div>
                        </div>
                      </Fade>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 md:space-y-8">
                      <Fade delay={100} triggerOnce>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">📅</span>
                              Travel Start Date *
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                min={today}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.startDate
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                        : ""
                                }`}
                                required
                            />
                            {errors.startDate && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.startDate}
                                </p>
                            )}
                            <p className="text-xs text-slate-500 mt-2 flex items-center">
                              <span className="mr-1 text-slate-400">ℹ️</span>
                              You can select from today onwards
                            </p>
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">🌙</span>
                              Number of Nights *
                            </label>
                            <input
                                type="number"
                                name="nights"
                                value={formData.nights}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.nights
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                        : ""
                                }`}
                                placeholder="7"
                                min="1"
                                max="365"
                                required
                            />
                            {errors.nights && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.nights}
                                </p>
                            )}
                          </div>
                        </div>
                      </Fade>
                      <Fade delay={200} triggerOnce>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">👥</span>
                              Number of Adults *
                            </label>
                            <input
                                type="number"
                                name="adults"
                                value={formData.adults}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.adults
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                        : ""
                                }`}
                                placeholder="2"
                                min="1"
                                max="20"
                                required
                            />
                            {errors.adults && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.adults}
                                </p>
                            )}
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                              <span className="mr-2 text-blue-500 text-base md:text-lg">👶</span>
                              Number of Children
                            </label>
                            <input
                                type="number"
                                name="children"
                                value={formData.children}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                    errors.children
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                        : ""
                                }`}
                                placeholder="0"
                                min="0"
                                max="20"
                            />
                            {errors.children && (
                                <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.children}
                                </p>
                            )}
                          </div>
                        </div>
                      </Fade>
                      <Fade delay={300} triggerOnce>
                        <div className="space-y-2 md:space-y-3">
                          <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                            <span className="mr-2 text-blue-500 text-base md:text-lg">🏨</span>
                            Type of Accommodation *
                          </label>
                          <select
                              name="accommodation"
                              value={formData.accommodation}
                              onChange={handleChange}
                              className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 transition-all duration-300 ease-out cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                  errors.accommodation
                                      ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                      : ""
                              }`}
                              required
                          >
                            <option value="" disabled>
                              Select accommodation type
                            </option>
                            <option value="5-star hotel">🏨 5 Star Luxury Hotel</option>
                            <option value="4-star hotel">🏨 4 Star Hotel</option>
                            <option value="3-star hotel">🏨 3 Star Hotel</option>
                            <option value="luxury boutique">🏛️ Luxury Boutique Hotel</option>
                            <option value="eco-lodge">🌿 Eco Lodge</option>
                            <option value="wallet-friendly">💰 Budget Friendly</option>
                          </select>
                          {errors.accommodation && (
                              <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                <span className="mr-2 text-red-500">⚠️</span>
                                {errors.accommodation}
                              </p>
                          )}
                        </div>
                      </Fade>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 md:space-y-8">
                      <Fade delay={100} triggerOnce>
                        <div className="space-y-2 md:space-y-3">
                          <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                            <span className="mr-2 text-blue-500 text-base md:text-lg">💬</span>
                            Special Requests or Notes
                          </label>
                          <textarea
                              name="specialNote"
                              value={formData.specialNote}
                              onChange={handleChange}
                              rows={4}
                              className="w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm"
                              placeholder="Any dietary requirements, accessibility needs, special occasions, or other requests..."
                          ></textarea>
                        </div>
                      </Fade>
                      <Fade delay={200} triggerOnce>
                        <div className="space-y-2 md:space-y-3">
                          <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase flex items-center">
                            <span className="mr-2 text-blue-500 text-base md:text-lg">❓</span>
                            How did you hear about us? *
                          </label>
                          <CustomSelect
                              options={hearAboutUsOptions}
                              value={formData.hearAboutUs}
                              onChange={(value) => handleCustomSelectChange("hearAboutUs", value)}
                              placeholder="Select an option"
                              error={errors.hearAboutUs}
                              required
                          />
                          {errors.hearAboutUs && (
                              <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                <span className="mr-2 text-red-500">⚠️</span>
                                {errors.hearAboutUs}
                              </p>
                          )}
                        </div>
                      </Fade>
                      {formData.hearAboutUs === "other" && (
                          <Fade delay={300} triggerOnce>
                            <div className="space-y-2 md:space-y-3">
                              <label className="block text-slate-700 font-semibold text-xs md:text-sm tracking-wide uppercase">
                                Please specify
                              </label>
                              <input
                                  type="text"
                                  name="otherDetails"
                                  value={formData.otherDetails}
                                  onChange={handleChange}
                                  className={`w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 ease-out focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-slate-300 hover:shadow-sm shadow-sm ${
                                      errors.otherDetails
                                          ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50"
                                          : ""
                                  }`}
                                  placeholder="Please tell us how you found us"
                              />
                              {errors.otherDetails && (
                                  <p className="text-red-500 text-xs md:text-sm mt-2 flex items-center font-medium">
                                    <span className="mr-2 text-red-500">⚠️</span>
                                    {errors.otherDetails}
                                  </p>
                              )}
                            </div>
                          </Fade>
                      )}
                    </div>
                )}

                {/* Navigation Buttons */}
                <Fade delay={400} triggerOnce>
                  <div className="flex flex-col sm:flex-row justify-between items-center pt-8 md:pt-12 border-t border-slate-200 space-y-4 sm:space-y-0">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="w-full sm:w-auto font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 hover:shadow-lg hover:scale-105 focus:ring-slate-300/50"
                            disabled={isSubmitting}
                        >
                          <span>←</span>
                          <span>Previous Step</span>
                        </button>
                    ) : (
                        <div></div>
                    )}
                    <div className="flex items-center space-x-4">
                      {step < 3 ? (
                          <button
                              type="button"
                              onClick={handleNext}
                              className="w-full sm:w-auto font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white hover:shadow-xl hover:scale-105 focus:ring-blue-500/50 shadow-blue-500/25"
                              disabled={isSubmitting}
                          >
                            <span>Continue</span>
                            <span>→</span>
                          </button>
                      ) : (
                          <button
                              type="submit"
                              className="w-full sm:w-auto font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white hover:shadow-xl hover:scale-105 focus:ring-blue-500/50 shadow-blue-500/25"
                              disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                                  <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                  <span>✓</span>
                                  <span>Submit Booking</span>
                                </>
                            )}
                          </button>
                      )}
                    </div>
                  </div>
                </Fade>

                {/* Quick Response Guarantee */}
                <Fade delay={500} triggerOnce>
                  <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-amber-200/50 shadow-lg mt-8 md:mt-12">
                    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-xl md:text-2xl">
                        ⚡
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-4 flex items-center">
                          <span className="mr-2 md:mr-3 text-amber-600">🏆</span>
                          Quick Response Guarantee
                        </h4>
                        <p className="text-slate-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                          We respond to all inquiries within{" "}
                          <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-lg">
                          2 hours during business hours
                        </span>
                          , and within{" "}
                          <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-lg">
                          24 hours on weekends
                        </span>
                          . Your dream vacation planning starts immediately!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          <div className="flex items-center space-x-3 md:space-x-4 bg-white/60 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl">
                              🕐
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-base md:text-lg">Business Hours</div>
                              <div className="text-slate-600 text-sm md:text-base">Mon-Fri: 8AM-8PM</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 md:space-x-4 bg-white/60 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl">
                              📅
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-base md:text-lg">Weekends</div>
                              <div className="text-slate-600 text-sm md:text-base">Sat-Sun: 9AM-6PM</div>
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
      </div>
  )
}

export default BookingForm
