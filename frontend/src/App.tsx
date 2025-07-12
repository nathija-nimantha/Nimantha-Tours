import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import Itineraries from "./pages/Itineraries"
import { Booking } from "./pages/Booking"
import ContactUs from "./pages/ContactUs"
import { Memories } from "./pages/Memories"
import Policy from "./pages/Policy"
import Tours from "./pages/Tours"
import ScrollToTop from "./components/ScrollToTop"
import FloatingActions from "./components/FloatingActions"

// Tour Pages
import Sigiriya from "./pages/tours/Sigiriya"
import Ella from "./pages/tours/Ella"
import Kandy from "./pages/tours/Kandy"
import Galle from "./pages/tours/Galle"
import NuwaraEliya from "./pages/tours/NuwaraEliya"
import Yala from "./pages/tours/Yala"

// Itinerary Detail Page
import ItineraryDetailPage from "./pages/itinerary/ItineraryDetailPage"
import React from "react"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itinerary/:id" element={<ItineraryDetailPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/policy" element={<Policy />} />

          {/* Tour Routes */}
          <Route path="/tours/sigiriya" element={<Sigiriya />} />
          <Route path="/tours/ella" element={<Ella />} />
          <Route path="/tours/kandy" element={<Kandy />} />
          <Route path="/tours/galle" element={<Galle />} />
          <Route path="/tours/nuwara-eliya" element={<NuwaraEliya />} />
          <Route path="/tours/yala" element={<Yala />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingActions />
    </div>
  )
}

export default App
