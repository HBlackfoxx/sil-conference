import React from 'react'

type TabType = 'overview' | 'topics' | 'guidelines' | 'dates'

interface CallPapersNavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const CallPapersNavigation = ({ activeTab, onTabChange }: CallPapersNavigationProps) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'topics', label: 'Topics' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'dates', label: 'Dates' }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default CallPapersNavigation