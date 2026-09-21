import { ArrowRight, CalendarCheck, Clock, MessageCircle, Phone, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../../config/hospital'
import { getFacilities } from '../../../lib/content'
import { PATHS } from '../../../routes/paths'
import Button from '../../ui/Button'

export default function FacilitySidebar({ facility }) {
  const otherFacilities = getFacilities().filter((other) => other.slug !== facility.slug)

  return (
    <aside className="space-y-6 lg:sticky lg:top-36" aria-label="Book and explore facilities">
      <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/10">
        <div className="relative bg-linear-to-br from-primary to-primary-800 p-6 text-white">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[16px] border-white/10" />
          <p className="relative text-xs font-semibold uppercase tracking-wider text-ice/80">Book a consultation</p>
          <p className="relative mt-1 text-xl font-bold text-white">{facility.title}</p>
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
            <Button to={PATHS.appointment} className="w-full">
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

          <a
            href={hospital.emergency.href}
            className="mt-5 flex items-center gap-3 rounded-2xl bg-emergency-50 p-4 text-sm transition-colors hover:bg-emergency-100"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emergency text-white">
              <Siren className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-emergency/80">
                {hospital.emergency.availability} Emergency
              </span>
              <span className="block font-bold text-emergency-700">{hospital.emergency.phone}</span>
            </span>
          </a>
        </div>
      </div>

      <nav aria-label="Other facilities" className="rounded-3xl bg-white p-6 ring-1 ring-primary/10">
        <h3 className="font-bold">Other facilities</h3>
        <ul className="mt-3 space-y-1">
          {otherFacilities.map((other) => {
            const Icon = other.icon
            return (
              <li key={other.slug}>
                <Link to={PATHS.facility(other.slug)} className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-primary-50">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ice text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
