import { Ambulance, CalendarCheck, CircleCheck, Clock, Phone, Siren } from 'lucide-react'
import { hospital } from '../../../config/hospital'
import { getFacility } from '../../../lib/content'
import { PATHS } from '../../../routes/paths'
import Breadcrumbs from '../../sections/Breadcrumbs'
import Button from '../../ui/Button'
import Container from '../../ui/Container'

export default function DepartmentHero({ department }) {
  const Icon = department.icon
  const emergency = department.emergency
  const facilities = department.facilities.map(({ slug }) => getFacility(slug)).filter(Boolean)

  return (
    <section
      className={`relative overflow-hidden bg-linear-to-br ${
        emergency ? 'from-[#5a0d16] via-emergency-700 to-emergency' : 'from-primary-950 via-primary-900 to-primary-700'
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.07)_1px,transparent_0)] bg-size-[26px_26px]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full blur-3xl ${emergency ? 'bg-white/10' : 'bg-accent/25'}`}
      />
      <Icon
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -right-16 bottom-0 hidden h-[26rem] w-[26rem] text-white/[0.05] lg:block"
      />

      <Container className="relative pb-16 pt-8 lg:pb-24 lg:pt-10">
        <Breadcrumbs items={[{ label: 'Departments', to: PATHS.departments }, { label: department.title }]} />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg shadow-black/20 ring-1 ring-white/20 ${
                  emergency ? 'bg-white/15' : 'bg-linear-to-br from-accent to-primary'
                }`}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              {emergency && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emergency">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emergency" aria-hidden="true" />
                  {hospital.emergency.availability} Emergency Service
                </span>
              )}
            </div>

            <p className={`mt-6 text-sm font-bold uppercase tracking-[0.18em] ${emergency ? 'text-white/75' : 'text-accent'}`}>
              {department.tagline}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">{department.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{department.heroIntro}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {emergency ? (
                <>
                  <Button href={hospital.emergency.href} variant="emergencyLight" size="lg">
                    <Siren className="h-5 w-5 text-emergency" aria-hidden="true" />
                    Call Emergency: {hospital.emergency.phone}
                  </Button>
                  <Button href={hospital.ambulance.href} variant="outlineLight" size="lg">
                    <Ambulance className="h-5 w-5" aria-hidden="true" />
                    Ambulance {hospital.ambulance.phone}
                  </Button>
                </>
              ) : (
                <>
                  <Button to={`${PATHS.appointment}?department=${department.slug}`} size="lg">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    Book Appointment
                  </Button>
                  <Button href={hospital.appointments.href} variant="outlineLight" size="lg">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/[0.08] p-6 ring-1 ring-white/15 backdrop-blur-md sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">At a glance</p>

              <ul className="mt-5 space-y-3">
                {department.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 font-semibold text-white">
                    <CircleCheck className={`h-5 w-5 shrink-0 ${emergency ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-3 border-t border-white/15 pt-5">
                <Clock className={`mt-0.5 h-5 w-5 shrink-0 ${emergency ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/55">Availability</p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    {emergency ? `Open ${hospital.emergency.availability}, all days` : hospital.opdSummary}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/55">Supported by</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {facilities.map((facility) => {
                    const FacilityIcon = facility.icon
                    return (
                      <li
                        key={facility.slug}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15"
                      >
                        <FacilityIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {facility.title}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
