"use client"

import Image from "next/image"
import { WebinarCard } from "../components/webinar-card"



// Mock data for webinars
const webinarsData = [
  {
    id: 1,
    title: "Newborn Care Essentials: First 30 Days",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Breastfeeding Success: Tips and Techniques",
    speaker: "Dr. Priya Sharma",
    date: "2024-01-22T14:00:00Z",
  },
  {
    id: 3,
    title: "Baby Sleep Training: Gentle Methods",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-29T11:00:00Z",
  },
  {
    id: 4,
    title: "Introduction to Solid Foods",
    speaker: "Dr. Rajesh Kumar",
    date: "2024-02-05T15:00:00Z",
  },
]

export default function WebinarsPage() {
  const handleViewDetails = (webinarId: number) => {
    console.log(`Viewing details for webinar ID: ${webinarId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Live Webinars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert pediatricians and child care specialists for live sessions designed to help busy parents
            navigate their parenting journey with confidence.
          </p>
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinarsData.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} onViewDetails={handleViewDetails} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Out!</h3>
            <p className="text-gray-600 mb-6">Subscribe to get notified about new webinars and parenting resources.</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </main>

     
    </div>
  )
}
