import { Info } from 'lucide-react'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'

export default function DepartmentTreatments({ department }) {
  const emergency = department.emergency

  return (
    <section id="treatments" className="scroll-mt-28 bg-primary-50/70 py-20 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Available Treatments"
          title={emergency ? 'Emergency treatments we provide' : `Treatments at our ${department.shortTitle} department`}
          description="Every treatment plan is personalised after a careful assessment of your condition."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {department.treatments.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-primary/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r transition-transform duration-500 group-hover:scale-x-100 ${
                  emergency ? 'from-emergency-700 to-emergency' : 'from-primary to-accent'
                }`}
              />
              <span aria-hidden="true" className="absolute right-6 top-5 text-4xl font-extrabold text-primary/[0.06]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  emergency ? 'bg-linear-to-br from-emergency-700 to-emergency shadow-emergency/20' : 'bg-linear-to-br from-primary to-accent shadow-primary/20'
                }`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{description}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-ink/80">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          The right treatment is decided by the doctor after examination and any necessary tests.
        </p>
      </Container>
    </section>
  )
}
