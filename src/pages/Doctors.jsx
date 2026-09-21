import { useMemo } from 'react'
import { SearchX, TriangleAlert, UserRound } from 'lucide-react'
import { useSearchParams } from 'react-router'
import DoctorCard from '../components/doctors/DoctorCard'
import DoctorCardSkeleton from '../components/doctors/DoctorCardSkeleton'
import DoctorFilters from '../components/doctors/DoctorFilters'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import useDoctors from '../hooks/useDoctors'
import { getDepartment } from '../lib/content'

function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-primary/10">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ice text-primary">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="mt-5 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-ink">{description}</p>
      {action}
    </div>
  )
}

export default function Doctors() {
  const { doctors, loading, error } = useDoctors()
  const [searchParams, setSearchParams] = useSearchParams()

  const department = searchParams.get('department') ?? 'all'
  const query = searchParams.get('q') ?? ''

  const counts = useMemo(() => {
    const result = {}
    doctors.forEach((doctor) => {
      doctor.departments.forEach((slug) => {
        result[slug] = (result[slug] ?? 0) + 1
      })
    })
    return result
  }, [doctors])

  const visibleDoctors = useMemo(() => {
    const search = query.trim().toLowerCase()
    return doctors.filter((doctor) => {
      const matchesDepartment = department === 'all' || doctor.departments.includes(department)
      const matchesSearch =
        !search ||
        doctor.name.toLowerCase().includes(search) ||
        doctor.qualification.toLowerCase().includes(search) ||
        doctor.designation.toLowerCase().includes(search)
      return matchesDepartment && matchesSearch
    })
  }, [doctors, department, query])

  const updateParams = (changes) => {
    const next = new URLSearchParams(searchParams)
    Object.entries(changes).forEach(([key, value]) => {
      if (!value || value === 'all') next.delete(key)
      else next.set(key, value)
    })
    setSearchParams(next, { replace: true, preventScrollReset: true })
  }

  const activeDepartment = department !== 'all' ? getDepartment(department) : null

  return (
    <>
      <Seo
        title="Our Doctors"
        description={`Meet the specialists at ${hospital.fullName} across orthopedics, medicine, surgery and trauma care. Filter by department and book an appointment.`}
      />

      <PageBanner
        title="Our Doctors"
        description="Experienced specialists across our departments. Filter by department to find the right doctor and book an appointment."
        breadcrumbs={[{ label: 'Doctors' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <DoctorFilters
            department={department}
            query={query}
            counts={counts}
            total={doctors.length}
            onDepartmentChange={(value) => updateParams({ department: value })}
            onQueryChange={(value) => updateParams({ q: value })}
          />

          {!loading && !error && (
            <p className="mt-8 text-sm text-ink" role="status">
              Showing <span className="font-bold text-heading">{visibleDoctors.length}</span>{' '}
              {visibleDoctors.length === 1 ? 'doctor' : 'doctors'}
              {activeDepartment ? ` in ${activeDepartment.title}` : ''}
              {query ? ` matching “${query}”` : ''}
            </p>
          )}

          <div className="mt-6">
            {loading && (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }, (_, index) => (
                  <li key={index}>
                    <DoctorCardSkeleton />
                  </li>
                ))}
              </ul>
            )}

            {error && (
              <EmptyState
                icon={TriangleAlert}
                title="We couldn't load our doctors"
                description="Please refresh the page, or call us and our team will help you find the right specialist."
                action={
                  <Button href={hospital.appointments.href} variant="dark" className="mt-6">
                    Call {hospital.appointments.phone}
                  </Button>
                }
              />
            )}

            {!loading && !error && visibleDoctors.length === 0 && (
              <EmptyState
                icon={doctors.length ? SearchX : UserRound}
                title={doctors.length ? 'No doctors match your search' : 'Doctor profiles coming soon'}
                description={
                  doctors.length
                    ? 'Try another department or clear the search to see all our doctors.'
                    : 'Our doctor listings are being updated. Please call us and our team will guide you to the right specialist.'
                }
                action={
                  doctors.length ? (
                    <Button onClick={() => setSearchParams({}, { replace: true })} variant="secondary" className="mt-6">
                      Show all doctors
                    </Button>
                  ) : (
                    <Button href={hospital.appointments.href} variant="dark" className="mt-6">
                      Call {hospital.appointments.phone}
                    </Button>
                  )
                }
              />
            )}

            {!loading && !error && visibleDoctors.length > 0 && (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleDoctors.map((doctor) => (
                  <li key={doctor.id}>
                    <DoctorCard doctor={doctor} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <AppointmentCTA
        eyebrow="Book an Appointment"
        title="Not sure which doctor to consult?"
        description="Call us and our team will guide you to the right department and doctor for your concern."
        className="pt-0 lg:pt-0"
      />
    </>
  )
}
