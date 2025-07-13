import React, { useState } from 'react'
import { 
  User, FileText, Calendar, CreditCard, Settings, LogOut,
  Home, Bell, Download, Clock, CheckCircle, AlertCircle,
  Edit, Trash2, Eye, Plus, Filter, Search, ChevronRight,
  Award, Ticket, Mail, Phone, Building, Globe, Camera,
  BarChart3, TrendingUp, Users, Star, MapPin
} from 'lucide-react'

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showNotifications, setShowNotifications] = useState(false)

  // Mock user data
  const userData = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    role: 'Academic',
    affiliation: 'MIT Computer Science Lab',
    country: 'United States',
    registrationStatus: 'confirmed',
    paperSubmissions: 2,
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400'
  }

  // Mock data
  const notifications = [
    { id: 1, type: 'success', message: 'Your paper "AI in Logistics" has been accepted', time: '2 hours ago', unread: true },
    { id: 2, type: 'info', message: 'Early bird registration deadline approaching', time: '1 day ago', unread: true },
    { id: 3, type: 'warning', message: 'Please complete your camera-ready submission', time: '3 days ago', unread: false }
  ]

  const papers = [
    {
      id: 'SIL-2025-047',
      title: 'Deep Learning Applications in Supply Chain Optimization',
      status: 'accepted',
      track: 'AI & Machine Learning',
      submittedDate: '2025-03-10',
      reviewScore: 8.5,
      cameraReady: false
    },
    {
      id: 'SIL-2025-112',
      title: 'Blockchain-based Traceability in Food Supply Networks',
      status: 'under-review',
      track: 'Smart Logistics',
      submittedDate: '2025-03-14',
      reviewScore: null,
      cameraReady: false
    }
  ]

  const registrationDetails = {
    type: 'Academic / Professional',
    earlyBird: true,
    amount: 300,
    currency: 'EUR',
    galaDinner: true,
    paymentStatus: 'paid',
    invoiceNumber: 'INV-2025-0234',
    registrationDate: '2025-02-28'
  }

  const schedule = [
    { session: 'Opening Keynote', time: 'May 15, 09:30', location: 'Main Auditorium', type: 'keynote' },
    { session: 'Your Presentation: Deep Learning Applications', time: 'May 16, 14:30', location: 'Room A', type: 'presentation' },
    { session: 'Networking Lunch', time: 'May 16, 12:30', location: 'Restaurant', type: 'social' },
    { session: 'Gala Dinner', time: 'May 16, 20:00', location: 'Crystal Ballroom', type: 'social' }
  ]

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'papers', label: 'My Papers', icon: FileText },
    { id: 'registration', label: 'Registration', icon: Ticket },
    { id: 'schedule', label: 'My Schedule', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'accepted': 'bg-green-100 text-green-800',
      'under-review': 'bg-yellow-100 text-yellow-800',
      'rejected': 'bg-red-100 text-red-800',
      'revision-needed': 'bg-orange-100 text-orange-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getNotificationIcon = (type) => {
    const icons = {
      'success': <CheckCircle className="w-5 h-5 text-green-600" />,
      'info': <AlertCircle className="w-5 h-5 text-blue-600" />,
      'warning': <AlertCircle className="w-5 h-5 text-yellow-600" />
    }
    return icons[type] || <AlertCircle className="w-5 h-5 text-gray-600" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                SIL
              </div>
              <span className="font-semibold text-lg">Conference Dashboard</span>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Bell className="w-6 h-6" />
                  {notifications.filter(n => n.unread).length > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                            notif.unread ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {getNotificationIcon(notif.type)}
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{notif.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.role}</p>
                </div>
              </div>

              <button className="p-2 text-gray-600 hover:text-gray-900">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-[calc(100vh-4rem)] shadow-md">
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Welcome back, {userData.name.split(' ')[1]}!</h1>
              
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <span className="text-2xl font-bold">{userData.paperSubmissions}</span>
                  </div>
                  <p className="text-gray-600">Papers Submitted</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Papers Accepted</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="w-8 h-8 text-purple-600" />
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <p className="text-gray-600">Sessions Attending</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <span className="text-2xl font-bold">8.5</span>
                  </div>
                  <p className="text-gray-600">Avg. Review Score</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <Download className="w-6 h-6 text-gray-600 mb-2" />
                    <p className="text-sm font-medium">Download Badge</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <FileText className="w-6 h-6 text-gray-600 mb-2" />
                    <p className="text-sm font-medium">Submit Paper</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <Calendar className="w-6 h-6 text-gray-600 mb-2" />
                    <p className="text-sm font-medium">View Schedule</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <CreditCard className="w-6 h-6 text-gray-600 mb-2" />
                    <p className="text-sm font-medium">Get Invoice</p>
                  </button>
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Your Upcoming Sessions</h2>
                <div className="space-y-3">
                  {schedule.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-12 rounded-full ${
                          item.type === 'keynote' ? 'bg-purple-500' : 
                          item.type === 'presentation' ? 'bg-blue-500' : 'bg-green-500'
                        }`} />
                        <div>
                          <p className="font-medium">{item.session}</p>
                          <p className="text-sm text-gray-600">{item.time} • {item.location}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Papers Tab */}
          {activeTab === 'papers' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">My Papers</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Submit New Paper</span>
                </button>
              </div>

              {/* Papers List */}
              <div className="space-y-4">
                {papers.map((paper) => (
                  <div key={paper.id} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{paper.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(paper.status)}`}>
                            {paper.status.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>ID: {paper.id}</span>
                          <span>Track: {paper.track}</span>
                          <span>Submitted: {paper.submittedDate}</span>
                          {paper.reviewScore && (
                            <span className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>{paper.reviewScore}/10</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    {paper.status === 'accepted' && !paper.cameraReady && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-yellow-600" />
                          <span className="text-sm text-yellow-800">Camera-ready submission pending</span>
                        </div>
                        <button className="text-sm font-medium text-yellow-600 hover:text-yellow-700">
                          Upload Now
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration Tab */}
          {activeTab === 'registration' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Registration Details</h1>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Registration Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Conference Registration</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registration Type</span>
                      <span className="font-medium">{registrationDetails.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Early Bird</span>
                      <span className="font-medium">{registrationDetails.earlyBird ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gala Dinner</span>
                      <span className="font-medium">{registrationDetails.galaDinner ? 'Included' : 'Not Included'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registration Date</span>
                      <span className="font-medium">{registrationDetails.registrationDate}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Paid</span>
                      <span className="font-medium">{registrationDetails.currency} {registrationDetails.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Status</span>
                      <span className="font-medium text-green-600">Confirmed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Invoice Number</span>
                      <span className="font-medium">{registrationDetails.invoiceNumber}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Invoice</span>
                  </button>
                </div>
              </div>

              {/* Badge Preview */}
              <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Your Conference Badge</h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 max-w-md mx-auto">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <img
                        src={userData.profileImage}
                        alt={userData.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold">{userData.name}</h3>
                      <p className="text-gray-600">{userData.affiliation}</p>
                      <p className="text-sm text-gray-500">{userData.country}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase">Registration ID</p>
                        <p className="font-mono font-bold">SIL-2025-0234</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Download Badge
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">My Conference Schedule</h1>
              
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Personal Schedule</h2>
                    <div className="flex items-center space-x-2">
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-2">
                        <Filter className="w-5 h-5" />
                        <span>Filter</span>
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {schedule.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className={`w-1 h-16 rounded-full ${
                          item.type === 'keynote' ? 'bg-purple-500' : 
                          item.type === 'presentation' ? 'bg-blue-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.session}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.time}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </span>
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">My Profile</h1>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-start space-x-8">
                  {/* Profile Image */}
                  <div className="text-center">
                    <div className="relative">
                      <img
                        src={userData.profileImage}
                        alt={userData.name}
                        className="w-32 h-32 rounded-full"
                      />
                      <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Camera className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="flex-1 grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={userData.name}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={userData.email}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={userData.affiliation}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                          <option>{userData.country}</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default UserDashboard