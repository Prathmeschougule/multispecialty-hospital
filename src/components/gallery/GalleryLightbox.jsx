import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { getGalleryCategory } from '../../lib/content'
import GalleryPlaceholder from './GalleryPlaceholder'

export default function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(1)
      if (event.key === 'ArrowLeft') onNavigate(-1)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose, onNavigate])

  if (!open) return null

  const item = items[index]
  if (!item) return null

  const category = getGalleryCategory(item.category)

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(distance) > 60) onNavigate(distance < 0 ? 1 : -1)
    touchStartX.current = null
  }

  const arrowClasses =
    'grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-primary-900'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}. Photo ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-primary-950/95 backdrop-blur-sm"
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0].clientX
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 p-4 sm:p-6">
        <div className="min-w-0">
          {category && <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">{category.label}</p>}
          <p className="truncate text-lg font-bold text-white">{item.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/80 tabular-nums">
            {index + 1} / {items.length}
          </span>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close gallery" className={arrowClasses}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 items-center gap-3 px-3 pb-6 sm:gap-6 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate(-1)}
          aria-label="Previous photo"
          className={`${arrowClasses} hidden sm:grid`}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        <figure className="flex min-h-0 flex-1 items-center justify-center">
          {item.image ? (
            <img src={item.image} alt={item.title} className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl" />
          ) : (
            <div className="aspect-[4/3] max-h-full w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
              <GalleryPlaceholder item={item} index={index} iconClassName="h-28 w-28" />
            </div>
          )}
        </figure>

        <button type="button" onClick={() => onNavigate(1)} aria-label="Next photo" className={`${arrowClasses} hidden sm:grid`}>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile controls: arrows sit below the image, within thumb reach. */}
      <div className="flex shrink-0 items-center justify-center gap-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
        <button type="button" onClick={() => onNavigate(-1)} aria-label="Previous photo" className={arrowClasses}>
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => onNavigate(1)} aria-label="Next photo" className={arrowClasses}>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
