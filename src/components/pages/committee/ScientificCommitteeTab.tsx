import React from 'react'
import { Globe, Users, Award, Star, Shield } from 'lucide-react'
import { ScientificMember } from '@/types/committee'

interface ScientificCommitteeTabProps {
  members: ScientificMember[]
}

const ScientificCommitteeTab = ({ members }: ScientificCommitteeTabProps) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Scientific Committee Members</h2>
        <p className="text-gray-600 mb-8">
          Our scientific committee consists of leading researchers and experts from around the world, 
          ensuring the highest quality of peer review for all submissions.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{member.affiliation}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">{member.expertise}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold">25+</div>
          <div className="text-gray-600 text-sm">Countries</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold">50+</div>
          <div className="text-gray-600 text-sm">Reviewers</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold">15+</div>
          <div className="text-gray-600 text-sm">IEEE Fellows</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold">100%</div>
          <div className="text-gray-600 text-sm">PhD Holders</div>
        </div>
      </div>
    </div>
  )
}

export default ScientificCommitteeTab