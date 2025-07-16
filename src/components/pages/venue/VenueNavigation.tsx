import React from 'react'

interface VenueNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const VenueNavigation = ({ activeTab, setActiveTab }: VenueNavigationProps) => {
  const tabs = [
    { id: 'venue', label: 'Venue Info' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'travel', label: 'Travel' },
    { id: 'attractions', label: 'Attractions' }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default VenueNavigation