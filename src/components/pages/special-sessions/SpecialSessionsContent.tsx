'use client'

import React, { useState } from 'react'
import { Sparkles } from 'lucide-react'
import SpecialSessionsHeader from './SpecialSessionsHeader'
import SpecialSessionsNavigation from './SpecialSessionsNavigation'
import AcceptedSessionsTab from './AcceptedSessionsTab'
import CallForProposalsTab from './CallForProposalsTab'
import GuidelinesTab from './GuidelinesTab'

const SpecialSessionsContent = () => {
  const [expandedSession, setExpandedSession] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('accepted')

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center space-x-3">
            <Sparkles className="w-10 h-10 text-yellow-500" />
            <span>Special Sessions</span>
          </h1>
          <SpecialSessionsHeader />
        </div>

        {/* Navigation Tabs */}
        <SpecialSessionsNavigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Accepted Sessions Tab */}
          {activeTab === 'accepted' && (
            <AcceptedSessionsTab 
              expandedSession={expandedSession}
              setExpandedSession={setExpandedSession}
            />
          )}

          {/* Call for Proposals Tab */}
          {activeTab === 'cfp' && <CallForProposalsTab />}

          {/* Guidelines Tab */}
          {activeTab === 'guidelines' && <GuidelinesTab />}
        </div>
      </div>
    </div>
  )
}

export default SpecialSessionsContent