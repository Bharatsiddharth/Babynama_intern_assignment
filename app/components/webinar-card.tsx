"use client"

import { Calendar, Clock, User } from "lucide-react"

interface Webinar {
  id: number
  title: string
  speaker: string
  date: string
}

interface WebinarCardProps {
  webinar: Webinar
  onViewDetails: (id: number) => void
}

export function WebinarCard({ webinar, onViewDetails }: WebinarCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }
  }

  const { date, time } = formatDate(webinar.date)

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        <div className="flex items-center justify-between">
          <div className="bg-white/20 rounded-full p-2">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">LIVE</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {webinar.title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2 text-indigo-500" />
            <span className="text-sm font-medium">{webinar.speaker}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
            <span className="text-sm">{date}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-indigo-500" />
            <span className="text-sm">{time}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(webinar.id)}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          View Details
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-xl transition-colors pointer-events-none"></div>
    </div>
  )
}
