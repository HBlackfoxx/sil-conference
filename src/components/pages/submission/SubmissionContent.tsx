'use client'

import React, { useState } from 'react'
import { 
  Upload, FileText, Users, Tag, AlertCircle, CheckCircle,
  X, Plus, Trash2, Download, Eye, Info, Shield,
  ChevronRight, ChevronLeft, Loader2,
  BookOpen, Globe, Hash, Calendar, User, Briefcase
} from 'lucide-react'

const SubmissionContent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [authors, setAuthors] = useState([
    { name: '', email: '', affiliation: '', country: '', isCorresponding: true }
  ])
  
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: [],
    track: '',
    paperType: '',
    conflictOfInterest: '',
    ethicsStatement: false,
    originalityStatement: false
  })

  const tracks = [
    'AI & Machine Learning',
    'Smart Logistics',
    'Sustainability',
    'Industry 4.0',
    'Blockchain',
    'IoT & Edge Computing'
  ]

  const paperTypes = [
    { value: 'full', label: 'Full Paper (10-12 pages)', icon: BookOpen },
    { value: 'short', label: 'Short Paper (6-8 pages)', icon: FileText },
    { value: 'industry', label: 'Industry Paper (4-8 pages)', icon: Briefcase },
    { value: 'poster', label: 'Poster Paper (2-4 pages)', icon: Hash }
  ]

  const steps = [
    { number: 1, title: 'Paper Details', icon: FileText },
    { number: 2, title: 'Authors', icon: Users },
    { number: 3, title: 'Upload & Submit', icon: Upload }
  ]

  const handleAddAuthor = () => {
    setAuthors([...authors, { name: '', email: '', affiliation: '', country: '', isCorresponding: false }])
  }

  const handleRemoveAuthor = (index) => {
    if (authors.length > 1) {
      setAuthors(authors.filter((_, i) => i !== index))
    }
  }

  const handleAuthorChange = (index, field, value) => {
    const newAuthors = [...authors]
    newAuthors[index][field] = value
    setAuthors(newAuthors)
  }

  const handleKeywordAdd = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault()
      if (formData.keywords.length < 5) {
        setFormData({
          ...formData,
          keywords: [...formData.keywords, e.target.value.trim()]
        })
        e.target.value = ''
      }
    }
  }

  const handleKeywordRemove = (index) => {
    setFormData({
      ...formData,
      keywords: formData.keywords.filter((_, i) => i !== index)
    })
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        file: file
      })
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Paper submitted successfully! You will receive a confirmation email.')
    }, 3000)
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.title && formData.abstract && formData.keywords.length >= 3 && formData.track && formData.paperType
      case 2:
        return authors.every(author => author.name && author.email && author.affiliation && author.country)
      case 3:
        return uploadedFile && formData.ethicsStatement && formData.originalityStatement
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Paper</h1>
            <p className="text-gray-600">SIL 2025 Conference Paper Submission</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {currentStep > step.number ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <span className="mt-2 text-sm font-medium">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                        currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Paper Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Paper Information</h2>

                {/* Paper Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paper Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your paper title"
                  />
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Abstract * (150-250 words)
                  </label>
                  <textarea
                    rows="6"
                    value={formData.abstract}
                    onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your paper abstract"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.abstract.split(' ').filter(word => word).length} words
                  </p>
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords * (3-5 keywords)
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        <span>{keyword}</span>
                        <button
                          onClick={() => handleKeywordRemove(index)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  {formData.keywords.length < 5 && (
                    <input
                      type="text"
                      onKeyDown={handleKeywordAdd}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Type a keyword and press Enter"
                    />
                  )}
                </div>

                {/* Track Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conference Track *
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({...formData, track: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select a track</option>
                    {tracks.map((track) => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </div>

                {/* Paper Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Paper Type *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {paperTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <label
                          key={type.value}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="paperType"
                            value={type.value}
                            checked={formData.paperType === type.value}
                            onChange={(e) => setFormData({...formData, paperType: e.target.value})}
                            className="sr-only peer"
                          />
                          <div className="p-4 border-2 border-gray-200 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
                            <div className="flex items-center space-x-3">
                              <Icon className="w-6 h-6 text-gray-600 peer-checked:text-blue-600" />
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Authors */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Author Information</h2>
                  <button
                    onClick={handleAddAuthor}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Author</span>
                  </button>
                </div>

                {authors.map((author, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Author {index + 1}</h3>
                      <div className="flex items-center space-x-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={author.isCorresponding}
                            onChange={(e) => handleAuthorChange(index, 'isCorresponding', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm">Corresponding Author</span>
                        </label>
                        {authors.length > 1 && (
                          <button
                            onClick={() => handleRemoveAuthor(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={author.name}
                          onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={author.email}
                          onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Affiliation *
                        </label>
                        <input
                          type="text"
                          value={author.affiliation}
                          onChange={(e) => handleAuthorChange(index, 'affiliation', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="University/Company"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          value={author.country}
                          onChange={(e) => handleAuthorChange(index, 'country', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">Select Country</option>
                          <option value="Morocco">Morocco</option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">Important Notes:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>List authors in the order they should appear in the paper</li>
                        <li>Ensure email addresses are correct for all authors</li>
                        <li>At least one author must be designated as corresponding author</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Upload & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Upload Paper & Submit</h2>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload Paper (PDF only) *
                  </label>
                  
                  {!uploadedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop your PDF here or</p>
                      <label className="inline-block">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileUpload}
                          className="sr-only"
                        />
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
                          Browse Files
                        </span>
                      </label>
                      <p className="text-sm text-gray-500 mt-2">Maximum file size: 20MB</p>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="font-medium">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-500">{uploadedFile.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setUploadedFile(null)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conflict of Interest */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conflict of Interest Declaration
                  </label>
                  <textarea
                    rows="3"
                    value={formData.conflictOfInterest}
                    onChange={(e) => setFormData({...formData, conflictOfInterest: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Declare any conflicts of interest or type 'None' if not applicable"
                  />
                </div>

                {/* Statements */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.ethicsStatement}
                      onChange={(e) => setFormData({...formData, ethicsStatement: e.target.checked})}
                      className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <p className="font-medium">Ethics Statement *</p>
                      <p className="text-sm text-gray-600">
                        I confirm that this work follows ethical guidelines and all necessary approvals have been obtained.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.originalityStatement}
                      onChange={(e) => setFormData({...formData, originalityStatement: e.target.checked})}
                      className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <p className="font-medium">Originality Declaration *</p>
                      <p className="text-sm text-gray-600">
                        I confirm that this paper is original work and has not been published or submitted elsewhere.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Submission Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Submission Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paper Title:</span>
                      <span className="font-medium">{formData.title || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Track:</span>
                      <span className="font-medium">{formData.track || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paper Type:</span>
                      <span className="font-medium">{paperTypes.find(t => t.value === formData.paperType)?.label || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Authors:</span>
                      <span className="font-medium">{authors.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Keywords:</span>
                      <span className="font-medium">{formData.keywords.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!validateStep(currentStep)}
                  className={`${currentStep === 1 ? 'ml-auto' : ''} px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!validateStep(3) || isSubmitting}
                  className="ml-auto px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Submit Paper</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Need Help?</h4>
                <p className="text-yellow-800 text-sm mb-3">
                  If you encounter any issues during submission, please contact our technical support team.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="mailto:submission@sil2025.com" className="text-yellow-700 hover:text-yellow-800 font-medium">
                    submission@sil2025.com
                  </a>
                  <a href="#" className="text-yellow-700 hover:text-yellow-800 font-medium">
                    View Submission Guidelines
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionContent