import { Expand } from 'lucide-react'
import { getGalleryCategory } from '../../lib/content'
import GalleryPlaceholder from './GalleryPlaceholder'

// Placeholder tile heights, so the masonry columns look natural before real photos are added.
const placeholderHeights = {
  portrait: 'h-80 sm:h-[26rem]',
  landscape: 'h-52 sm:h-60',
  square: 'h-64 sm:h-72',
}

export default function GalleryGrid({ items, onOpen }) {
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5 xl:columns-4">
      {items.map((item, index) => {
        const category = getGalleryCategory(item.category)

        return (
          <li key={item.id} className="mb-4 break-inside-avoid lg:mb-5">
            <button
              type="button"
              onClick={() => onOpen(index)}
              className="group relative block w-full overflow-hidden rounded-3xl bg-primary-900 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Open photo: ${item.title}`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={placeholderHeights[item.ratio] ?? placeholderHeights.square}>
                  <GalleryPlaceholder item={item} index={index} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}

              <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary-950/85 via-primary-950/10 to-transparent" />

              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <span>
                  {category && <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ice/80">{category.label}</span>}
                  <span className="block font-bold text-white">{item.title}</span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
