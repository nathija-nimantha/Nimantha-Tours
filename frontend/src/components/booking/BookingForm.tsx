"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Mail,
  Phone,
  Globe,
  Calendar,
  Moon,
  Users,
  Baby,
  Building,
  MessageSquare,
  Sparkles,
  Search,
  Users2,
  Camera,
  MessageCircle,
  Plane,
  FileText,
  HelpCircle,
  Crown,
  Home,
  Gem,
  Leaf,
  Wallet,
  Shield,
  Award,
  Twitter,
  X,
  Instagram,
  Facebook,
} from "lucide-react"
import { BiLogoTripAdvisor } from "react-icons/bi"
import { BsGoogle } from "react-icons/bs"

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
  description: string
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCardSelect = (name: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [name]: value }))
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

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      showToast("success", "🎉 Booking submitted successfully! We will contact you within 24 hours.")

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

  const getStepDescription = (): string => {
    switch (step) {
      case 1:
        return "Tell us about yourself"
      case 2:
        return "Plan your perfect trip"
      case 3:
        return "Final touches"
      default:
        return "Complete your booking"
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

  // Options for "How did you hear about us?" cards
  const hearAboutUsOptions: SelectOption[] = [
    {
      value: "google",
      label: "Google Search",
      icon: <BsGoogle className="w-6 h-6" />,
      description: "Found us through search",
    },
    {
      value: "facebook",
      label: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      description: "Social media discovery",
    },
    {
      value: "instagram",
      label: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      description: "Visual inspiration",
    },
    {
      value: "twitter",
      label: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      description: "Social media platform",
    },
    {
      value: "trip-advisor",
      label: "TripAdvisor",
      icon: <BiLogoTripAdvisor className="w-6 h-6" />,
      description: "Travel review site",
    },
    {
      value: "friend-family",
      label: "Friend/Family",
      icon: <Users className="w-6 h-6" />,
      description: "Personal recommendation",
    },
    {
      value: "travel-blog",
      label: "Travel Blog",
      icon: <FileText className="w-6 h-6" />,
      description: "Online article or blog",
    },
    {
      value: "other",
      label: "Other",
      icon: <HelpCircle className="w-6 h-6" />,
      description: "Something else",
    },
  ]

  const accommodationOptions = [
    {
      value: "5-star hotel",
      label: "5 Star Luxury",
      icon: <Crown className="w-6 h-6" />,
      description: "Premium luxury experience",
    },
    {
      value: "4-star hotel",
      label: "4 Star Hotel",
      icon: <Building className="w-6 h-6" />,
      description: "Comfortable and elegant",
    },
    {
      value: "3-star hotel",
      label: "3 Star Hotel",
      icon: <Home className="w-6 h-6" />,
      description: "Quality and value",
    },
    {
      value: "luxury boutique",
      label: "Boutique Hotel",
      icon: <Gem className="w-6 h-6" />,
      description: "Unique and intimate",
    },
    {
      value: "eco-lodge",
      label: "Eco Lodge",
      icon: <Leaf className="w-6 h-6" />,
      description: "Sustainable and natural",
    },
    {
      value: "wallet-friendly",
      label: "Budget Friendly",
      icon: <Wallet className="w-6 h-6" />,
      description: "Great value option",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      {/* Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 transform transition-all duration-500 ease-out ${
          toast.show ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <div
          className={`text-white px-6 py-4 rounded-2xl shadow-2xl max-w-sm backdrop-blur-sm border border-white/20 ${
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
            <div className="text-xl">{getToastIcon(toast.type)}</div>
            <div className="font-semibold text-sm leading-relaxed flex-1">{toast.message}</div>
            <button
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              className="ml-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Fade triggerOnce>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Fade delay={100} triggerOnce>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold">Book Your Journey</h1>
                      <p className="text-blue-100 text-lg">Create unforgettable memories</p>
                    </div>
                  </div>
                </Fade>

                {/* Progress */}
                <Fade delay={200} triggerOnce>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold">{getStepTitle()}</h2>
                      <p className="text-blue-100">{getStepDescription()}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{step}/3</div>
                      <div className="text-blue-100 text-sm">Steps</div>
                    </div>
                  </div>
                </Fade>

                {/* Progress Bar */}
                <Fade delay={300} triggerOnce>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-white h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </Fade>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-8">
                    <Fade delay={100} triggerOnce>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <User className="w-5 h-5 text-blue-600" />
                            <span>Title *</span>
                          </label>
                          <select
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.title
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
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
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.title}</span>
                            </p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <User className="w-5 h-5 text-blue-600" />
                            <span>Full Name *</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.name
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="Enter your full name"
                            required
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </Fade>

                    <Fade delay={200} triggerOnce>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                          <Globe className="w-5 h-5 text-blue-600" />
                          <span>Nationality *</span>
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleChange}
                          className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                            errors.nationality
                              ? "border-red-400 focus:border-red-500"
                              : "border-slate-200 focus:border-blue-500"
                          }`}
                          placeholder="Enter your nationality"
                          required
                        />
                        {errors.nationality && (
                          <p className="text-red-500 text-sm flex items-center space-x-2">
                            <span>⚠️</span>
                            <span>{errors.nationality}</span>
                          </p>
                        )}
                      </div>
                    </Fade>

                    <Fade delay={300} triggerOnce>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <span>Email Address *</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.email
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="your.email@example.com"
                            required
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Phone className="w-5 h-5 text-blue-600" />
                            <span>Phone Number *</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.phone
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="+1 234 567 8900"
                            required
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </Fade>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <Fade delay={100} triggerOnce>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span>Travel Start Date *</span>
                          </label>
                          <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            min={today}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.startDate
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            required
                          />
                          {errors.startDate && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.startDate}</span>
                            </p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Moon className="w-5 h-5 text-blue-600" />
                            <span>Number of Nights *</span>
                          </label>
                          <input
                            type="number"
                            name="nights"
                            value={formData.nights}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.nights
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="7"
                            min="1"
                            max="365"
                            required
                          />
                          {errors.nights && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.nights}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </Fade>

                    <Fade delay={200} triggerOnce>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span>Number of Adults *</span>
                          </label>
                          <input
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.adults
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="2"
                            min="1"
                            max="20"
                            required
                          />
                          {errors.adults && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.adults}</span>
                            </p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                            <Baby className="w-5 h-5 text-blue-600" />
                            <span>Number of Children</span>
                          </label>
                          <input
                            type="number"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.children
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="0"
                            min="0"
                            max="20"
                          />
                          {errors.children && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.children}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </Fade>

                    <Fade delay={300} triggerOnce>
                      <div className="space-y-4">
                        <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                          <Building className="w-5 h-5 text-blue-600" />
                          <span>Type of Accommodation *</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {accommodationOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleCardSelect("accommodation", option.value)}
                              className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                                formData.accommodation === option.value
                                  ? "border-blue-500 bg-blue-50 shadow-lg"
                                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="text-blue-600">{option.icon}</div>
                                <span className="font-semibold text-slate-800">{option.label}</span>
                                {formData.accommodation === option.value && (
                                  <Check className="w-5 h-5 text-blue-600 ml-auto" />
                                )}
                              </div>
                              <p className="text-sm text-slate-600">{option.description}</p>
                            </button>
                          ))}
                        </div>
                        {errors.accommodation && (
                          <p className="text-red-500 text-sm flex items-center space-x-2">
                            <span>⚠️</span>
                            <span>{errors.accommodation}</span>
                          </p>
                        )}
                      </div>
                    </Fade>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <Fade delay={100} triggerOnce>
                      <div className="space-y-4">
                        <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                          <span>Special Requests or Notes</span>
                        </label>
                        <textarea
                          name="specialNote"
                          value={formData.specialNote}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300"
                          placeholder="Any dietary requirements, accessibility needs, special occasions, or other requests..."
                        ></textarea>
                      </div>
                    </Fade>

                    <Fade delay={200} triggerOnce>
                      <div className="space-y-4">
                        <label className="flex items-center space-x-2 text-slate-700 font-semibold">
                          <span className="text-blue-600 text-xl">❓</span>
                          <span>How did you hear about us? *</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {hearAboutUsOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleCardSelect("hearAboutUs", option.value)}
                              className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                                formData.hearAboutUs === option.value
                                  ? "border-blue-500 bg-blue-50 shadow-lg"
                                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="text-blue-600">{option.icon}</div>
                                <span className="font-semibold text-slate-800">{option.label}</span>
                                {formData.hearAboutUs === option.value && (
                                  <Check className="w-5 h-5 text-blue-600 ml-auto" />
                                )}
                              </div>
                              <p className="text-sm text-slate-600">{option.description}</p>
                            </button>
                          ))}
                        </div>
                        {errors.hearAboutUs && (
                          <p className="text-red-500 text-sm flex items-center space-x-2">
                            <span>⚠️</span>
                            <span>{errors.hearAboutUs}</span>
                          </p>
                        )}
                      </div>
                    </Fade>

                    {formData.hearAboutUs === "other" && (
                      <Fade delay={300} triggerOnce>
                        <div className="space-y-3">
                          <label className="text-slate-700 font-semibold">Please specify</label>
                          <input
                            type="text"
                            name="otherDetails"
                            value={formData.otherDetails}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 rounded-xl border-2 bg-white font-medium text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 ${
                              errors.otherDetails
                                ? "border-red-400 focus:border-red-500"
                                : "border-slate-200 focus:border-blue-500"
                            }`}
                            placeholder="Please tell us how you found us"
                          />
                          {errors.otherDetails && (
                            <p className="text-red-500 text-sm flex items-center space-x-2">
                              <span>⚠️</span>
                              <span>{errors.otherDetails}</span>
                            </p>
                          )}
                        </div>
                      </Fade>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <Fade delay={400} triggerOnce>
                  <div className="flex justify-between items-center pt-8 border-t border-slate-200">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all duration-300 hover:scale-105"
                        disabled={isSubmitting}
                      >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        disabled={isSubmitting}
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center space-x-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-5 h-5" />
                            <span>Submit Booking</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </Fade>
              </form>
            </div>
          </div>
        </Fade>

        {/* Trust Indicators */}
        <Fade delay={600} triggerOnce>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Quick Response</h3>
              <p className="text-slate-600 text-sm">We respond within 2 hours during business hours</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Secure Booking</h3>
              <p className="text-slate-600 text-sm">Your information is protected and encrypted</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Best Experience</h3>
              <p className="text-slate-600 text-sm">Tailored trips for unforgettable memories</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default BookingForm
