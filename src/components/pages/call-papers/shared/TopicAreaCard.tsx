import React from 'react'
import { TopicArea } from '@/types/call-papers'

interface TopicAreaCardProps {
  area: TopicArea
}

const TopicAreaCard = ({ area }: TopicAreaCardProps) => {
  const Icon = area.icon

  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg">{area.title}</h3>
      </div>
      <ul className="space-y-2">
        {area.topics.map((topic, idx) => (
          <li key={idx} className="flex items-center space-x-2 text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span className="text-sm">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopicAreaCard