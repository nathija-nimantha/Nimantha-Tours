import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        name: "",
        email: "",
        contact: "",
        tourType: "",
        accommodation: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <Fade direction="right" cascade>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/3">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Contact Us</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <select
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Your contact number with country code"
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-2">
                            Type of Tour
                        </label>
                        <select
                            id="tourType"
                            name="tourType"
                            value={formData.tourType}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        >
                            <option value="" disabled>
                                Select a Tour Type
                            </option>
                            <option value="Solo">Solo</option>
                            <option value="Couple">Couple</option>
                            <option value="Honeymoon">Honeymoon</option>
                            <option value="Family">Family</option>
                            <option value="Business">Business</option>
                            <option value="MICE">MICE</option>
                            <option value="Medical">Medical</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700 mb-2">
                            Accommodation Type
                        </label>
                        <select
                            id="accommodation"
                            name="accommodation"
                            value={formData.accommodation}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        >
                            <option value="" disabled>
                                Select Accommodation Type
                            </option>
                            <option value="Guest Houses">Guest Houses</option>
                            <option value="Budget Hotel">Budget Hotel</option>
                            <option value="Luxury Hotel">Luxury Hotel</option>
                            <option value="Luxury Boutique Hotel">Luxury Boutique Hotel</option>
                            <option value="Eco Lodges">Eco Lodges</option>
                            <option value="Tented Camps">Tented Camps</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Write a Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Your message here"
                            className="w-full p-3 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-teal-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Fade>
    );
};

export default ContactForm;
