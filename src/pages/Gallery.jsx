import { useCallback, useMemo, useState } from 'react'
import { ImageOff } from 'lucide-react'
import { useSearchParams } from 'react-router'
import GalleryFilters from '../components/gallery/GalleryFilters'
import GalleryGrid from '../components/gallery/GalleryGrid'
import GalleryLightbox from '../components/gallery/GalleryLightbox'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { getGalleryCategory, getGalleryItems } from '../lib/content'

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const allItems = getGalleryItems()
  const category = searchParams.get('category') ?? 'all'
  const activeCategory = category !== 'all' ? getGalleryCategory(category) : null

  const counts = useMemo(() => {
    const result = {}
    allItems.forEach((item) => {
      result[item.category] = (result[item.category] ?? 0) + 1
    })
    return result
  }, [allItems])

  const visibleItems = useMemo(
    () => (category === 'all' ? allItems : allItems.filter((item) => item.category === category)),
    [allItems, category],
  )

  const handleCategoryChange = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all') next.delete('category')
    else next.set('category', value)
    setSearchParams(next, { replace: true, preventScrollReset: true })
    setLightboxIndex(null)
  }

  const navigate = useCallback(
    (step) => setLightboxIndex((current) => (current === null ? current : (current + step + visibleItems.length) % visibleItems.length)),
    [visibleItems.length],
  )

  return (
    <>
      <Seo
        title="Gallery"
        description={`Photos of ${hospital.fullName}: hospital building, ICU, operation theatre, trauma center, X-ray department, laboratory, physiotherapy and patient areas.`}
      />

      <PageBanner
        title="Hospital Gallery"
        description="A look inside EKDANT Hospital: our building, critical care units, diagnostic facilities and patient areas."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <GalleryFilters category={category} counts={counts} total={allItems.length} onChange={handleCategoryChange} />

          <p className="mt-8 text-center text-sm text-ink" role="status">
            Showing <span className="font-bold text-heading">{visibleItems.length}</span>{' '}
            {visibleItems.length === 1 ? 'photo' : 'photos'}
            {activeCategory ? ` in ${activeCategory.label}` : ''}
          </p>

          <div className="mt-8">
            {visibleItems.length > 0 ? (
              <GalleryGrid items={visibleItems} onOpen={setLightboxIndex} />
            ) : (
              <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-primary/10">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ice text-primary">
                  <ImageOff className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-bold">No photos in this category yet</h2>
                <p className="mt-2 text-ink">Photos for this area are being added. Please check back soon.</p>
                <Button onClick={() => handleCategoryChange('all')} variant="secondary" className="mt-6">
                  View all photos
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>

      <GalleryLightbox items={visibleItems} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={navigate} />

      <AppointmentCTA className="pt-0 lg:pt-0" />
    </>
  )
}
