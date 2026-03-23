import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import ImpactSection from '../components/sections/ImpactSection'
import CoursesSection from '../components/sections/CoursesSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import YouTubeSection from '../components/sections/YouTubeSection'
import ComparisonSection from '../components/sections/ComparisonSection'
import CommunitySection from '../components/sections/CommunitySection'
import FAQSection from '../components/sections/FAQSection'
import TransformSection from '../components/sections/TransformSection' // <-- IMPORT THIS
import FooterSection from '../components/sections/FooterSection'

function Home() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <CoursesSection />
        <ReviewsSection />
        <YouTubeSection />
        <ComparisonSection />
        <CommunitySection />
        <FAQSection />
        <TransformSection /> {/* <-- ADD IT HERE */}
      </main>
      <FooterSection />
    </div>
  )
}

export default Home