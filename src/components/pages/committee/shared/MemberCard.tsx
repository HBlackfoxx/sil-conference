import React, { useState } from 'react'
import { Building, Mail, ChevronDown, Linkedin, Twitter } from 'lucide-react'
import { CommitteeMember } from '@/types/committee'

interface MemberCardProps {
  member: CommitteeMember
  index: number
  expandedBio: number | null
  onBioToggle: (index: number | null) => void
}

const MemberCard = ({ member, index, expandedBio, onBioToggle }: MemberCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-80 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-bold text-xl">{member.name}</h3>
          <p className="text-yellow-400 font-medium">{member.role}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <Building className="w-4 h-4" />
          <span className="text-sm">{member.affiliation}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${member.email}`} className="text-sm hover:text-blue-600">
            {member.email}
          </a>
        </div>
        
        {/* Expandable Bio */}
        <div className="mb-4">
          <button
            onClick={() => onBioToggle(expandedBio === index ? null : index)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center space-x-1"
          >
            <span>View Bio</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${
              expandedBio === index ? 'rotate-180' : ''
            }`} />
          </button>
          {expandedBio === index && (
            <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
          )}
        </div>

        {/* Social Links */}
        <div className="flex space-x-3">
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberCard