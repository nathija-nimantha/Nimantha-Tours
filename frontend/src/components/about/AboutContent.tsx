import React from "react"
import { Fade, Slide, Zoom } from "react-awesome-reveal"
import aboutImg from "../../assets/img/scenery2.jpg"

const AboutContent: React.FC = () => {
    const features = [
        {
            icon: "bi-award-fill",
            title: "Licensed & Certified",
            subtitle: "SLTDA Approved",
            color: "from-teal-500 to-blue-600",
            bgColor: "bg-teal-50",
            delay: "0s",
        },
        {
            icon: "bi-people-fill",
            title: "Expert Guides",
            subtitle: "Local Knowledge",
            color: "from-blue-500 to-purple-600",
            bgColor: "bg-blue-50",
            delay: "0.1s",
        },
        {
            icon: "bi-shield-fill-check",
            title: "Safe & Secure",
            subtitle: "Trusted Service",
            color: "from-green-500 to-teal-600",
            bgColor: "bg-green-50",
            delay: "0.2s",
        },
        {
            icon: "bi-heart-fill",
            title: "Personalized",
            subtitle: "Custom Itineraries",
            color: "from-orange-500 to-red-600",
            bgColor: "bg-orange-50",
            delay: "0.3s",
        },
    ]

    const stats = [
        { number: "500+", label: "Happy Travelers", icon: "bi-people" },
        { number: "50+", label: "Destinations", icon: "bi-geo-alt" },
        { number: "10+", label: "Years Experience", icon: "bi-calendar" },
        { number: "4.9", label: "Rating", icon: "bi-star" },
    ]

    return (
        <section
            className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
            id="more-about-us"
        >
            {/* Enhanced Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/40 to-blue-200/40 rounded-full opacity-60 translate-x-48 -translate-y-48 animate-pulse-custom"></div>
            <div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/40 to-yellow-200/40 rounded-full opacity-60 -translate-x-40 translate-y-40 animate-pulse-custom"
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full opacity-50 animate-bounce-custom"
                style={{ animationDelay: "4s" }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Image Section - Enhanced */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <Fade direction="left" triggerOnce>
                            <div className="relative group">
                                {/* Multiple background decorations for depth */}
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-20 transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 rounded-3xl opacity-15 transform -rotate-2 scale-110 group-hover:-rotate-4 transition-transform duration-700"></div>

                                {/* Main image container */}
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                    <img
                                        src={aboutImg || "/placeholder.svg"}
                                        alt="About Nimantha Tours & Travels - Professional travel services"
                                        className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px]"
                                        style={{ aspectRatio: "4/5" }}
                                        loading="lazy"
                                    />

                                    {/* Overlay gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Enhanced floating elements */}
                                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 sm:p-6 rounded-2xl shadow-xl animate-bounce-custom z-10">
                                    <div className="text-center">
                                        <i className="bi bi-award-fill text-2xl sm:text-3xl mb-2 block"></i>
                                        <div className="text-xs sm:text-sm font-semibold">Award Winning</div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 sm:p-8 rounded-3xl shadow-2xl animate-pulse-custom z-10">
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold mb-1">10+</div>
                                        <div className="text-sm sm:text-base font-medium">Years Experience</div>
                                    </div>
                                </div>

                                {/* Additional floating badge */}
                                <div
                                    className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 sm:p-4 rounded-xl shadow-lg animate-bounce-custom z-10"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <div className="text-center">
                                        <i className="bi bi-shield-check text-xl sm:text-2xl mb-1 block"></i>
                                        <div className="text-xs font-semibold">Trusted</div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Content Section - Enhanced */}
                    <div className="lg:col-span-6 xl:col-span-5">
                        <div className="space-y-8">
                            {/* Header */}
                            <Slide direction="right" triggerOnce>
                                <div className="space-y-6">
                                    <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg animate-bounce-custom">
                                        <i className="bi bi-building mr-2"></i>
                                        About Our Company
                                    </div>

                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                                        Welcome to{" "}
                                        <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent animate-fadeInUp">
                      Nimantha Tours
                    </span>
                                    </h2>
                                </div>
                            </Slide>

                            {/* Description */}
                            <Fade direction="up" delay={200} triggerOnce>
                                <div className="space-y-6 text-lg sm:text-xl leading-relaxed">
                                    <p className="text-gray-700 font-medium">
                                        <span className="text-teal-600 font-bold">Nimantha Tours & Travels</span> is your trusted partner
                                        for exploring the breathtaking beauty of Sri Lanka. Established in 2010, our mission has always been
                                        to provide unforgettable travel experiences for global tourists seeking authentic adventures.
                                    </p>

                                    <p className="text-gray-600">
                                        From the ancient rock fortress of Sigiriya to the serene tea plantations of Nuwara Eliya, we
                                        specialize in creating tailored itineraries that capture the essence of Sri Lanka. Our team of
                                        expert guides ensures your journey is safe, enriching, and memorable.
                                    </p>

                                    <p className="text-gray-600">
                                        Whether you're looking for adventure, culture, or relaxation, we're here to make your dream vacation
                                        a reality with personalized service and unmatched local expertise.
                                    </p>
                                </div>
                            </Fade>

                            {/* Stats Section */}
                            <Zoom delay={400} triggerOnce>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-t border-b border-gray-200">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                                <i className={`${stat.icon} text-white text-lg`}></i>
                                            </div>
                                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </Zoom>

                            {/* Key Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                {features.map((feature, index) => (
                                    <Fade key={index} direction="up" delay={Number.parseInt(feature.delay) * 1000} triggerOnce>
                                        <div
                                            className={`group flex items-center space-x-4 p-4 lg:p-6 ${feature.bgColor} rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                        >
                                            <div
                                                className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <i className={`${feature.icon} text-white text-lg lg:text-xl`}></i>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 text-base lg:text-lg group-hover:text-teal-600 transition-colors duration-300">
                                                    {feature.title}
                                                </div>
                                                <div className="text-sm lg:text-base text-gray-600">{feature.subtitle}</div>
                                            </div>
                                        </div>
                                    </Fade>
                                ))}
                            </div>

                            {/* Call to Action Buttons */}
                            <Slide direction="up" delay={600} triggerOnce>
                                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6">
                                    <a
                                        href="/booking"
                                        className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 lg:px-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center min-w-[200px]"
                                    >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-calendar-check text-xl group-hover:animate-bounce"></i>
                      <span className="text-lg">Plan Your Trip</span>
                    </span>
                                    </a>

                                    <a
                                        href="/contactUs"
                                        className="group bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-bold py-4 px-8 lg:px-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center min-w-[200px]"
                                    >
                    <span className="flex items-center justify-center space-x-3">
                      <i className="bi bi-chat-dots text-xl group-hover:animate-pulse"></i>
                      <span className="text-lg">Get in Touch</span>
                    </span>
                                    </a>
                                </div>
                            </Slide>

                            {/* Trust Indicators */}
                            <Fade delay={800} triggerOnce>
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-8 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-shield-check text-green-500 text-lg"></i>
                                        <span className="text-sm font-medium">SLTDA Licensed</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-award text-yellow-500 text-lg"></i>
                                        <span className="text-sm font-medium">Award Winning</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                                        <span className="text-sm font-medium">500+ Happy Clients</span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent
