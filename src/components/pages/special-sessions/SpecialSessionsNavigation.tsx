import React from 'react'

interface SpecialSessionsNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const SpecialSessionsNavigation = ({ activeTab, setActiveTab }: SpecialSessionsNavigationProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button
        onClick={() => setActiveTab('accepted')}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          activeTab === 'accepted'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Accepted Sessions
      </button>
      <button
        onClick={() => setActiveTab('cfp')}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          activeTab === 'cfp'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Call for Proposals
      </button>
      <button
        onClick={() => setActiveTab('guidelines')}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          activeTab === 'guidelines'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Guidelines
      </button>
    </div>
  )
}

export default SpecialSessionsNavigation