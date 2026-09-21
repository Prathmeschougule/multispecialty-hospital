import FacilityCard from '../components/facilities/FacilityCard'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Container from '../components/ui/Container'
import { getFacilities } from '../lib/content'

export default function Facilities() {
  return (
    <>
      <Seo
        title="Facilities"
        description="ICU, Digital X-Ray, C-Arm, Clinical Laboratory, Medical Store and Physiotherapy at EKDANT Hospital, supporting faster diagnosis and treatment."
      />
      <PageBanner
        title="Hospital Facilities"
        description="Intensive care, imaging, laboratory, pharmacy and rehabilitation services within the hospital, supporting faster diagnosis and treatment."
        breadcrumbs={[{ label: 'Facilities' }]}
      />

      <section className="py-20 lg:py-24">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getFacilities().map((facility, index) => (
              <li key={facility.slug}>
                <FacilityCard facility={facility} index={index} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AppointmentCTA className="pt-0 lg:pt-0" />
    </>
  )
}
