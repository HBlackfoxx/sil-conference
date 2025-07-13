import React from 'react'
import { ExternalLink, Star } from 'lucide-react'

const Sponsors = () => {
  const sponsorTiers = {
    platinum: [
      { name: 'Springer', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Springer_Nature_Logo.svg', url: 'https://springer.com' },
      { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', url: 'https://microsoft.com' }
    ],
    gold: [
      { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', url: 'https://google.com' },
      { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', url: 'https://amazon.com' },
      { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', url: 'https://ibm.com' }
    ],
    silver: [
      { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', url: 'https://oracle.com' },
      { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', url: 'https://sap.com' },
      { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg', url: 'https://intel.com' },
      { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', url: 'https://cisco.com' }
    ]
  }

  const scrollingSponsors = [...sponsorTiers.gold, ...sponsorTiers.silver, ...sponsorTiers.gold, ...sponsorTiers.silver]

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum':
        return 'from-gray-300 to-gray-500'
      case 'gold':
        return 'from-yellow-400 to-yellow-600'
      case 'silver':
        return 'from-gray-400 to-gray-600'
      default:
        return 'from-gray-300 to-gray-500'
    }
  }

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Partners</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Conference Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're grateful to our sponsors who make SIL 2025 possible and support innovation in technology.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-300 to-gray-500 text-white px-6 py-2 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Platinum Sponsors</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsorTiers.platinum.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center h-32 mb-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 flex items-center justify-center space-x-2">
                    <span>{sponsor.name}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Gold Sponsors</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sponsorTiers.gold.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center h-24">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Scrolling Sponsors Banner */}
        <div className="mb-16 overflow-hidden">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-2 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Silver Sponsors</span>
            </div>
          </div>
          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {scrollingSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-40 h-16 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join us in supporting innovation and connect with leaders in technology and logistics.
            Multiple sponsorship packages available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              View Sponsorship Packages
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Sponsors