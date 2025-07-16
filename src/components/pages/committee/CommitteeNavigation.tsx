import React from 'react'
import { Users, BookOpen, Award } from 'lucide-react'

type TabType = 'organizing' | 'scientific' | 'advisory'

interface CommitteeNavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const CommitteeNavigation = ({ activeTab, onTabChange }: CommitteeNavigationProps) => {
  const tabs = [
    { id: 'organizing' as TabType, label: 'Organizing Committee', icon: Users },
    { id: 'scientific' as TabType, label: 'Scientific Committee', icon: BookOpen },
    { id: 'advisory' as TabType, label: 'Advisory Board', icon: Award }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map((tab) => {
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CommitteeNavigation