import React, { useState } from 'react'
import { 
  User, Mail, Phone, MapPin, Building, Globe, CreditCard, 
  Calendar, Check, AlertCircle, ChevronRight, Info
} from 'lucide-react'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    status: '',
    affiliation: '',
    country: '',
    address: '',
    phone: '',
    email: '',
    galaDinner: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFees, setSelectedFees] = useState(0)

  // Calculate if early bird rate applies
  const earlyBirdDeadline = new Date('2025-03-31')
  const isEarlyBird = new Date() < earlyBirdDeadline

  const registrationFees = {
    earlyBird: {
      moroccan: { academic: 1500, student: 750 },
      international: { academic: 300, student: 200 }
    },
    regular: {
      moroccan: { academic: 2000, student: 1000 },
      international: { academic: 400, student: 300 }
    },
    galaDinner: 50 // EUR or 500 MAD
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const calculateFees = () => {
    const rates = isEarlyBird ? registrationFees.earlyBird : registrationFees.regular
    const isMoroccan = formData.country?.toLowerCase() === 'morocco'
    const category = formData.status === 'student' ? 'student' : 'academic'
    
    let baseFee = isMoroccan 
      ? rates.moroccan[category] 
      : rates.international[category]
    
    let currency = isMoroccan ? 'MAD' : 'EUR'
    let galaFee = formData.galaDinner ? (isMoroccan ? 500 : 50) : 0
    
    return {
      base: baseFee,
      gala: galaFee,
      total: baseFee + galaFee,
      currency: currency
    }
  }

  const fees = calculateFees()

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Registration Type' },
    { number: 3, title: 'Payment' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Registration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Register for SIL 2025 and join us in Marrakech for an unforgettable conference experience
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? <Check className="w-6 h-6" /> : step.number}
                  </div>
                  <span className="mt-2 text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 md:w-32 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Early Bird Notice */}
            {isEarlyBird && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <Info className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900">Early Bird Registration</h4>
                  <p className="text-green-700 text-sm">Save up to 25% by registering before March 31, 2025</p>
                </div>
              </div>
            )}

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Affiliation *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="University/Company"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="Morocco">Morocco</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Canada">Canada</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                        placeholder="Street address, City, State/Province, Postal Code"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Registration Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Registration Type</h2>

                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Select your status *
                  </label>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="academic"
                        checked={formData.status === 'academic'}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="p-6 border-2 border-gray-200 rounded-xl peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
                        <h3 className="font-semibold text-lg mb-2">Academic / Professional</h3>
                        <p className="text-gray-600 text-sm">For researchers, professors, and industry professionals</p>
                        <p className="mt-3 font-bold text-blue-600">
                          {isEarlyBird ? (
                            formData.country === 'Morocco' ? '1,500 MAD' : '€300'
                          ) : (
                            formData.country === 'Morocco' ? '2,000 MAD' : '€400'
                          )}
                        </p>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="student"
                        checked={formData.status === 'student'}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="p-6 border-2 border-gray-200 rounded-xl peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
                        <h3 className="font-semibold text-lg mb-2">PhD Student</h3>
                        <p className="text-gray-600 text-sm">For full-time PhD students (proof required)</p>
                        <p className="mt-3 font-bold text-blue-600">
                          {isEarlyBird ? (
                            formData.country === 'Morocco' ? '750 MAD' : '€200'
                          ) : (
                            formData.country === 'Morocco' ? '1,000 MAD' : '€300'
                          )}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="galaDinner"
                      checked={formData.galaDinner}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">Gala Dinner & Social Program</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Join us for an evening of networking and entertainment
                      </p>
                      <p className="font-bold text-blue-600 mt-2">
                        {formData.country === 'Morocco' ? '500 MAD' : '€50'}
                      </p>
                    </div>
                  </label>
                </div>

                {/* Fee Summary */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4">Registration Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Conference Registration ({formData.status || 'Not selected'})</span>
                      <span className="font-semibold">{fees.base} {fees.currency}</span>
                    </div>
                    {formData.galaDinner && (
                      <div className="flex justify-between">
                        <span>Gala Dinner</span>
                        <span className="font-semibold">{fees.gala} {fees.currency}</span>
                      </div>
                    )}
                    <div className="pt-2 mt-2 border-t border-blue-200">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">{fees.total} {fees.currency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.status}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Proceed to Payment</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">Important Payment Information</h4>
                      <p className="text-yellow-800 text-sm mt-1">
                        Please complete the bank transfer and email your payment proof to complete registration
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Bank Transfer Details</h3>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Account Holder:</span>
                        <p className="font-semibold">ASS. Marocaine de l'Innovation (AMINOV)</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Bank:</span>
                        <p className="font-semibold">Banque Populaire</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Agency:</span>
                        <p className="font-semibold">Agence BP Tensift, Avenue Abdelkrim Khattabi, Marrakech</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">RIB:</span>
                        <p className="font-mono font-semibold">145450211168868321000368</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Swift Code:</span>
                        <p className="font-mono font-semibold">BCPOMAMC</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">IBAN:</span>
                        <p className="font-mono font-semibold text-sm">MA145450211168868321000368</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Total Amount Due:</h4>
                  <div className="text-3xl font-bold text-blue-600">
                    {fees.total} {fees.currency}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold mb-3">Next Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Complete the bank transfer using the details above</li>
                    <li>Take a screenshot or photo of your payment confirmation</li>
                    <li>Email the payment proof to: <span className="font-semibold">sil25@uca.ac.ma</span></li>
                    <li>You will receive a confirmation email within 48 hours</li>
                  </ol>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert('Registration form will be submitted. In production, this would send an email with instructions.')}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Complete Registration</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Calendar className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Important Dates</h3>
            <p className="text-gray-600 text-sm">
              Early Bird Deadline: March 31, 2025<br />
              Regular Registration: Until April 30, 2025
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Cancellation Policy</h3>
            <p className="text-gray-600 text-sm">
              Full refund until April 1, 2025<br />
              50% refund until April 20, 2025
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
            <p className="text-gray-600 text-sm">
              Contact us at:<br />
              sil25@uca.ac.ma
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage