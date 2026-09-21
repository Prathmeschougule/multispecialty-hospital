import { ArrowRight, Images } from 'lucide-react'
import { Link } from 'react-router'
import { getGalleryCategory, getGalleryPreview } from '../../lib/content'
import { PATHS } from '../../routes/paths'
import GalleryPlaceholder from '../gallery/GalleryPlaceholder'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function GalleryTile({ item, index, large }) {
  const category = getGalleryCategory(item.category)

  return (
    <Link
      to={`${PATHS.gallery}?category=${item.category}`}
      className="group relative block h-full overflow-hidden rounded-3xl bg-primary-900"
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <GalleryPlaceholder
          item={item}
          index={index}
          iconClassName={large ? 'h-28 w-28' : 'h-14 w-14'}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary-950/85 via-primary-950/10 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <span>
          {category && <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ice/80">{category.label}</span>}
          <span className={`block font-bold text-white ${large ? 'text-2xl' : 'text-base'}`}>{item.title}</span>
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </Link>
  )
}

export default function GalleryPreview() {
  const items = getGalleryPreview(5)

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside EKDANT Hospital"
            description="Explore our building, critical care units, diagnostic facilities and patient areas."
          />
          <Button to={PATHS.gallery} variant="secondary" className="self-start lg:self-auto">
            <Images className="h-4 w-4" aria-hidden="true" />
            View full gallery
          </Button>
        </div>

        <ul className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => (
            <li key={item.id} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
              <GalleryTile item={item} index={index} large={index === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
