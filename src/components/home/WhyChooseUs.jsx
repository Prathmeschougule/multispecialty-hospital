import { CalendarCheck, HeartPulse, Pill, ScanLine, ShieldPlus, Siren, UserRoundCheck } from 'lucide-react'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { LogoMark } from '../ui/Logo'
import SectionHeading from '../ui/SectionHeading'

const reasons = [
  {
    icon: Siren,
    title: `${hospital.emergency.availability} Emergency & Trauma`,
    description: 'A dedicated emergency team ready to respond to accidents and critical situations at any hour.',
  },
  {
    icon: UserRoundCheck,
    title: 'Experienced Specialists',
    description: 'Qualified doctors across orthopedics, medicine, surgery and trauma care.',
  },
  {
    icon: ScanLine,
    title: 'Diagnostics Under One Roof',
    description: 'Digital X-ray and a clinical laboratory in-house for faster, accurate diagnosis.',
  },
  {
    icon: HeartPulse,
    title: 'Intensive Care Unit',
    description: 'Continuous monitoring and critical care support for serious conditions.',
  },
  {
    icon: Pill,
    title: 'In-House Medical Store',
    description: 'Prescribed medicines available within the hospital, so families can focus on care.',
  },
  {
    icon: ShieldPlus,
    title: 'Ethical, Patient-First Care',
    description: 'Transparent communication and treatment focused on what you truly need.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Choose EKDANT"
              title="Trusted care, when it matters most"
              description="We combine emergency readiness, specialist expertise and in-house diagnostics with the warmth and respect every patient deserves."
            />

            <div className="relative mt-10 overflow-hidden rounded-3xl bg-linear-to-br from-primary-900 via-primary-800 to-primary p-8 text-white shadow-soft">
              <div aria-hidden="true" className="absolute -right-14 -top-14 h-48 w-48 rounded-full border-[22px] border-white/10" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
              <LogoMark className="relative h-12 w-12" />
              <p className="relative mt-6 text-2xl font-semibold italic leading-snug">“{hospital.tagline}”</p>
              <p className="relative mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ice/80">{hospital.fullName}</p>
              <Button to={PATHS.appointment} variant="light" size="sm" className="relative mt-8">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className={`group rounded-3xl p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                index === 0 ? 'bg-emergency-50/60 ring-emergency/15' : 'bg-white ring-primary/10 hover:ring-primary/20'
              }`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${
                  index === 0
                    ? 'bg-emergency text-white'
                    : 'bg-accent-50 text-accent group-hover:bg-accent group-hover:text-white'
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
