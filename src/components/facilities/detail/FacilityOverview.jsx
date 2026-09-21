import { CircleCheck } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

export default function FacilityOverview({ facility }) {
  return (
    <section id="overview" className="scroll-mt-36">
      <SectionHeading eyebrow="Facility Overview" title={facility.overviewTitle} className="max-w-none" />

      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink">
        {facility.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-linear-to-br from-primary-50 to-ice/60 p-6 ring-1 ring-primary/10 sm:p-8">
        <h3 className="text-xl font-bold">What this facility offers</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {facility.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3.5 text-[15px] font-medium leading-snug text-heading/85"
            >
              <CircleCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
