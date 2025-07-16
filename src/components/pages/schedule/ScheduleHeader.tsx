import React from 'react'
import { Download, Calendar } from 'lucide-react'

const ScheduleHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Program</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Three days of inspiring keynotes, technical sessions, workshops, and networking opportunities
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Download Full Program (PDF)</span>
        </button>
        <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2 border border-gray-200">
          <Calendar className="w-5 h-5" />
          <span>Add to Calendar</span>
        </button>
      </div>
    </div>
  )
}

export default ScheduleHeader