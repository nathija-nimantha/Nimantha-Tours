import React from 'react'
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const ContactUs = () => {
  return (
    <div>
      <ContactHero />
      <section className="text-white py-12">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-16">
          <div className="lg:w-1/3">
            <ContactDetails />
          </div>
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs