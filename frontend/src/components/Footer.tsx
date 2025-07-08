import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Featured Tours", href: "/featuredTours" },
    { name: "Booking", href: "/booking" },
    { name: "Itineraries", href: "/itineraries" },
    { name: "Contact Us", href: "/contactUs" },
  ]

  const destinations = [
    { name: "Sigiriya", href: "/attractions/sigiriya" },
    { name: "Kandy", href: "/attractions/kandy" },
    { name: "Ella", href: "/attractions/ella" },
    { name: "Galle", href: "/attractions/galle" },
    { name: "Yala National Park", href: "/attractions/yala" },
    { name: "Nuwara Eliya", href: "/attractions/nuwara-eliya" },
  ]

  const socialLinks = [
    { icon: "bi-facebook", href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: "bi-twitter", href: "#", label: "Twitter", color: "hover:text-sky-400" },
    {
      icon: "bi-instagram",
      href: "https://www.instagram.com/nimanthatours/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    { icon: "bi-linkedin", href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: "bi-youtube", href: "#", label: "YouTube", color: "hover:text-red-500" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full -translate-x-16 sm:-translate-x-24 lg:-translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full translate-x-20 sm:translate-x-30 lg:translate-x-40 translate-y-20 sm:translate-y-30 lg:translate-y-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-2 sm:p-3 rounded-full">
                  <i className="bi bi-geo-alt-fill text-white text-lg sm:text-xl"></i>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Nimantha Tours</h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Discover the beauty of Sri Lanka with personalized tours tailored to your needs. Your adventure starts
                here with unforgettable experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <i className="bi bi-telephone-fill text-teal-400"></i>
                  <a href="tel:+94779024795" className="hover:text-teal-400 transition-colors duration-300">
                    +94 779 024 795
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <i className="bi bi-envelope-fill text-teal-400"></i>
                  <a
                    href="mailto:info@nimanthatours.com"
                    className="hover:text-teal-400 transition-colors duration-300 break-all"
                  >
                    info@nimanthatours.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <i className="bi bi-geo-alt-fill text-teal-400 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                    >
                      <i className="bi bi-chevron-right text-xs text-teal-400"></i>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="sm:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 relative">
                Popular Destinations
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                    >
                      <i className="bi bi-chevron-right text-xs text-teal-400"></i>
                      <span>{destination.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Subscribe to our newsletter for travel tips and exclusive offers.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                  <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                      target={social.href.startsWith("http") ? "_blank" : "_self"}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Nimantha Tours & Travels. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">Licensed by Sri Lanka Tourism Development Authority</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <i className="bi bi-shield-check text-teal-400"></i>
                <span>Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
