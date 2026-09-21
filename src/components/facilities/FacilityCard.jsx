import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router'
import { PATHS } from '../../routes/paths'

export default function FacilityCard({ facility, index }) {
  const Icon = facility.icon

  return (
    <Link
      to={PATHS.facility(facility.slug)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:ring-primary/25"
    >
      {index !== undefined && (
        <span
          aria-hidden="true"
          className="absolute right-6 top-5 text-5xl font-extrabold text-primary/[0.06] transition-colors group-hover:text-accent/15"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ice text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-bold">{facility.title}</h3>
      <p className="mt-1 text-sm font-semibold text-accent-700">{facility.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink">{facility.description}</p>

      <ul className="mt-5 space-y-2 border-t border-primary/10 pt-5">
        {facility.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2 text-sm text-heading/80">
            <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-accent-700 transition-[gap] group-hover:gap-2.5">
        Explore facility
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
