import React from 'react'
import { AdvisoryMember } from '@/types/committee'

interface AdvisoryBoardTabProps {
  members: AdvisoryMember[]
}

const AdvisoryBoardTab = ({ members }: AdvisoryBoardTabProps) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-2xl font-bold mb-4">Distinguished Advisory Board</h2>
        <p className="opacity-90">
          Our advisory board comprises world-renowned pioneers who provide strategic guidance 
          and ensure the conference maintains the highest standards of excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.affiliation}</p>
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
        <p className="text-gray-600 mb-6">
          We're always looking for dedicated volunteers to help make SIL 2025 a success. 
          Join us as a reviewer, session chair, or volunteer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Become a Reviewer
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
            Volunteer Opportunities
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdvisoryBoardTab