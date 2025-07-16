import React from 'react'
import { ChevronRight } from 'lucide-react'
import TopicAreaCard from './shared/TopicAreaCard'
import { TopicArea } from '@/types/call-papers'

interface TopicsTabProps {
  topicAreas: TopicArea[]
}

const TopicsTab = ({ topicAreas }: TopicsTabProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Conference Topics</h2>
        <p className="text-gray-600 mb-8">
          We welcome submissions in the following areas, but not limited to:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {topicAreas.map((area, index) => (
            <TopicAreaCard key={index} area={area} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl">
          <h3 className="font-semibold text-lg mb-3">Special Sessions</h3>
          <p className="text-gray-700 mb-4">
            SIL 2025 also welcomes proposals for special sessions on emerging topics. 
            Special session proposals should include a brief description, list of topics, 
            and potential contributors.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2">
            <span>Propose a Special Session</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopicsTab