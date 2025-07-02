import React from "react"
import { Fade } from "react-awesome-reveal"
import policyImage from "../../assets/img/privacy-policy.jpg"

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${policyImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Fade>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                    </Fade>
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-16 py-12">
                <Fade direction="up" triggerOnce>
                    <p className="text-gray-700 text-lg mb-6">
                        At <strong>Nimantha Tours & Travels</strong>, we are committed to safeguarding the privacy and personal data
                        of our customers. This Privacy Policy outlines how we collect, use, and protect your information to ensure
                        transparency and trust.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Who We Are</h2>
                    <p className="text-gray-700 mb-6">
                        We are a trusted and licensed travel agency approved by the Sri Lanka Tourism Development Authority
                        (SLTDA/SQA/TA/XXXX) and the Sri Lanka Civil Aviation Authority (Licence A-XXXX). Based in Colombo, Sri
                        Lanka, our mission is to provide exceptional travel experiences while ensuring the highest standards of
                        privacy and security for our customers.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">How We Collect Data</h2>
                    <p className="text-gray-700 mb-6">
                        Your data is collected when you contact us via phone, email, or our website, or when you book a travel
                        program with us. We securely store this data in our internal systems to ensure it is protected and used
                        responsibly.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">What Data We Collect</h2>
                    <p className="text-gray-700 mb-6">The data we collect may include your:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Full name</li>
                        <li>Contact information (email, phone number, address)</li>
                        <li>Nationality</li>
                        <li>Travel preferences and interests</li>
                        <li>Passport details (if required for bookings)</li>
                        <li>Special requirements (e.g., dietary, health conditions)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Why We Collect Your Data</h2>
                    <p className="text-gray-700 mb-6">Your data is collected to:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Process your bookings and provide accurate travel arrangements</li>
                        <li>Respond to inquiries and provide travel quotes</li>
                        <li>Send updates regarding your bookings</li>
                        <li>Notify you of emergencies or changes to your itinerary</li>
                        <li>Provide a tailored and personalized travel experience</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">How We Protect Your Data</h2>
                    <p className="text-gray-700 mb-6">
                        We ensure your data is stored securely in our internal systems. Access to this data is restricted to
                        authorized personnel only. We do not share or sell your data to third parties except where necessary to
                        fulfill your booking (e.g., hotels, transportation providers).
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Marketing and Communications</h2>
                    <p className="text-gray-700 mb-6">
                        With your consent, we may use your email address to send promotional updates and newsletters. You can opt
                        out at any time by clicking the "unsubscribe" link in our emails or by contacting us directly.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Cookies and Analytics</h2>
                    <p className="text-gray-700 mb-6">
                        We use cookies to enhance your browsing experience on our website. Additionally, we use Google Analytics to
                        track website performance and better understand user behavior. You can disable cookies in your browser
                        settings if you prefer.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Your Rights</h2>
                    <p className="text-gray-700 mb-6">
                        Under applicable data protection laws, you have the right to access, correct, or delete your personal data.
                        To exercise these rights, please contact us using the details provided below.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-6">
                        If you have any questions or concerns about our privacy practices, please get in touch:
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> nimantha.tours@gmail.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> (+94) 777 024 795
                    </p>
                </Fade>
            </section>
        </div>
    )
}

export default PrivacyPolicy
