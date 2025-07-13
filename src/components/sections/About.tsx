import React from 'react'
import { Target, Lightbulb, Users, Award, ArrowRight } from 'lucide-react'

const About = () => {
  const stats = [
    { value: '500+', label: 'Participants', icon: Users },
    { value: '50+', label: 'Speakers', icon: Award },
    { value: '30+', label: 'Countries', icon: Target },
    { value: '100+', label: 'Papers', icon: Lightbulb }
  ]

  const features = [
    {
      title: 'Keynote Speeches',
      description: 'Learn from world-renowned experts in smart innovation and logistics',
      icon: '🎯'
    },
    {
      title: 'Paper Presentations',
      description: 'Present your research and get valuable feedback from peers',
      icon: '📄'
    },
    {
      title: 'Networking Sessions',
      description: 'Connect with professionals and researchers from around the globe',
      icon: '🤝'
    },
    {
      title: 'Workshops',
      description: 'Hands-on sessions on the latest tools and technologies',
      icon: '🛠️'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230000FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About The Conference</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Welcome to SIL 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The International Conference on Smart Innovation & Logistics brings together leading minds to explore 
            the intersection of technology, innovation, and sustainable logistics solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Shaping the Future of
              <span className="text-blue-600"> Innovation</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SIL 2025 is a premier international conference that brings together researchers, industry professionals, 
              and innovators to discuss the latest advancements in smart technologies and logistics. Our conference 
              provides a unique platform for knowledge exchange, collaboration, and networking.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join us for three days of insightful presentations, interactive workshops, and meaningful connections 
              that will shape the future of innovation in logistics and technology.
            </p>
            
            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070" 
                alt="Conference" 
                className="w-full h-[500px] object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-all duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-100 rounded-full -z-10" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Conference Themes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Conference Themes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Artificial Intelligence',
                topics: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP']
              },
              {
                title: 'Smart Logistics',
                topics: ['Supply Chain 4.0', 'IoT in Logistics', 'Autonomous Vehicles', 'Blockchain']
              },
              {
                title: 'Sustainable Innovation',
                topics: ['Green Technology', 'Circular Economy', 'Renewable Energy', 'Smart Cities']
              }
            ].map((theme, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-xl mb-4 text-gray-800">{theme.title}</h4>
                <ul className="space-y-2">
                  {theme.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About