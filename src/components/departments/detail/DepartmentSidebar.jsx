import { Ambulance, ArrowRight, CalendarCheck, Clock, MessageCircle, Phone, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../../config/hospital'
import { getDepartments } from '../../../lib/content'
import { PATHS } from '../../../routes/paths'
import Button from '../../ui/Button'

function BookingCard({ department }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/10">
      <div className="relative bg-linear-to-br from-primary to-primary-800 p-6 text-white">
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[16px] border-white/10" />
        <p className="relative text-xs font-semibold uppercase tracking-wider text-ice/80">Book a consultation</p>
        <p className="relative mt-1 text-xl font-bold text-white">{department.title}</p>
      </div>

      <div className="p-6">
        <h3 className="flex items-center gap-2 font-bold">
          <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
          Hospital Timings
        </h3>
        <dl className="mt-3 divide-y divide-primary/10 text-sm">
          {hospital.timings.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 py-3">
              <dt className="font-medium text-heading">{row.label}</dt>
              <dd className={`font-semibold ${row.highlight ? 'text-emergency' : 'text-ink'}`}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 space-y-3">
          <Button to={`${PATHS.appointment}?department=${department.slug}`} className="w-full">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button href={hospital.appointments.href} variant="secondary" size="sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </Button>
            <Button href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmergencyCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emergency-700 to-emergency p-6 text-white shadow-lg shadow-emergency/20">
      <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[16px] border-white/10" />
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
        <Siren className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="relative mt-4 text-xs font-bold uppercase tracking-wider text-white/75">
        {hospital.emergency.availability} Emergency & Trauma
      </p>
      <p className="relative mt-1 text-2xl font-extrabold">{hospital.emergency.phone}</p>
      <p className="relative mt-2 text-sm text-white/80">No appointment needed. Come straight to the emergency entrance.</p>
      <div className="relative mt-5 space-y-3">
        <Button href={hospital.emergency.href} variant="emergencyLight" className="w-full">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Emergency
        </Button>
        <Button href={hospital.ambulance.href} variant="outlineLight" className="w-full">
          <Ambulance className="h-4 w-4" aria-hidden="true" />
          Ambulance {hospital.ambulance.phone}
        </Button>
      </div>
    </div>
  )
}

export default function DepartmentSidebar({ department }) {
  const otherDepartments = getDepartments().filter((other) => other.slug !== department.slug)

  return (
    <aside className="space-y-6 lg:sticky lg:top-36" aria-label="Book and explore departments">
      {department.emergency ? <EmergencyCard /> : <BookingCard department={department} />}

      <nav aria-label="Other departments" className="rounded-3xl bg-white p-6 ring-1 ring-primary/10">
        <h3 className="font-bold">Other departments</h3>
        <ul className="mt-3 space-y-1">
          {otherDepartments.map((other) => {
            const Icon = other.icon
            return (
              <li key={other.slug}>
                <Link to={PATHS.department(other.slug)} className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-primary-50">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      other.emergency
                        ? 'bg-emergency-50 text-emergency group-hover:bg-emergency group-hover:text-white'
                        : 'bg-ice text-primary group-hover:bg-primary group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-heading">{other.title}</span>
                  <ArrowRight className="h-4 w-4 text-ink/40 transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
