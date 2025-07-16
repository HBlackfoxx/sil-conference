// src/app/(public)/page.tsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Speakers from '@/components/sections/speakers'
import ImportantDates from '@/components/sections/important-dates'
import Gallery from '@/components/sections/gallery'
import Sponsors from '@/components/sections/sponsors'
import VenueSection from '@/components/sections/venue-section'
import FAQ from '@/components/sections/faq'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ImportantDates />
      <Speakers />
      <Gallery />
      <Sponsors />
      <VenueSection />
      <FAQ />
      <Footer />
    </>
  )
}