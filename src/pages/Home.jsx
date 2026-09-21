import ContactSection from '../components/home/ContactSection'
import DepartmentsSection from '../components/home/DepartmentsSection'
import EmergencyTraumaBanner from '../components/home/EmergencyTraumaBanner'
import FacilitiesSection from '../components/home/FacilitiesSection'
import GalleryPreview from '../components/home/GalleryPreview'
import HeroSection from '../components/home/HeroSection'
import SpecialistsSection from '../components/home/SpecialistsSection'
import StatsSection from '../components/home/StatsSection'
import Testimonials from '../components/home/Testimonials'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <>
      <Seo description="EKDANT Hospital Multispeciality & Trauma Center: 24×7 emergency and trauma care, orthopedics, medicine and surgery, with ICU, digital X-ray, C-arm, laboratory, pharmacy and physiotherapy." />
      <HeroSection />
      <EmergencyTraumaBanner />
      <StatsSection />
      <DepartmentsSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <SpecialistsSection />
      <Testimonials />
      <GalleryPreview />
      <ContactSection />
    </>
  )
}
