import { ArrowRight } from 'lucide-react'
import DoctorCard from '../doctors/DoctorCard'
import useDoctors from '../../hooks/useDoctors'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

// Deliberately compact: specialists support the hospital story rather than lead it.
export default function SpecialistsSection({ limit = 6 }) {
  const { doctors, loading, error } = useDoctors()
  const featured = doctors.filter((doctor) => doctor.featured !== false).slice(0, limit)

  if (error || (!loading && featured.length === 0)) return null

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Experienced doctors across every department"
            description="A growing team of qualified specialists committed to safe, attentive care."
          />
          <Button to={PATHS.doctors} variant="secondary" className="self-start lg:self-auto">
            View all doctors
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: limit }, (_, index) => (
                <li key={index}>
                  <div className="h-[116px] animate-pulse rounded-2xl bg-primary-50" aria-hidden="true" />
                </li>
              ))
            : featured.map((doctor) => (
                <li key={doctor.id}>
                  <DoctorCard doctor={doctor} compact />
                </li>
              ))}
        </ul>
      </Container>
    </section>
  )
}
