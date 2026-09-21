import { Ambulance, ArrowRight, CircleCheck, Phone, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'
import Container from '../ui/Container'

const points = ['Immediate trauma assessment', 'ICU & Digital X-Ray in-house', 'Surgical & orthopedic support']

export default function EmergencyTraumaBanner() {
  return (
    <section aria-labelledby="trauma-banner-heading" className="relative pb-4">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#0f2a5c] via-[#15469e] to-[#1a5dc4] p-6 shadow-2xl shadow-[#15469e]/25 sm:p-8 lg:p-10">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[36px] border-white/10" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border-[28px] border-white/5" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-5 sm:flex-row lg:col-span-7">
              <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-2xl bg-white/10" />
                <Ambulance className="relative h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                  {hospital.emergency.availability} Emergency & Trauma Care
                </p>
                <h2 id="trauma-banner-heading" className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Accident or medical emergency? Our trauma team is ready.
                </h2>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-white/90">
                      <CircleCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
              <a
                href={hospital.emergency.href}
                className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg transition hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8f0fb] text-[#15469e]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink/70">Emergency</span>
                  <span className="block truncate text-base font-extrabold text-[#0f2a5c]">{hospital.emergency.phone}</span>
                </span>
              </a>
              <a
                href={hospital.ambulance.href}
                className="group flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-white">
                  <Siren className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/70">Ambulance</span>
                  <span className="block text-base font-extrabold text-white">Call {hospital.ambulance.phone}</span>
                </span>
              </a>
              <Link
                to={PATHS.department('trauma-care')}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white sm:col-span-2"
              >
                Learn about our Trauma Care
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
