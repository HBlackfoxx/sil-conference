import React from 'react'
import MemberCard from './shared/MemberCard'
import { CommitteeMember } from '@/types/committee'

interface OrganizingCommitteeTabProps {
  members: CommitteeMember[]
  expandedBio: number | null
  onBioToggle: (index: number | null) => void
}

const OrganizingCommitteeTab = ({ members, expandedBio, onBioToggle }: OrganizingCommitteeTabProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <MemberCard
          key={index}
          member={member}
          index={index}
          expandedBio={expandedBio}
          onBioToggle={onBioToggle}
        />
      ))}
    </div>
  )
}

export default OrganizingCommitteeTab