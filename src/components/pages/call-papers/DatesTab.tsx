import React from 'react'
import { CheckCircle } from 'lucide-react'
import { ImportantDate } from '@/types/call-papers'

interface DatesTabProps {
  dates: ImportantDate[]
}

const DatesTab = ({ dates }: DatesTabProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Important Dates</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
          
          {dates.map((date, index) => (
            <div key={index} className="relative flex items-start mb-8 last:mb-0">
              {/* Timeline Dot */}
              <div className={`absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                date.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'
              }`} />
              
              {/* Content */}
              <div className="ml-16 flex-1">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{date.event}</h3>
                      <p className="text-blue-600 font-medium mt-1">{date.date}</p>
                    </div>
                    {date.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl">
          <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
          <p className="text-gray-700 mb-4">
            Subscribe to our mailing list to receive reminders about important deadlines.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatesTab