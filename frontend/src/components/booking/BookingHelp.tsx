import React from "react"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { Fade, Zoom } from "react-awesome-reveal"
import ServiceProcess from "../ServiceProcess";

interface QuickStat {
    number: string
    label: string
    icon: string
    color: string
}

const BookingHelp: React.FC = () => {
    const quickStats: QuickStat[] = [
        { number: "500+", label: "Happy Clients", icon: "bi-people", color: "from-blue-500 to-purple-600" },
        { number: "24/7", label: "Support", icon: "bi-headset", color: "from-teal-500 to-green-600" },
        { number: "10+", label: "Years", icon: "bi-calendar", color: "from-orange-500 to-red-600" },
    ]

    const supportFeatures = [
        {
            icon: "bi-clock",
            title: "24/7 Emergency Support",
            description: "Round-the-clock assistance during your travels",
            color: "text-teal-600",
        },
        {
            icon: "bi-translate",
            title: "Multi-language Support",
            description: "Assistance in English, Sinhala, and Tamil",
            color: "text-blue-600",
        },
        {
            icon: "bi-geo-alt",
            title: "Local Expertise",
            description: "Deep knowledge of Sri Lankan destinations",
            color: "text-green-600",
        },
    ]

    return (
        <div className="w-full space-y-6">
            {/* Main Contact Card */}
            <Fade triggerOnce>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-teal-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-200/30 to-blue-200/30 rounded-full -translate-y-10 translate-x-10"></div>

                    {/* Header */}
                    <div className="text-center mb-6 relative z-10">
                        <Zoom triggerOnce>
                            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse-custom">
                                <i className="bi bi-headset text-white text-2xl"></i>
                            </div>
                        </Zoom>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Assistance?</h2>
                        <p className="text-gray-600">Connect with our travel experts instantly</p>
                    </div>

                    {/* Primary Contact Options */}
                    <div className="grid grid-cols-1 gap-4 mb-6 relative z-10">
                        <Fade direction="left" triggerOnce>
                            <a
                                href="https://wa.me/94779024795"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-4 bg-white hover:bg-green-50 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-green-100"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaWhatsapp className="text-white text-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                        WhatsApp Chat
                                    </div>
                                    <div className="text-green-600 font-semibold text-sm">(+94) 779 024 795</div>
                                    <div className="text-xs text-gray-500">Instant messaging support</div>
                                </div>
                                <i className="bi bi-arrow-right text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300"></i>
                            </a>
                        </Fade>

                        <Fade direction="right" triggerOnce>
                            <a
                                href="tel:+94779024795"
                                className="group flex items-center space-x-4 bg-white hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-blue-100"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaPhoneAlt className="text-white text-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        Direct Call
                                    </div>
                                    <div className="text-blue-600 font-semibold text-sm">(+94) 779 024 795</div>
                                    <div className="text-xs text-gray-500">Speak with our experts</div>
                                </div>
                                <i className="bi bi-arrow-right text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300"></i>
                            </a>
                        </Fade>
                    </div>

                    {/* Support Features */}
                    <div className="space-y-3 mb-6 relative z-10">
                        {supportFeatures.map((feature, index) => (
                            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                                <div className="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${feature.color} bg-gray-100`}>
                                        <i className={`${feature.icon} text-sm`}></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                                        <div className="text-xs text-gray-600">{feature.description}</div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 relative z-10">
                        {quickStats.map((stat, index) => (
                            <Zoom key={index} delay={index * 100} triggerOnce>
                                <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 group">
                                    <div
                                        className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <i className={`${stat.icon} text-white text-sm`}></i>
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                </div>
                            </Zoom>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default BookingHelp
