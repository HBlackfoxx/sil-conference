import React from 'react'
import { CheckCircle, Send, Download } from 'lucide-react'

const OverviewTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Conference Overview</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            The International Conference on Smart Innovation & Logistics (SIL 2025) provides a premier 
            interdisciplinary platform for researchers, practitioners, and educators to present and discuss 
            the most recent innovations, trends, and concerns as well as practical challenges encountered 
            and solutions adopted in the fields of Smart Innovation and Logistics.
          </p>
          <p className="mb-6">
            We invite original contributions that advance the state-of-the-art in areas including but not 
            limited to artificial intelligence, machine learning, IoT, blockchain, sustainable technologies, 
            and their applications in logistics and supply chain management.
          </p>

          <h3 className="text-xl font-semibold mb-4">Why Submit to SIL 2025?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Springer Publication</h4>
                <p className="text-sm">All accepted papers will be published in Springer LNCS proceedings</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Indexing</h4>
                <p className="text-sm">Papers will be indexed in Scopus, ISI, and other major databases</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Best Paper Awards</h4>
                <p className="text-sm">Outstanding papers will receive recognition and prizes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Journal Special Issues</h4>
                <p className="text-sm">Selected papers invited for journal special issues</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Submit Your Paper</span>
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Download CFP PDF</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OverviewTab