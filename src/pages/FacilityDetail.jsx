import { useParams } from 'react-router'
import FacilityBenefits from '../components/facilities/detail/FacilityBenefits'
import FacilityDepartments from '../components/facilities/detail/FacilityDepartments'
import FacilityFAQ from '../components/facilities/detail/FacilityFAQ'
import FacilityHero from '../components/facilities/detail/FacilityHero'
import FacilityOverview from '../components/facilities/detail/FacilityOverview'
import FacilityTreatments from '../components/facilities/detail/FacilityTreatments'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import SectionNav from '../components/sections/SectionNav'
import Seo from '../components/seo/Seo'
import FacilitySidebar from '../components/facilities/detail/FacilitySidebar'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { getFacility } from '../lib/content'
import NotFound from './NotFound'

const FACILITY_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'treatments', label: 'Treatment Info' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'faqs', label: 'FAQ' },
]

export default function FacilityDetail() {
  const { slug } = useParams()
  const facility = getFacility(slug)

  if (!facility) return <NotFound />

  return (
    <>
      <Seo title={facility.fullTitle} description={`${facility.fullTitle} at ${hospital.fullName}. ${facility.heroIntro}`} />

      <FacilityHero facility={facility} />
      <SectionNav sections={FACILITY_SECTIONS} label={`${facility.title} sections`} />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-8">
          <FacilityOverview facility={facility} />
        </div>
        <div className="lg:col-span-4">
          <FacilitySidebar facility={facility} />
        </div>
      </Container>

      <FacilityTreatments facility={facility} />
      <FacilityBenefits facility={facility} />
      <FacilityDepartments facility={facility} />
      <FacilityFAQ facility={facility} />

      <AppointmentCTA
        eyebrow={facility.title}
        title="Need this facility? Book a consultation"
        description="Tests, imaging and therapy are advised by our doctors after a consultation. Book a visit and our team will guide you."
      />
    </>
  )
}
