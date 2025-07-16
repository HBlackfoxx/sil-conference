'use client'

import React, { useState } from 'react'
import CommitteeHeader from './CommitteeHeader'
import CommitteeNavigation from './CommitteeNavigation'
import OrganizingCommitteeTab from './OrganizingCommitteeTab'
import ScientificCommitteeTab from './ScientificCommitteeTab'
import AdvisoryBoardTab from './AdvisoryBoardTab'
import { committeeData } from '@/data/committee'

type TabType = 'organizing' | 'scientific' | 'advisory'

const CommitteeContent = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>('organizing')

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <CommitteeHeader />
        
        <CommitteeNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        <div className="max-w-7xl mx-auto">
          {activeTab === 'organizing' && (
            <OrganizingCommitteeTab
              members={committeeData.organizingCommittee}
              expandedBio={expandedBio}
              onBioToggle={setExpandedBio}
            />
          )}

          {activeTab === 'scientific' && (
            <ScientificCommitteeTab members={committeeData.scientificCommittee} />
          )}

          {activeTab === 'advisory' && (
            <AdvisoryBoardTab members={committeeData.advisoryBoard} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CommitteeContent