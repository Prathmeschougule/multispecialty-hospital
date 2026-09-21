import { Ambulance, CalendarCheck, Clock, Siren } from 'lucide-react'
import { hospital } from '../../config/hospital'
import { getDepartments, getFacilities } from '../../lib/content'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'
import HospitalIllustration from './HospitalIllustration'

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mr-0 lg:max-w-none">
      <div className="relative rounded-[2.5rem] bg-white/[0.06] p-3 shadow-2xl shadow-black/30 ring-1 ring-white/15 backdrop-blur sm:p-4">
        <div className="overflow-hidden rounded-[2rem] bg-linear-to-b from-[#bfe6f0] via-[#e2f5f8] to-[#f4fbfc]">
          {hospital.images.hero ? (
            <img
              src={hospital.images.hero}
              alt={`${hospital.fullName} building`}
              className="aspect-[600/460] w-full object-cover"
              fetchPriority="high"
            />
          ) : (
            <HospitalIllustration className="block h-auto w-full" />
          )}
        </div>
      </div>

      <div className="absolute -left-3 top-8 flex animate-float items-center gap-3 rounded-2xl bg-white py-3 pl-3 pr-5 shadow-soft sm:-left-8 xl:-left-12">
        <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-emergency text-white">
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-xl bg-emergency/40" />
          <Ambulance className="relative h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-bold text-heading">Trauma Care</span>
          <span className="block text-xs text-ink">Emergency team {hospital.emergency.availability}</span>
        </span>
      </div>

      <a
        href={hospital.ambulance.href}
        className="group absolute -bottom-6 right-4 flex animate-float-delayed items-center gap-3 rounded-2xl bg-primary-950/90 py-3 pl-3 pr-5 text-white shadow-soft ring-1 ring-white/15 backdrop-blur transition hover:bg-primary-950 sm:right-8"
      >
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-emergency-100 ring-1 ring-white/15">
          <Siren className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs text-white/65">Need an ambulance?</span>
          <span className="block text-base font-bold">Call {hospital.ambulance.phone}</span>
        </span>
      </a>
    </div>
  )
}

export default function HeroSection() {
  const departmentCount = getDepartments().length
  const facilityCount = getFacilities().length

  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary-950 via-primary-900 to-primary-700" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.07)_1px,transparent_0)] bg-size-[28px_28px] mask-[linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />

      <Container className="relative grid items-center gap-16 pb-40 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-48 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] py-1.5 pl-2 pr-4 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emergency px-2 py-0.5 text-[11px] font-bold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
              {hospital.emergency.availability}
            </span>
            Emergency & Trauma Care
          </p>

          <h1 className="mt-7">
            <span className="block text-6xl font-extrabold leading-[0.9] tracking-tight text-white sm:text-7xl xl:text-[5.5rem]">
              EKDANT
            </span>
            <span className="mt-2 block bg-linear-to-r from-ice via-white to-accent bg-clip-text text-3xl font-bold tracking-[0.3em] text-transparent sm:text-5xl xl:text-[3.25rem]">
              HOSPITAL
            </span>
            <span className="mt-5 block text-xs font-bold uppercase tracking-[0.28em] text-accent sm:text-sm">
              {hospital.subtitle}
            </span>
          </h1>

          <p className="mt-8 border-l-2 border-accent pl-5 text-xl font-medium italic leading-snug text-white/90 sm:text-2xl">
            “{hospital.tagline}”
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Comprehensive care across orthopedics, medicine, surgery and trauma, supported by an ICU, digital X-ray and
            clinical laboratory under one roof.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hospital.emergency.href} variant="emergency" size="lg">
              <Siren className="h-5 w-5" aria-hidden="true" />
              Emergency: {hospital.emergency.phone}
            </Button>
            <Button to={PATHS.appointment} size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book Appointment
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="text-white/50">Departments</dt>
              <dd className="text-lg font-bold text-white">{departmentCount}</dd>
            </div>
            <div>
              <dt className="text-white/50">Facilities</dt>
              <dd className="text-lg font-bold text-white">{facilityCount}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-white/50">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                OPD Hours
              </dt>
              <dd className="text-lg font-bold text-white">Mon – Sat</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
