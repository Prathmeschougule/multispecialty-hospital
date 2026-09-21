import { getGalleryCategories } from '../../lib/content'

export default function GalleryFilters({ category, counts, total, onChange }) {
  const categories = getGalleryCategories()

  const chip = (isActive) =>
    `inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${
      isActive
        ? 'bg-primary text-white shadow-md shadow-primary/25'
        : 'bg-white text-heading/80 ring-1 ring-primary/15 hover:ring-primary/35'
    }`

  const countBadge = (isActive) =>
    `rounded-full px-1.5 text-[11px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary'}`

  return (
    <div
      className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0"
      role="group"
      aria-label="Filter photos by category"
    >
      <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center">
        <button type="button" onClick={() => onChange('all')} className={chip(category === 'all')} aria-pressed={category === 'all'}>
          All Photos
          <span className={countBadge(category === 'all')}>{total}</span>
        </button>
        {categories.map((item) => {
          const isActive = category === item.slug
          const Icon = item.icon
          return (
            <button key={item.slug} type="button" onClick={() => onChange(item.slug)} className={chip(isActive)} aria-pressed={isActive}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
              <span className={countBadge(isActive)}>{counts[item.slug] ?? 0}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
