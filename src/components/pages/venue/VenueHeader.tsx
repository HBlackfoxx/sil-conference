import React from 'react'
import { MapPin } from 'lucide-react'

const VenueHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center space-x-3">
        <MapPin className="w-10 h-10 text-red-600" />
        <span>Venue & Travel</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        SIL 2025 will be held in the beautiful city of Marrakech, Morocco. 
        Discover the perfect blend of tradition and modernity in this vibrant destination.
      </p>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-gray-900">Conference Venue</h3>
            <p className="text-gray-600 text-sm mt-1">Palais des Congrès</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Dates</h3>
            <p className="text-gray-600 text-sm mt-1">May 15-17, 2025</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Location</h3>
            <p className="text-gray-600 text-sm mt-1">Marrakech, Morocco</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueHeader