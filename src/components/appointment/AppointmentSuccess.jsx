import { CalendarCheck, CircleCheck, Clock, Home, Phone, Printer, Stethoscope, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../config/hospital'
import { getDepartment } from '../../lib/content'
import { PATHS } from '../../routes/paths'

const formatDate = (isoDate) => {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function AppointmentSuccess({ submission, onBookAnother }) {
  const { values, result, doctorName } = submission
  const department = getDepartment(values.department)

  const rows = [
    { icon: UserRound, label: 'Patient', value: `${values.name} · ${values.age} years · ${values.gender}` },
    { icon: Phone, label: 'Mobile', value: `+91 ${values.mobile}` },
    { icon: Stethoscope, label: 'Department', value: department?.title ?? values.department },
    { icon: UserRound, label: 'Doctor', value: doctorName },
    { icon: CalendarCheck, label: 'Preferred date', value: formatDate(values.date) },
    { icon: Clock, label: 'Preferred time', value: values.time },
  ]

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/10">
      <div className="relative overflow-hidden bg-linear-to-br from-accent to-primary p-8 text-center text-white sm:p-10">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-white/10" />
        <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <CircleCheck className="h-9 w-9" aria-hidden="true" />
        </span>
        <h2 className="relative mt-5 text-2xl font-bold text-white sm:text-3xl">Appointment request received</h2>
        <p className="relative mx-auto mt-3 max-w-lg text-white/85">
          Thank you, {values.name.split(' ')[0]}. Our team will call you on <strong className="font-semibold">+91 {values.mobile}</strong> to
          confirm your appointment slot.
        </p>
        <p className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/25">
          Reference: <span className="font-extrabold tracking-wide">{result.reference}</span>
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">Your request</h3>
        <dl className="mt-4 divide-y divide-primary/10">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 py-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dt className="w-28 shrink-0 text-sm text-ink">{label}</dt>
              <dd className="flex-1 text-sm font-semibold text-heading">{value}</dd>
            </div>
          ))}
          {values.reason && (
            <div className="flex items-start gap-3 py-3">
              <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <dt className="w-28 shrink-0 text-sm text-ink">Reason</dt>
              <dd className="flex-1 text-sm text-heading">{values.reason}</dd>
            </div>
          )}
        </dl>

        <p className="mt-6 rounded-2xl bg-ice/60 p-4 text-sm leading-relaxed text-heading/80">
          This is a request, not a confirmed booking. Your slot is confirmed only after our team calls you. For a medical
          emergency, do not wait — call{' '}
          <a href={hospital.emergency.href} className="font-bold text-emergency-700 underline">
            {hospital.emergency.phone}
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={onBookAnother}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-600"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book another appointment
          </button>
          <a
            href={hospital.appointments.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-primary ring-1 ring-primary/20 transition hover:bg-primary-50"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {hospital.appointments.phone}
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-primary ring-1 ring-primary/20 transition hover:bg-primary-50"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </button>
          <Link
            to={PATHS.home}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-ink transition hover:text-primary"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
