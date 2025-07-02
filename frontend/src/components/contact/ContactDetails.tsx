import React from "react"
import { Fade } from "react-awesome-reveal"

const ContactDetails: React.FC = () => {
  return (
      <Fade direction="left" cascade>
        <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <p className="text-gray-700 mb-6">Let's leave a message, and we will get back to you shortly.</p>

          <div className="mb-6">
            <p className="text-teal-500 font-medium text-lg">info@nimanthatours.com</p>
            <p className="text-gray-500 text-sm">Write us an email</p>
          </div>

          <div className="space-y-4">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-teal-500 transition duration-300"
            >
              <i className="bi bi-facebook text-xl"></i>
              <span className="text-sm">Let's connect on Facebook</span>
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-teal-500 transition duration-300"
            >
              <i className="bi bi-instagram text-xl"></i>
              <span className="text-sm">Follow us on Instagram</span>
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-teal-500 transition duration-300"
            >
              <i className="bi bi-twitter text-xl"></i>
              <span className="text-sm">Follow us on Twitter</span>
            </a>
          </div>
        </div>
      </Fade>
  )
}

export default ContactDetails
