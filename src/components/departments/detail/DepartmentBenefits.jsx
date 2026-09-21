import { hospital } from '../../../config/hospital'
import Container from '../../ui/Container'
import { LogoMark } from '../../ui/Logo'
import SectionHeading from '../../ui/SectionHeading'

export default function DepartmentBenefits({ department }) {
  const emergency = department.emergency

  return (
    <section id="benefits" className="relative scroll-mt-28 overflow-hidden bg-primary-900 py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.06)_1px,transparent_0)] bg-size-[26px_26px]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl ${emergency ? 'bg-emergency/25' : 'bg-accent/20'}`}
      />

      <Container className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="Benefits"
            title={`Why choose EKDANT for ${department.shortTitle}`}
            description="Patient-first care supported by specialists, diagnostics and critical care, all within one hospital."
          />
          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
            <LogoMark className="h-12 w-12 shrink-0" />
            <p className="text-lg font-semibold italic leading-snug text-white/90">“{hospital.tagline}”</p>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {department.benefits.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.1]"
            >
              <span aria-hidden="true" className="absolute right-6 top-5 text-4xl font-extrabold text-white/[0.07]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg shadow-black/20 bg-linear-to-br ${
                  emergency ? 'from-emergency to-emergency-700' : 'from-accent to-primary'
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
