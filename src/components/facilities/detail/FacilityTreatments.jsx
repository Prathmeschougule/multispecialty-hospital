import { Check, Info } from 'lucide-react'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'

export default function FacilityTreatments({ facility }) {
  const Icon = facility.icon

  return (
    <section id="treatments" className="scroll-mt-28 bg-primary-50/70 py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <SectionHeading eyebrow="Treatment Information" title={facility.treatmentTitle} description={facility.treatmentIntro} />

              <div className="relative mt-8 overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary-800 p-7 text-white shadow-soft">
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-white/10" />
                <Icon className="relative h-10 w-10 text-ice" aria-hidden="true" />
                <p className="relative mt-5 text-lg font-semibold leading-snug">{facility.fullTitle}</p>
                <p className="relative mt-2 text-sm leading-relaxed text-white/75">{facility.description}</p>
              </div>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:content-start">
            {facility.treatments.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-primary/5 transition duration-300 hover:-translate-y-0.5 hover:ring-primary/20"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-medium leading-snug text-heading/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-ink/80">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Your doctor will advise which tests, procedures or therapy are right for your condition.
        </p>
      </Container>
    </section>
  )
}
