import { CalendarDays, ChevronRight, Clock, HeartPulse, ShieldCheck, Stethoscope, UsersRound } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'
import Container from '../ui/Container'

const highlights = [
  { icon: Stethoscope, title: 'Experienced Doctors', text: 'Skilled & Trusted Professionals' },
  { icon: ShieldCheck, title: 'Advanced Facilities', text: 'Modern Equipment & Technology' },
  { icon: HeartPulse, title: 'Patient-Centered Care', text: 'Your Health, Our Priority' },
  { icon: Clock, title: '24/7 Support', text: 'Always Here for You' },
  { icon: UsersRound, title: 'Family Friendly', text: 'Care for All Ages' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="relative overflow-hidden bg-linear-to-b from-[#d9e9f8] via-[#e9f2fb] to-[#f4f8fd] lg:min-h-[600px] lg:pb-32">
        <Container className="relative z-10">
          <div className="max-w-xl pt-12 sm:pt-16 lg:max-w-[27rem] lg:pb-0 lg:pt-20 xl:max-w-[28rem]">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-[#1b2f55]">
              Welcome to
              <span aria-hidden="true" className="h-px w-14 bg-[#1f57b8]" />
            </p>

            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              <span className="block text-[#0f2a5c]">Ekdant Hospital</span>
              <span className="block text-[#1a5dc4]">&amp; Drugs Center</span>
            </h1>

            <p className="mt-5 text-lg font-medium text-[#1b2f55] sm:text-xl">Quality Healthcare for a Healthier Tomorrow</p>

            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-600 sm:text-base">
              We are committed to providing compassionate, reliable and advanced medical care for you and your family.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={PATHS.appointment}
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#15469e] px-6 text-sm font-semibold text-white shadow-lg shadow-[#15469e]/25 transition hover:bg-[#113a85]"
              >
                <CalendarDays className="h-[18px] w-[18px]" aria-hidden="true" />
                Book an Appointment
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <Link
                to={PATHS.departments}
                className="inline-flex h-12 items-center gap-3 rounded-full bg-white/50 px-7 text-sm font-semibold text-[#15469e] ring-1 ring-[#15469e]/70 backdrop-blur-sm transition hover:bg-white"
              >
                Our Services
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>

        {/* Building photo: full-width below the text on mobile, fills the right side on desktop */}
        <div className="relative mt-10 aspect-[16/10] w-full sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[66%]">
          <img
            src={hospital.images.hero}
            alt={`${hospital.fullName} building`}
            className="h-full w-full object-cover object-center lg:object-[60%_center]"
            fetchPriority="high"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-[#e9f2fb] via-[#e9f2fb]/0 via-30% to-transparent lg:bg-linear-to-r lg:from-[#e6f0fa] lg:via-[#e6f0fa]/35 lg:via-30% lg:to-transparent lg:to-55%"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/70 to-transparent" />
        </div>
      </div>

      <Container className="relative z-10 -mt-12 pb-12 sm:-mt-16 lg:-mt-24">
        <ul className="grid grid-cols-2 gap-y-8 rounded-2xl bg-white px-4 py-7 shadow-[0_18px_50px_-20px_rgb(15_42_92/0.25)] ring-1 ring-slate-100 sm:grid-cols-3 lg:grid-cols-5 lg:px-2">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex flex-col items-center px-3 text-center lg:border-l lg:border-slate-200 lg:first:border-l-0 ${
                i === highlights.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="grid h-13 w-13 place-items-center rounded-full bg-[#e8f0fb] text-[#1a4fa8]">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-3 text-sm font-semibold text-[#0f2a5c]">{title}</h2>
              <p className="mt-1 text-xs text-slate-500">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
