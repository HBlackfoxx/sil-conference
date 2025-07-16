import React from 'react'
import { FileText, Award, Users, BookOpen } from 'lucide-react'

const CallPapersHeader = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Call for Papers</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          SIL 2025 invites high-quality research papers on smart innovation and logistics. 
          Share your groundbreaking research with a global audience of experts.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">100+</div>
          <div className="text-gray-600 text-sm">Papers Expected</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">30%</div>
          <div className="text-gray-600 text-sm">Acceptance Rate</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">3+</div>
          <div className="text-gray-600 text-sm">Reviewers per Paper</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
          <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">Springer</div>
          <div className="text-gray-600 text-sm">Publication</div>
        </div>
      </div>
    </div>
  )
}

export default CallPapersHeader