import React from 'react'
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, Hotel } from 'lucide-react'

const VenueMap = () => {
  const venueInfo = {
    name: 'Palais des Congrès de Marrakech',
    address: 'Avenue Mohammed VI, Marrakech 40000, Morocco',
    phone: '+212 524-339-000',
    email: 'info@sil2025.com',
    coordinates: { lat: 31.6295, lng: -7.9811 }
  }

  const transportOptions = [
    {
      icon: Plane,
      title: 'By Air',
      description: 'Marrakech Menara Airport (RAK) - 15 min drive',
      details: 'Direct flights from major cities worldwide'
    },
    {
      icon: Train,
      title: 'By Train',
      description: 'Marrakech Railway Station - 10 min drive',
      details: 'Regular connections from Casablanca and other cities'
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'Free parking available for 500+ vehicles',
      details: 'Valet parking service available'
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: '20+ partner hotels within walking distance',
      details: 'Special conference rates available'
    }
  ]

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Conference Location</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Venue & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in the beautiful city of Marrakech, where tradition meets innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for map - in real implementation, use Google Maps or similar */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1000"
                alt="Marrakech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
                  <div className="relative bg-red-600 text-white p-3 rounded-full shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              {/* Venue Name Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <h3 className="font-bold text-lg text-gray-800">{venueInfo.name}</h3>
                <p className="text-gray-600 text-sm">{venueInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Conference Venue</h3>
            
            {/* Venue Details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-lg mb-4">{venueInfo.name}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-gray-600">{venueInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-600">{venueInfo.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-600">{venueInfo.email}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-600">May 15-17, 2025 • 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Transportation Options */}
            <h4 className="font-semibold text-lg mb-4">Getting There</h4>
            <div className="grid grid-cols-2 gap-4">
              {transportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h5 className="font-semibold">{option.title}</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                    <p className="text-xs text-gray-500">{option.details}</p>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Directions
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                View Hotels
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2">Modern Facilities</h4>
            <p className="text-gray-600">State-of-the-art conference halls with capacity for 1000+ attendees</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2">Food & Beverages</h4>
            <p className="text-gray-600">Multiple restaurants and cafés serving local and international cuisine</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2">High-Speed WiFi</h4>
            <p className="text-gray-600">Complimentary high-speed internet throughout the venue</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueMap