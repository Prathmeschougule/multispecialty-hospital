import { Award, CalendarCheck, Clock } from 'lucide-react'
import { Link } from 'react-router'
import { getDepartment } from '../../lib/content'
import { PATHS } from '../../routes/paths'
import DoctorAvatar from './DoctorAvatar'

const bookingLink = (doctor) => `${PATHS.appointment}?department=${doctor.departments[0] ?? ''}&doctor=${doctor.id}`

// Doctors have no individual pages, so the card carries the information and a booking action.
export default function DoctorCard({ doctor, compact = false }) {
  const departments = doctor.departments.map(getDepartment).filter(Boolean)

  if (compact) {
    return (
      <article className="flex h-full items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-primary/10 transition duration-300 hover:shadow-card hover:ring-primary/20">
        <DoctorAvatar doctor={doctor} className="h-20 w-20 shrink-0 rounded-2xl" />
        <div className="min-w-0 flex-1">
          {departments[0] && (
            <p className="truncate text-[11px] font-bold uppercase tracking-[0.12em] text-accent-700">{departments[0].shortTitle}</p>
          )}
          <h3 className="mt-0.5 truncate text-base font-bold">{doctor.name}</h3>
          <p className="truncate text-sm font-medium text-primary">{doctor.qualification}</p>
          {doctor.experienceYears > 0 && (
            <p className="mt-0.5 truncate text-xs text-ink/80">{doctor.experienceYears}+ years experience</p>
          )}
        </div>
        <Link
          to={bookingLink(doctor)}
          aria-label={`Book an appointment with ${doctor.name}`}
          title="Book appointment"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-50 text-primary transition-colors hover:bg-accent hover:text-white"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        </Link>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:ring-primary/25">
      <div className="relative overflow-hidden">
        <DoctorAvatar doctor={doctor} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105 sm:aspect-[4/4]" />
        {departments[0] && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
            {departments[0].shortTitle}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{doctor.qualification}</p>
        <p className="mt-1 text-sm text-ink">{doctor.designation}</p>

        <dl className="mt-5 space-y-2.5 border-t border-primary/10 pt-5 text-sm">
          {doctor.experienceYears > 0 && (
            <div className="flex items-center gap-2.5">
              <Award className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dt className="sr-only">Experience</dt>
              <dd className="font-medium text-heading/85">{doctor.experienceYears}+ years experience</dd>
            </div>
          )}
          {doctor.opdDays && (
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dt className="sr-only">OPD days</dt>
              <dd className="font-medium text-heading/85">{doctor.opdDays}</dd>
            </div>
          )}
        </dl>

        {departments.length > 1 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Departments">
            {departments.map((department) => (
              <li key={department.slug} className="rounded-full bg-ice px-2.5 py-1 text-[11px] font-semibold text-primary-800">
                {department.shortTitle}
              </li>
            ))}
          </ul>
        )}

        <div className="flex-1" aria-hidden="true" />

        <Link
          to={bookingLink(doctor)}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-600 active:scale-[0.98]"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </article>
  )
}
