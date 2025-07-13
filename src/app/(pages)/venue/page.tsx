import React, { useState } from 'react'
import { 
  MapPin, Hotel, Plane, Train, Car, Camera, Utensils, 
  Wifi, Coffee, Users, Clock, Phone, Mail, Globe,
  Star, Info, ChevronRight, Shield, Heart, Sun
} from 'lucide-react'

const VenuePage = () => {
  const [activeTab, setActiveTab] = useState('venue')

  const venueFeatures = [
    { icon: Users, title: 'Capacity', description: '1000+ attendees' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Throughout the venue' },
    { icon: Coffee, title: 'Catering', description: 'Halal & international cuisine' },
    { icon: Shield, title: 'Security', description: '24/7 professional security' }
  ]

  const hotels = [
    {
      name: 'La Mamounia',
      category: '5-star Luxury',
      distance: '0.8 km',
      price: 'From €350/night',
      discount: '15% conference discount',
      amenities: ['Pool', 'Spa', 'Restaurant', 'Gym'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000'
    },
    {
      name: 'Four Seasons Resort',
      category: '5-star',
      distance: '1.2 km',
      price: 'From €280/night',
      discount: '10% conference discount',
      amenities: ['Pool', 'Restaurant', 'Business Center'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000'
    },
    {
      name: 'Riad Kniza',
      category: '4-star Boutique',
      distance: '2.5 km',
      price: 'From €120/night',
      discount: '20% conference discount',
      amenities: ['Traditional', 'Breakfast', 'Terrace'],
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000'
    },
    {
      name: 'Ibis Marrakech',
      category: '3-star',
      distance: '1.5 km',
      price: 'From €65/night',
      discount: 'Special group rates',
      amenities: ['WiFi', 'Restaurant', 'Parking'],
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000'
    }
  ]

  const attractions = [
    {
      name: 'Jemaa el-Fnaa',
      type: 'UNESCO World Heritage',
      distance: '3 km',
      description: 'Famous square with entertainers, food stalls, and traditional atmosphere'
    },
    {
      name: 'Majorelle Garden',
      type: 'Botanical Garden',
      distance: '2 km',
      description: 'Beautiful gardens with exotic plants and Berber Museum'
    },
    {
      name: 'Bahia Palace',
      type: 'Historical Monument',
      distance: '3.5 km',
      description: '19th century palace with stunning architecture and gardens'
    },
    {
      name: 'Koutoubia Mosque',
      type: 'Landmark',
      distance: '2.5 km',
      description: 'Iconic 12th century mosque and minaret'
    }
  ]

  const transportation = [
    {
      type: 'From Airport',
      options: [
        { method: 'Taxi', time: '15-20 min', cost: '150-200 MAD (€15-20)' },
        { method: 'Conference Shuttle', time: '20-25 min', cost: 'Free with registration' },
        { method: 'Bus', time: '30-40 min', cost: '30 MAD (€3)' }
      ]
    },
    {
      type: 'Local Transport',
      options: [
        { method: 'Petit Taxi', time: 'Variable', cost: '20-50 MAD' },
        { method: 'Bus', time: 'Variable', cost: '4 MAD' },
        { method: 'Horse Carriage', time: 'Variable', cost: 'Negotiable' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2000"
            alt="Marrakech"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Venue</h1>
            <p className="text-xl max-w-3xl">
              Join us in the enchanting city of Marrakech, where ancient traditions meet modern innovation
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['venue', 'hotels', 'travel', 'explore'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* Venue Tab */}
          {activeTab === 'venue' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Palais des Congrès de Marrakech</h2>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-gray-600">Avenue Mohammed VI, Marrakech 40000, Morocco</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-600">+212 524-339-000</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-600">info@sil2025.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {venueFeatures.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{feature.title}</p>
                              <p className="text-xs text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  
                  <div className="h-full min-h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000"
                      alt="Conference Venue"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Venue Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-3">Main Auditorium</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 1000+ seat capacity</li>
                    <li>• State-of-the-art AV system</li>
                    <li>• Live streaming capabilities</li>
                    <li>• Simultaneous translation</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-3">Breakout Rooms</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 10 rooms (50-200 capacity)</li>
                    <li>• Flexible configurations</li>
                    <li>• Full presentation equipment</li>
                    <li>• Natural lighting</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-3">Exhibition Space</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 2000 m² exhibition area</li>
                    <li>• 50+ booth spaces</li>
                    <li>• Networking areas</li>
                    <li>• Coffee stations</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Hotels Tab */}
          {activeTab === 'hotels' && (
            <div className="space-y-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Special Conference Rates</h4>
                    <p className="mt-1 text-blue-800 text-sm">
                      Use code "SIL2025" when booking at partner hotels for exclusive discounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{hotel.name}</h3>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < parseInt(hotel.category) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{hotel.category}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Distance:</span>
                          <span className="font-semibold">{hotel.distance}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-semibold">{hotel.price}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Discount:</span>
                          <span className="font-semibold text-green-600">{hotel.discount}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-4">
                  Need help finding accommodation? Our local team can assist with hotel bookings and recommendations.
                </p>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Contact Accommodation Team
                </button>
              </div>
            </div>
          )}

          {/* Travel Tab */}
          {activeTab === 'travel' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Getting to Marrakech</h2>
                
                {/* International Travel */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Plane className="w-6 h-6 text-blue-600" />
                    <span>By Air</span>
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Marrakech Menara Airport (RAK)</h4>
                    <p className="text-gray-600 mb-4">
                      International airport with direct flights from major cities worldwide. 
                      Located just 6km from the city center.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Direct Flights From:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Paris, London, Madrid, Frankfurt</li>
                          <li>• Dubai, Doha, Istanbul</li>
                          <li>• New York (seasonal)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Airlines:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Royal Air Maroc</li>
                          <li>• Air France, Ryanair, EasyJet</li>
                          <li>• Emirates, Qatar Airways</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Local Transportation */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Local Transportation</h3>
                  {transportation.map((trans, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="font-medium mb-3">{trans.type}</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {trans.options.map((option, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4">
                            <h5 className="font-semibold text-blue-600">{option.method}</h5>
                            <p className="text-sm text-gray-600 mt-1">Time: {option.time}</p>
                            <p className="text-sm text-gray-600">Cost: {option.cost}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visa Information */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-900 mb-3">Visa Information</h4>
                  <p className="text-yellow-800 text-sm mb-3">
                    Citizens of many countries can enter Morocco visa-free for up to 90 days. 
                    Please check with the Moroccan embassy in your country for specific requirements.
                  </p>
                  <p className="text-yellow-800 text-sm">
                    We provide invitation letters for visa applications upon request.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Explore Tab */}
          {activeTab === 'explore' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Explore Marrakech</h2>
                <p className="text-gray-600 mb-8">
                  Make the most of your visit by exploring the rich culture and history of the Red City.
                </p>

                {/* Weather Info */}
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white mb-8">
                  <div className="flex items-center space-x-4">
                    <Sun className="w-12 h-12" />
                    <div>
                      <h3 className="text-xl font-bold">Weather in May</h3>
                      <p>Average: 22-28°C (72-82°F) • Sunny and pleasant • Perfect for sightseeing</p>
                    </div>
                  </div>
                </div>

                {/* Attractions */}
                <h3 className="text-xl font-semibold mb-4">Must-See Attractions</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {attractions.map((attraction, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{attraction.name}</h4>
                        <span className="text-sm text-gray-600">{attraction.distance}</span>
                      </div>
                      <p className="text-sm text-blue-600 mb-2">{attraction.type}</p>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  ))}
                </div>

                {/* Cultural Tips */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>Cultural Tips</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li>• Dress modestly, especially at religious sites</li>
                      <li>• Friday is the holy day - some places close</li>
                      <li>• Bargaining is expected in souks</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Learn basic Arabic/French phrases</li>
                      <li>• Tipping is customary (10-15%)</li>
                      <li>• Ask permission before photographing people</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Program */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Conference Social Program</h3>
                <p className="mb-6 opacity-90">
                  Join us for an unforgettable gala dinner in a traditional Moroccan setting with 
                  entertainment, local cuisine, and networking opportunities.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VenuePage