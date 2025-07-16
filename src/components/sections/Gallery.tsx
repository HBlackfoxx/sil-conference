"use client"

import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
      alt: 'Conference Opening Ceremony',
      category: 'ceremony'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000',
      alt: 'Workshop Session',
      category: 'workshop'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000',
      alt: 'Networking Event',
      category: 'networking'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000',
      alt: 'Keynote Presentation',
      category: 'presentation'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000',
      alt: 'Panel Discussion',
      category: 'panel'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000',
      alt: 'Exhibition Hall',
      category: 'exhibition'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000',
      alt: 'Technical Session',
      category: 'workshop'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000',
      alt: 'Awards Ceremony',
      category: 'ceremony'
    }
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length
    
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Event Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Conference Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Relive the highlights from our previous conferences and get a glimpse of what awaits you at SIL 2025.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => openLightbox(image, index)}
            >
              <div className={index === 0 ? 'h-96' : 'h-48'}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm opacity-80 capitalize">{image.category}</p>
                </div>
              </div>
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-gray-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-white text-lg">{selectedImage.alt}</p>
                <p className="text-gray-400">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '1000+', label: 'Photos Taken' },
            { number: '50+', label: 'Sessions Recorded' },
            { number: '200+', label: 'Happy Moments' },
            { number: '3', label: 'Days of Innovation' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery