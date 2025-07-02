"use client"

import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Memories } from "./pages/Memories"
import { Booking } from "./pages/Booking"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import ContactUs from "./pages/ContactUs"
import { FeaturedTours } from "./components/FeaturedTours"
import PrivacyPolicy from "./components/privacy_policy/PrivacyPolicy"
import Itineraries from "./pages/Itineraries"
import TourPacket from "./components/TourPacket"
import ScrollToTop from "./components/ScrollToTop"
import FloatingActions from "./components/FloatingActions"
import { useEffect } from "react"
import React from "react"

function App() {
    const location = useLocation()

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16 sm:pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/memories" element={<Memories />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/featuredTours" element={<FeaturedTours />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/itineraries" element={<Itineraries />} />
                    <Route path="/tour-packet" element={<TourPacket />} />
                </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <FloatingActions />
        </div>
    )
}

export default App
