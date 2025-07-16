import React from 'react'
import { MapPin, Star, Wifi, Car, Utensils, Dumbbell } from 'lucide-react'

interface Hotel {
  name: string
  category: string
  distance: string
  price: string
  discount?: string
  amenities: string[]
  image: string
  rating?: number
}

interface HotelCardProps {
  hotel: Hotel
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />
      case 'parking':
        return <Car className="w-4 h-4" />
      case 'restaurant':
        return <Utensils className="w-4 h-4" />
      case 'gym':
        return <Dumbbell className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="aspect-video bg-gray-200 relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        {hotel.discount && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {hotel.discount}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          {hotel.rating && (
            <div className="flex items-center space-x-1">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-2">{hotel.category}</p>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{hotel.distance} from venue</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">{hotel.price}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard