import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"
import bookingImage from "../assets/img/sideImage.jpg"

interface ServiceStep {
    icon: string
    title: string
    description: string
    color: string
    delay: string
}

const ServiceProcess: React.FC = () => {
    const serviceSteps: ServiceStep[] = [
        {
            icon: "bi-search",
            title: "Browse & Explore",
            description: "Discover luxury travel ideas and holiday inspiration from our curated collection.",
            color: "from-blue-500 to-purple-600",
            delay: "0s",
        },
        {
            icon: "bi-telephone",
            title: "Connect & Consult",
            description: "Call us or enquire online about your dream holiday with our expert team.",
            color: "from-teal-500 to-green-600",
            delay: "0.2s",
        },
        {
            icon: "bi-calendar-check",
            title: "Book & Enjoy",
            description: "Receive your personalized quote and book your perfect getaway with confidence.",
            color: "from-orange-500 to-red-600",
            delay: "0.4s",
        },
    ]

    return (
        <div className="w-full space-y-6">
            {/* How it Works Section */}
            <Fade triggerOnce>
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center justify-center mb-2">
                            <i className="bi bi-gear mr-2 text-teal-500"></i>
                            How Our Service Works
                        </h3>
                        <p className="text-gray-600 text-sm">Simple steps to your perfect vacation</p>
                    </div>

                    <div className="space-y-4">
                        {serviceSteps.map((step, index) => (
                            <Fade key={index} direction="up" delay={Number.parseInt(step.delay) * 1000} triggerOnce>
                                <div className="relative">
                                    {/* Step number indicator */}
                                    <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 z-10">
                                        {index + 1}
                                    </div>

                                    {/* Connecting line (except for last item) */}
                                    {index < serviceSteps.length - 1 && (
                                        <div className="absolute left-1 top-6 w-0.5 h-16 bg-gray-200"></div>
                                    )}

                                    <div className="ml-8 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <i className={`${step.icon} text-white text-lg`}></i>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                                    {step.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6 text-center">
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100">
                            <p className="text-sm text-gray-700 mb-3">
                                <span className="font-semibold text-teal-600">Ready to get started?</span> Our travel experts are
                                standing by to help you plan your perfect Sri Lankan adventure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 justify-center">
                                <a
                                    href="tel:+94779024795"
                                    className="inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                                >
                                    <i className="bi bi-telephone"></i>
                                    <span>Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/94779024795"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Inspirational Image Card */}
            <Zoom delay={400} triggerOnce>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="relative group">
                        <img
                            src={bookingImage || "/placeholder.svg"}
                            alt="Travel consultation illustration"
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                            <div className="text-center p-6 text-white">
                                <h4 className="font-bold text-lg mb-2">Your Adventure Awaits</h4>
                                <p className="text-sm opacity-90">Let us turn your travel dreams into reality</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                            <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                            Expert Guidance
                        </div>
                    </div>

                    {/* Card content */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Professional Consultation</h4>
                                <p className="text-xs text-gray-600">Personalized travel planning</p>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-bold text-teal-600">Free</div>
                                <div className="text-xs text-gray-500">No obligation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>

            {/* Trust Indicators */}
            <Fade delay={600} triggerOnce>
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-shield-check text-white text-sm"></i>
                            </div>
                            <div className="text-sm font-bold text-gray-900">Secure</div>
                            <div className="text-xs text-gray-600">SSL Protected</div>
                        </div>

                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-award text-white text-sm"></i>
                            </div>
                            <div className="text-sm font-bold text-gray-900">Licensed</div>
                            <div className="text-xs text-gray-600">SLTDA Approved</div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default ServiceProcess
