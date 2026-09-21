import { getGalleryCategory } from '../../lib/content'

const gradients = [
  'from-primary-800 to-primary',
  'from-accent to-primary-700',
  'from-primary to-accent',
  'from-primary-900 to-primary-700',
  'from-accent-600 to-primary',
  'from-primary-700 to-primary-950',
]

// Branded stand-in shown until a real photo is added to the gallery data.
export default function GalleryPlaceholder({ item, index = 0, iconClassName = 'h-16 w-16', className = '' }) {
  const category = getGalleryCategory(item.category)
  const Icon = category?.icon

  return (
    <div
      role="img"
      aria-label={`${item.title} (photo coming soon)`}
      className={`relative h-full w-full bg-linear-to-br ${gradients[index % gradients.length]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.1)_1px,transparent_0)] bg-size-[20px_20px]"
      />
      {Icon && (
        <Icon
          aria-hidden="true"
          strokeWidth={1.2}
          className={`absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-white/25 ${iconClassName}`}
        />
      )}
    </div>
  )
}
