import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItineraryDetail from "../../components/itinerary/ItineraryDetail"
import { enhancedItineraries } from "../../components/Itineraries/enhancedItinerariesData"

const ItineraryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const itinerary = enhancedItineraries.find(
    (item) => item.id === Number.parseInt(id || "0")
  )

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Itinerary Not Found</h1>
          <p className="text-gray-600 mb-8">The requested itinerary could not be found.</p>
          <a
            href="/itineraries"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Back to Itineraries
          </a>
        </div>
      </div>
    )
  }

  return <ItineraryDetail {...itinerary} />
}

export default ItineraryDetailPage
