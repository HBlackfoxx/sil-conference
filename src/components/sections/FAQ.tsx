import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Search } from 'lucide-react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const faqCategories = [
    { id: 'all', label: 'All Questions', icon: '📋' },
    { id: 'registration', label: 'Registration', icon: '🎫' },
    { id: 'submission', label: 'Paper Submission', icon: '📄' },
    { id: 'venue', label: 'Venue & Travel', icon: '✈️' },
    { id: 'general', label: 'General', icon: '💡' }
  ]

  const faqs = [
    {
      category: 'registration',
      question: 'What is included in the conference registration fee?',
      answer: 'The registration fee includes access to all conference sessions, workshop materials, conference kit, lunch and coffee breaks for all three days, conference proceedings, and the welcome reception. The gala dinner requires separate registration.'
    },
    {
      category: 'registration',
      question: 'Can I get a refund if I cannot attend?',
      answer: 'Full refunds are available until April 1, 2025. After that date, a 50% refund is available until April 20, 2025. No refunds will be issued after April 20, 2025, but you may transfer your registration to another person.'
    },
    {
      category: 'registration',
      question: 'Is there a student discount available?',
      answer: 'Yes! Full-time students can register at a 50% discounted rate. You will need to provide a valid student ID and a letter from your institution confirming your enrollment status.'
    },
    {
      category: 'submission',
      question: 'What is the paper submission format?',
      answer: 'Papers should follow the Springer LNCS format. Full papers should be 10-12 pages, short papers 6-8 pages, and poster abstracts 2-4 pages. All submissions must be in PDF format and written in English.'
    },
    {
      category: 'submission',
      question: 'Can I submit multiple papers?',
      answer: 'Yes, you can submit multiple papers. However, each accepted paper requires at least one author to register for the conference. The same person cannot present more than two papers.'
    },
    {
      category: 'submission',
      question: 'Will the proceedings be indexed?',
      answer: 'Yes, accepted papers will be published in Springer LNCS proceedings, which are indexed in Scopus, ISI Web of Science, EI-Compendex, and other major databases.'
    },
    {
      category: 'venue',
      question: 'How do I get from the airport to the conference venue?',
      answer: 'The venue is 15 minutes from Marrakech Menara Airport. Options include: official conference shuttle (schedule TBA), taxi (approximately 150 MAD), or ride-sharing services. Many hotels also provide airport transfers.'
    },
    {
      category: 'venue',
      question: 'Are there hotels near the conference venue?',
      answer: 'Yes, we have partnerships with 20+ hotels within walking distance of the venue, offering special conference rates. A list of partner hotels with booking codes will be sent upon registration.'
    },
    {
      category: 'venue',
      question: 'Do I need a visa to attend the conference?',
      answer: 'Visa requirements depend on your nationality. Citizens of many countries can enter Morocco visa-free for up to 90 days. Check with the Moroccan embassy in your country. We provide invitation letters for visa applications upon request.'
    },
    {
      category: 'general',
      question: 'Will sessions be recorded or live-streamed?',
      answer: 'Keynote speeches and selected sessions will be recorded and made available to registered attendees after the conference. Live streaming options are available for virtual attendance at a reduced rate.'
    },
    {
      category: 'general',
      question: 'Is there a dress code for the conference?',
      answer: 'The conference follows a business casual dress code. For the gala dinner, business formal attire is recommended. Comfortable shoes are advised as there will be networking sessions and exhibition areas to explore.'
    },
    {
      category: 'general',
      question: 'Are meals provided for dietary restrictions?',
      answer: 'Yes, we accommodate various dietary requirements including vegetarian, vegan, gluten-free, and halal options. Please specify your dietary needs during registration.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Have Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SIL 2025. Can't find what you're looking for? Contact us!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No questions found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between group"
                  >
                    <h3 className="font-semibold text-gray-800 pr-4 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ${
                      activeIndex === index ? 'pb-4' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 opacity-90">
              Our team is here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Support
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ