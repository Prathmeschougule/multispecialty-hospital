import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { getTestimonials } from '../../lib/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-primary/5 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent">
          <Quote className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="flex gap-0.5" role="img" aria-label={`Rated ${testimonial.rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-primary/20'}`}
            />
          ))}
        </div>
      </div>

      <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-heading/80 sm:text-base">“{testimonial.quote}”</blockquote>

      <figcaption className="mt-7 flex items-center gap-3 border-t border-primary/10 pt-6">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-primary to-accent text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-heading">{testimonial.name}</span>
          <span className="block text-sm text-ink/75">{testimonial.detail}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const testimonials = getTestimonials()
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    const card = track.querySelector('li')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  const arrowClasses =
    'grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-card ring-1 ring-primary/10 transition hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40'

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50/80 to-ice/40 py-20 lg:py-28">
      <Container className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Patient Testimonials"
            title="Stories from our patients"
            description="Kind words from patients and families we have had the privilege to care for."
          />
          <div className="flex gap-3">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous testimonial" className={arrowClasses}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next testimonial" className={arrowClasses}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={updateArrows}
          tabIndex={0}
          aria-label="Patient testimonials"
          className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-4 pt-1 outline-offset-4 sm:mx-0 sm:scroll-px-0 sm:px-0"
        >
          {testimonials.map((testimonial, index) => (
            <li key={index} className="shrink-0 basis-[85%] snap-start sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
