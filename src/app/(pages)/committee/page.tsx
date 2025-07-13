import React, { useState } from 'react'
import { 
  Users, Award, Globe, Mail, Linkedin, Twitter, 
  ChevronDown, Building, MapPin, Star, Shield, 
  BookOpen, Briefcase
} from 'lucide-react'

const CommitteePage = () => {
  const [expandedBio, setExpandedBio] = useState(null)
  const [activeTab, setActiveTab] = useState('organizing')

  const organizingCommittee = [
    {
      name: 'Prof. Ahmed Benali',
      role: 'General Chair',
      affiliation: 'University Cadi Ayyad, Morocco',
      email: 'abenali@uca.ma',
      bio: 'Professor of Computer Science with over 20 years of experience in AI and machine learning. Led numerous international conferences and research projects.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Program Co-Chair',
      affiliation: 'Technical University of Madrid, Spain',
      email: 'mrodriguez@upm.es',
      bio: 'Expert in logistics optimization and supply chain management. Published over 100 papers in top-tier journals.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
      social: { linkedin: '#' }
    },
    {
      name: 'Prof. John Smith',
      role: 'Program Co-Chair',
      affiliation: 'MIT, USA',
      email: 'jsmith@mit.edu',
      bio: 'Leading researcher in IoT and smart systems. Director of the Smart Cities Lab at MIT.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Fatima Zahra',
      role: 'Organizing Chair',
      affiliation: 'ENSA Marrakech, Morocco',
      email: 'fzahra@ensa.ma',
      bio: 'Associate Professor specializing in sustainable technologies and green computing.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      social: { linkedin: '#' }
    },
    {
      name: 'Prof. Li Wei',
      role: 'Finance Chair',
      affiliation: 'Tsinghua University, China',
      email: 'lwei@tsinghua.edu.cn',
      bio: 'Expert in fintech and blockchain applications in logistics.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      social: { linkedin: '#' }
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Publication Chair',
      affiliation: 'Oxford University, UK',
      email: 'sjohnson@ox.ac.uk',
      bio: 'Renowned researcher in AI ethics and responsible innovation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
      social: { twitter: '#' }
    }
  ]

  const scientificCommittee = [
    { name: 'Prof. Michael Brown', affiliation: 'Stanford University, USA', expertise: 'Machine Learning' },
    { name: 'Dr. Elena Petrova', affiliation: 'Moscow State University, Russia', expertise: 'Cybersecurity' },
    { name: 'Prof. Rajesh Kumar', affiliation: 'IIT Delhi, India', expertise: 'IoT Systems' },
    { name: 'Dr. Sophie Martin', affiliation: 'Sorbonne University, France', expertise: 'Data Science' },
    { name: 'Prof. Carlos Silva', affiliation: 'University of São Paulo, Brazil', expertise: 'Supply Chain' },
    { name: 'Dr. Yuki Tanaka', affiliation: 'University of Tokyo, Japan', expertise: 'Robotics' },
    { name: 'Prof. Anna Schmidt', affiliation: 'TU Munich, Germany', expertise: 'Industry 4.0' },
    { name: 'Dr. Mohammed Al-Hassan', affiliation: 'KAUST, Saudi Arabia', expertise: 'Smart Cities' },
    { name: 'Prof. Lisa Anderson', affiliation: 'University of Toronto, Canada', expertise: 'AI Ethics' },
    { name: 'Dr. Paolo Rossi', affiliation: 'Politecnico di Milano, Italy', expertise: 'Logistics' },
    { name: 'Prof. Kim Jong-un', affiliation: 'Seoul National University, Korea', expertise: 'Blockchain' },
    { name: 'Dr. Amina Diallo', affiliation: 'University of Cape Town, South Africa', expertise: 'Green Tech' }
  ]

  const advisoryBoard = [
    {
      name: 'Prof. Sir Tim Berners-Lee',
      affiliation: 'MIT & W3C',
      role: 'Inventor of the World Wide Web',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400'
    },
    {
      name: 'Prof. Geoffrey Hinton',
      affiliation: 'University of Toronto & Google',
      role: 'Godfather of Deep Learning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
    },
    {
      name: 'Dr. Fei-Fei Li',
      affiliation: 'Stanford University',
      role: 'AI Pioneer and Co-Director of HAI',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Committee</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished experts and leaders organizing SIL 2025
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('organizing')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'organizing'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Organizing Committee</span>
          </button>
          <button
            onClick={() => setActiveTab('scientific')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'scientific'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Scientific Committee</span>
          </button>
          <button
            onClick={() => setActiveTab('advisory')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'advisory'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Award className="w-5 h-5" />
            <span>Advisory Board</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto">
          {/* Organizing Committee */}
          {activeTab === 'organizing' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizingCommittee.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
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
                        onClick={() => setExpandedBio(expandedBio === index ? null : index)}
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
              ))}
            </div>
          )}

          {/* Scientific Committee */}
          {activeTab === 'scientific' && (
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Scientific Committee Members</h2>
                <p className="text-gray-600 mb-8">
                  Our scientific committee consists of leading researchers and experts from around the world, 
                  ensuring the highest quality of peer review for all submissions.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {scientificCommittee.map((member, index) => (
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
          )}

          {/* Advisory Board */}
          {activeTab === 'advisory' && (
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
                <h2 className="text-2xl font-bold mb-4">Distinguished Advisory Board</h2>
                <p className="opacity-90">
                  Our advisory board comprises world-renowned pioneers who provide strategic guidance 
                  and ensure the conference maintains the highest standards of excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {advisoryBoard.map((member, index) => (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default CommitteePage