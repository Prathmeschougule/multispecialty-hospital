import { ArrowRight, Check, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'

export default function DepartmentCard({ department, index }) {
  const Icon = department.icon
  const emergency = department.emergency

  return (
    <Link
      to={PATHS.department(department.slug)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${
        emergency
          ? 'bg-linear-to-br from-emergency-700 to-emergency text-white shadow-lg shadow-emergency/20 hover:shadow-xl hover:shadow-emergency/30'
          : 'bg-white shadow-card ring-1 ring-primary/10 hover:shadow-soft hover:ring-primary/25'
      }`}
    >
      {index !== undefined && (
        <span
          aria-hidden="true"
          className={`absolute right-6 top-5 text-5xl font-extrabold ${emergency ? 'text-white/10' : 'text-primary/[0.06] group-hover:text-accent/15'}`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      <span
        className={`grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300 ${
          emergency ? 'bg-white/15 text-white ring-1 ring-white/25' : 'bg-ice text-primary group-hover:bg-primary group-hover:text-white'
        }`}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>

      {emergency && (
        <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-emergency">
          <Siren className="h-3 w-3" aria-hidden="true" />
          {hospital.emergency.availability} Emergency
        </span>
      )}

      <h3 className={`${emergency ? 'mt-3 text-white' : 'mt-6'} text-xl font-bold`}>{department.title}</h3>
      <p className={`mt-1 text-sm font-semibold ${emergency ? 'text-white/90' : 'text-accent-700'}`}>{department.tagline}</p>
      <p className={`mt-3 text-[15px] leading-relaxed ${emergency ? 'text-white/80' : 'text-ink'}`}>{department.description}</p>

      <ul className={`mt-5 space-y-2 border-t pt-5 ${emergency ? 'border-white/20' : 'border-primary/10'}`}>
        {department.highlights.map((highlight) => (
          <li key={highlight} className={`flex items-center gap-2 text-sm ${emergency ? 'text-white/90' : 'text-heading/80'}`}>
            <Check className={`h-4 w-4 shrink-0 ${emergency ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      <span
        className={`mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold transition-[gap] group-hover:gap-2.5 ${
          emergency ? 'text-white' : 'text-accent-700'
        }`}
      >
        Explore department
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
