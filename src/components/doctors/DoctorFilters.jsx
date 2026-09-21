import { Search, X } from 'lucide-react'
import { getDepartments } from '../../lib/content'

// Filters are driven by the department data, so they grow with the hospital.
export default function DoctorFilters({ department, query, counts, total, onDepartmentChange, onQueryChange }) {
  const departments = getDepartments()

  const chip = (isActive, isEmergency) =>
    `inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${
      isActive
        ? isEmergency
          ? 'bg-emergency text-white shadow-md shadow-emergency/25'
          : 'bg-primary text-white shadow-md shadow-primary/25'
        : 'bg-white text-heading/80 ring-1 ring-primary/15 hover:ring-primary/35'
    }`

  const countBadge = (isActive) =>
    `rounded-full px-1.5 text-[11px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary'}`

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-primary-50/70 p-5 ring-1 ring-primary/10 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter doctors by department">
        <button type="button" onClick={() => onDepartmentChange('all')} className={chip(department === 'all')} aria-pressed={department === 'all'}>
          All Doctors
          <span className={countBadge(department === 'all')}>{total}</span>
        </button>
        {departments.map((item) => {
          const isActive = department === item.slug
          const count = counts[item.slug] ?? 0
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => onDepartmentChange(item.slug)}
              className={chip(isActive, item.emergency)}
              aria-pressed={isActive}
            >
              {item.shortTitle}
              <span className={countBadge(isActive)}>{count}</span>
            </button>
          )
        })}
      </div>

      <div className="relative lg:w-72">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by name or qualification"
          aria-label="Search doctors"
          className="h-11 w-full rounded-full bg-white pl-11 pr-10 text-sm text-heading ring-1 ring-primary/15 transition placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ink/60 transition hover:bg-primary-50 hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
