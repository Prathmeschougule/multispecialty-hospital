import { Clock, FileText, MessageCircle, Phone, Siren } from 'lucide-react'
import { hospital } from '../../config/hospital'
import Button from '../ui/Button'

const bringList = [
  'Previous prescriptions & test reports',
  'A list of medicines you take',
  'ID proof and insurance details, if any',
]

export default function AppointmentAside() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28" aria-label="Appointment help">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emergency-700 to-emergency p-6 text-white shadow-lg shadow-emergency/20">
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[16px] border-white/10" />
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <Siren className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="relative mt-4 text-lg font-bold text-white">Is this an emergency?</h2>
        <p className="relative mt-2 text-sm leading-relaxed text-white/85">
          Do not use this form for emergencies. Call us immediately or come straight to the emergency entrance.
        </p>
        <Button href={hospital.emergency.href} variant="emergencyLight" className="relative mt-5 w-full">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {hospital.emergency.phone}
        </Button>
      </div>

      <div className="rounded-3xl bg-white p-6 ring-1 ring-primary/10">
        <h2 className="flex items-center gap-2 font-bold">
          <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
          Hospital Timings
        </h2>
        <dl className="mt-3 divide-y divide-primary/10 text-sm">
          {hospital.timings.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 py-3">
              <dt className="font-medium text-heading">{row.label}</dt>
              <dd className={`font-semibold ${row.highlight ? 'text-emergency' : 'text-ink'}`}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-3xl bg-white p-6 ring-1 ring-primary/10">
        <h2 className="flex items-center gap-2 font-bold">
          <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
          What to bring
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          {bringList.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-primary-50/70 p-6 ring-1 ring-primary/10">
        <h2 className="font-bold">Prefer to talk to us?</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Our reception team can help you choose the right department and doctor.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Button href={hospital.appointments.href} variant="dark" size="sm">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {hospital.appointments.phone}
          </Button>
          <Button href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
        </div>
      </div>
    </aside>
  )
}
