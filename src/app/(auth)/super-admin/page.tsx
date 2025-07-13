import React, { useState } from 'react'
import { 
  Users, FileText, CreditCard, Shield, BarChart3, Settings,
  TrendingUp, Clock, CheckCircle, XCircle, AlertCircle,
  Eye, Search, Filter, Download, Mail, UserCheck, UserX,
  DollarSign, Calendar, Activity, Database, Globe,
  ChevronRight, MoreVertical, RefreshCw, Loader2
} from 'lucide-react'

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showRoleModal, setShowRoleModal] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)

  // Mock data
  const stats = {
    totalUsers: 1847,
    activeReviewers: 45,
    pendingPayments: 23,
    totalRevenue: 285600,
    submittedPapers: 234,
    acceptedPapers: 67,
    rejectedPapers: 45,
    underReview: 122
  }

  const recentActivities = [
    { id: 1, type: 'payment', user: 'John Doe', action: 'Bank payment pending verification', amount: 300, time: '10 minutes ago' },
    { id: 2, type: 'paper', user: 'Jane Smith', action: 'Submitted new paper', paperId: 'SIL-2025-189', time: '1 hour ago' },
    { id: 3, type: 'user', user: 'Admin', action: 'Assigned reviewer role to Dr. Brown', time: '2 hours ago' },
    { id: 4, type: 'review', user: 'Dr. Johnson', action: 'Completed review for paper SIL-2025-145', time: '3 hours ago' }
  ]

  const pendingPayments = [
    {
      id: 1,
      user: 'Ahmed Hassan',
      email: 'ahmed@university.edu',
      amount: 1500,
      currency: 'MAD',
      type: 'Bank Transfer',
      reference: 'BT-2025-0456',
      date: '2025-01-15',
      status: 'pending',
      proof: 'payment-proof-1.pdf'
    },
    {
      id: 2,
      user: 'Maria Garcia',
      email: 'maria@company.com',
      amount: 300,
      currency: 'EUR',
      type: 'Bank Transfer',
      reference: 'BT-2025-0457',
      date: '2025-01-16',
      status: 'pending',
      proof: 'payment-proof-2.pdf'
    }
  ]

  const users = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah@mit.edu',
      role: 'user',
      status: 'active',
      joinDate: '2025-01-10',
      papers: 2,
      reviews: 0
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      email: 'mchen@stanford.edu',
      role: 'reviewer',
      status: 'active',
      joinDate: '2024-12-15',
      papers: 1,
      reviews: 8
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      email: 'emily@google.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-11-20',
      papers: 0,
      reviews: 0
    }
  ]

  const reviewerStats = [
    { name: 'Dr. Johnson', assigned: 12, completed: 10, pending: 2, avgScore: 7.8, avgTime: '2.5 days' },
    { name: 'Prof. Chen', assigned: 15, completed: 15, pending: 0, avgScore: 8.2, avgTime: '1.8 days' },
    { name: 'Dr. Brown', assigned: 8, completed: 5, pending: 3, avgScore: 7.5, avgTime: '3.2 days' }
  ]

  const handleVerifyPayment = (paymentId, approved) => {
    setSelectedPayment(null)
    alert(`Payment ${approved ? 'approved' : 'rejected'} successfully`)
  }

  const handleRoleChange = (userId, newRole) => {
    setShowRoleModal(false)
    setSelectedUser(null)
    alert(`Role updated to ${newRole}`)
  }

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'payments', label: 'Payment Verification', icon: CreditCard },
    { id: 'papers', label: 'Paper Management', icon: FileText },
    { id: 'reviewers', label: 'Reviewer Analytics', icon: UserCheck },
    { id: 'system', label: 'System Monitoring', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Super Admin Dashboard</h1>
                <p className="text-sm text-gray-600">SIL 2025 Conference Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <RefreshCw className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-[calc(100vh-73px)] shadow-md">
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-purple-50 text-purple-600'
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
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">+12%</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Total Users</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <UserCheck className="w-8 h-8 text-green-600" />
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.activeReviewers}</p>
                  <p className="text-gray-600 text-sm">Active Reviewers</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <AlertCircle className="w-8 h-8 text-yellow-600" />
                    <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Pending</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.pendingPayments}</p>
                  <p className="text-gray-600 text-sm">Pending Payments</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">+8%</span>
                  </div>
                  <p className="text-2xl font-bold">€{stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Total Revenue</p>
                </div>
              </div>

              {/* Paper Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                  <p className="text-gray-600 text-sm mb-2">Submitted Papers</p>
                  <p className="text-2xl font-bold">{stats.submittedPapers}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-600 text-sm mb-2">Accepted</p>
                  <p className="text-2xl font-bold text-green-600">{stats.acceptedPapers}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
                  <p className="text-gray-600 text-sm mb-2">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">{stats.rejectedPapers}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
                  <p className="text-gray-600 text-sm mb-2">Under Review</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.underReview}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'payment' ? 'bg-yellow-100 text-yellow-600' :
                          activity.type === 'paper' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {activity.type === 'payment' ? <CreditCard className="w-5 h-5" /> :
                           activity.type === 'paper' ? <FileText className="w-5 h-5" /> :
                           activity.type === 'user' ? <Users className="w-5 h-5" /> :
                           <CheckCircle className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* User Management Tab */}
          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">User Management</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                            user.role === 'reviewer' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <p>Papers: {user.papers}</p>
                          <p>Reviews: {user.reviews}</p>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => {
                              setSelectedUser(user)
                              setShowRoleModal(true)
                            }}
                            className="text-purple-600 hover:text-purple-700"
                          >
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Payment Verification Tab */}
          {activeTab === 'payments' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Payment Verification</h2>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="flex items-center space-x-2 text-yellow-600">
                    <Clock className="w-4 h-4" />
                    <span>{pendingPayments.length} pending verifications</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {pendingPayments.map((payment) => (
                  <div key={payment.id} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{payment.user}</h3>
                            <p className="text-sm text-gray-600">{payment.email}</p>
                          </div>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            Pending Verification
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Amount</p>
                            <p className="font-semibold">{payment.amount} {payment.currency}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Payment Type</p>
                            <p className="font-semibold">{payment.type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Reference</p>
                            <p className="font-semibold">{payment.reference}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">View Proof</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">Contact User</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-6">
                        <button
                          onClick={() => handleVerifyPayment(payment.id, true)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleVerifyPayment(payment.id, false)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                        >
                          <XCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviewer Analytics Tab */}
          {activeTab === 'reviewers' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Reviewer Analytics</h2>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Review Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Reviews</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Review Time</span>
                      <span className="font-semibold">2.3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Overdue Reviews</span>
                      <span className="font-semibold text-red-600">8</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Quality Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Review Score</span>
                      <span className="font-semibold">7.8/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Detailed Reviews</span>
                      <span className="font-semibold">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consistency Rate</span>
                      <span className="font-semibold">92%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Workload Distribution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Reviewers</span>
                      <span className="font-semibold">{stats.activeReviewers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Papers per Reviewer</span>
                      <span className="font-semibold">3.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Load</span>
                      <span className="font-semibold">8 papers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="font-semibold">Reviewer Performance</h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Reviewer</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Assigned</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Completed</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Pending</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Avg Score</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Avg Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reviewerStats.map((reviewer, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{reviewer.name}</td>
                        <td className="px-6 py-4">{reviewer.assigned}</td>
                        <td className="px-6 py-4 text-green-600">{reviewer.completed}</td>
                        <td className="px-6 py-4 text-yellow-600">{reviewer.pending}</td>
                        <td className="px-6 py-4">{reviewer.avgScore}/10</td>
                        <td className="px-6 py-4">{reviewer.avgTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* System Monitoring Tab */}
          {activeTab === 'system' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">System Monitoring</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    <span>System Health</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Server Uptime</span>
                        <span className="text-sm font-semibold">99.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">API Response Time</span>
                        <span className="text-sm font-semibold">120ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Database Load</span>
                        <span className="text-sm font-semibold">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    <span>Database Statistics</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Records</p>
                      <p className="text-2xl font-bold">45,678</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Storage Used</p>
                      <p className="text-2xl font-bold">3.2 GB</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Daily Queries</p>
                      <p className="text-2xl font-bold">12.5k</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Sessions</p>
                      <p className="text-2xl font-bold">234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Role Change Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Change User Role</h3>
            <p className="text-gray-600 mb-6">
              Select a new role for <span className="font-semibold">{selectedUser.name}</span>
            </p>
            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  defaultChecked={selectedUser.role === 'user'}
                  className="mr-3"
                />
                <div>
                  <p className="font-medium">User</p>
                  <p className="text-sm text-gray-600">Basic access, can submit papers</p>
                </div>
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="role"
                  value="reviewer"
                  defaultChecked={selectedUser.role === 'reviewer'}
                  className="mr-3"
                />
                <div>
                  <p className="font-medium">Reviewer</p>
                  <p className="text-sm text-gray-600">Can review submitted papers</p>
                </div>
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  defaultChecked={selectedUser.role === 'admin'}
                  className="mr-3"
                />
                <div>
                  <p className="font-medium">Admin</p>
                  <p className="text-sm text-gray-600">Full administrative access</p>
                </div>
              </label>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowRoleModal(false)
                  setSelectedUser(null)
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRoleChange(selectedUser.id, 'new-role')}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Update Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuperAdminDashboard