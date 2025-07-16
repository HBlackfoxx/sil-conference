'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'
import CallPapersHeader from './CallPapersHeader'
import CallPapersNavigation from './CallPapersNavigation'
import OverviewTab from './OverviewTab'
import TopicsTab from './TopicsTab'
import GuidelinesTab from './GuidelinesTab'
import DatesTab from './DatesTab'
import { callPapersData } from '@/data/call-papers'

type TabType = 'overview' | 'topics' | 'guidelines' | 'dates'

const CallPapersContent = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <CallPapersHeader />
        
        <CallPapersNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'topics' && <TopicsTab topicAreas={callPapersData.topicAreas} />}
          {activeTab === 'guidelines' && <GuidelinesTab guidelines={callPapersData.submissionGuidelines} />}
          {activeTab === 'dates' && <DatesTab dates={callPapersData.importantDates} />}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Submit Your Research?</h3>
          <p className="mb-6 opacity-90">
            Join researchers from around the world in advancing the field of smart innovation and logistics.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Submit via EasyChair</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallPapersContent