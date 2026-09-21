import { useParams } from 'react-router'
import DepartmentAbout from '../components/departments/detail/DepartmentAbout'
import DepartmentBenefits from '../components/departments/detail/DepartmentBenefits'
import DepartmentFacilities from '../components/departments/detail/DepartmentFacilities'
import DepartmentFAQ from '../components/departments/detail/DepartmentFAQ'
import DepartmentHero from '../components/departments/detail/DepartmentHero'
import DepartmentSidebar from '../components/departments/detail/DepartmentSidebar'
import DepartmentTreatments from '../components/departments/detail/DepartmentTreatments'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import SectionNav from '../components/sections/SectionNav'
import Seo from '../components/seo/Seo'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { getDepartment } from '../lib/content'
import { PATHS } from '../routes/paths'
import NotFound from './NotFound'

const DEPARTMENT_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'faqs', label: 'FAQ' },
]

export default function DepartmentDetail() {
  const { slug } = useParams()
  const department = getDepartment(slug)

  if (!department) return <NotFound />

  const bookTo = `${PATHS.appointment}?department=${department.slug}`

  return (
    <>
      <Seo title={department.title} description={`${department.title} at ${hospital.fullName}. ${department.heroIntro}`} />

      <DepartmentHero department={department} />
      <SectionNav sections={DEPARTMENT_SECTIONS} label={`${department.title} sections`} />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-8">
          <DepartmentAbout department={department} />
        </div>
        <div className="lg:col-span-4">
          <DepartmentSidebar department={department} />
        </div>
      </Container>

      <DepartmentTreatments department={department} />
      <DepartmentFacilities department={department} />
      <DepartmentBenefits department={department} />
      <DepartmentFAQ department={department} />

      {department.emergency ? (
        <AppointmentCTA
          emergency
          eyebrow={`${hospital.emergency.availability} Emergency & Trauma`}
          title="In an emergency, don't wait. Call us now."
          description="For accidents and serious injuries, call our emergency number or come straight to the emergency entrance. For follow-up visits after treatment, book an appointment."
          bookTo={bookTo}
          bookLabel="Follow-up Visit"
          points={['No appointment needed for emergencies', 'Trauma team, ICU & X-ray on site', 'Follow-up care available']}
        />
      ) : (
        <AppointmentCTA
          eyebrow={department.title}
          title={`Book your ${department.shortTitle.toLowerCase()} consultation`}
          description="Schedule a visit at a time that suits you. Our team will confirm your appointment promptly."
          bookTo={bookTo}
        />
      )}
    </>
  )
}
