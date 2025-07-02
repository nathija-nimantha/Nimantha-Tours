"use client"

import React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Fade } from "react-awesome-reveal"

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
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

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
                onClose()
            }, 3000)
        } catch (error) {
            setErrors({ submit: "Failed to send message. Please try again." })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        if (!isSubmitting) {
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            setErrors({})
            setIsSuccess(false)
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Fade triggerOnce>
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 relative">
                        <button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-300 disabled:opacity-50"
                            aria-label="Close"
                        >
                            <i className="bi bi-x-lg text-sm"></i>
                        </button>

                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <i className="bi bi-chat-dots text-xl"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Quick Message</h2>
                                <p className="text-sm opacity-90">Send us a message instantly</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                        {isSuccess ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="bi bi-check-circle-fill text-green-500 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600 mb-4">Thank you for your message. We'll get back to you within 24 hours.</p>
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                    <div className="animate-spin w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full"></div>
                                    <span>Closing automatically...</span>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
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
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
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
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <i className="bi bi-tag mr-2 text-teal-500"></i>
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full p-3 rounded-lg border-2 ${
                                            errors.subject ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                                        } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                                        placeholder="What's this about?"
                                        disabled={isSubmitting}
                                    />
                                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <i className="bi bi-chat-square-text mr-2 text-teal-500"></i>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full p-3 rounded-lg border-2 ${
                                            errors.message ? "border-red-300 focus:ring-red-400" : "border-gray-200 focus:ring-teal-400"
                                        } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none`}
                                        placeholder="Tell us how we can help you..."
                                        disabled={isSubmitting}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                {/* Submit Error */}
                                {errors.submit && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
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
                                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-send"></i>
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                {/* Quick Contact Options */}
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600 text-center mb-3">Or contact us directly:</p>
                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href="tel:+94779024795"
                                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
                                        >
                                            <i className="bi bi-telephone"></i>
                                            <span>Call</span>
                                        </a>
                                        <a
                                            href="https://wa.me/94779024795"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-300"
                                        >
                                            <i className="bi bi-whatsapp"></i>
                                            <span>WhatsApp</span>
                                        </a>
                                        <a
                                            href="mailto:info@nimanthatours.com"
                                            className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors duration-300"
                                        >
                                            <i className="bi bi-envelope"></i>
                                            <span>Email</span>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default QuickMessageForm
