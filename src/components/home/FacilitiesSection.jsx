import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router'
import { getFacilities } from '../../lib/content'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function FacilityTile({ facility, featured }) {
  const Icon = facility.icon

  return (
    <Link
      to={PATHS.facility(facility.slug)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl ring-1 transition duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-linear-to-br from-accent/90 to-primary p-8 ring-white/15 lg:p-10'
          : 'bg-white/[0.06] p-7 ring-white/10 hover:bg-white/[0.1]'
      }`}
    >
      {featured && (
        <>
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[32px] border-white/10" />
          <Icon aria-hidden="true" strokeWidth={1} className="absolute -bottom-10 -right-6 h-56 w-56 text-white/10" />
        </>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`grid place-items-center rounded-2xl text-white ${
            featured ? 'h-16 w-16 bg-white/15 ring-1 ring-white/25' : 'h-12 w-12 bg-linear-to-br from-accent to-primary shadow-lg shadow-black/20'
          }`}
        >
          <Icon className={featured ? 'h-8 w-8' : 'h-6 w-6'} aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          aria-hidden="true"
        />
      </div>

      <h3 className={`relative font-bold text-white ${featured ? 'mt-auto pt-10 text-3xl' : 'mt-6 text-lg'}`}>
        {featured ? facility.fullTitle : facility.title}
      </h3>
      <p className={`relative mt-2 leading-relaxed ${featured ? 'max-w-md text-base text-white/85' : 'text-sm text-white/65'}`}>
        {featured ? facility.description : facility.tagline}
      </p>

      {featured && (
        <ul className="relative mt-6 flex flex-wrap gap-2">
          {facility.highlights.map((highlight) => (
            <li key={highlight} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </Link>
  )
}

export default function FacilitiesSection() {
  const [featured, ...others] = getFacilities()

  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.06)_1px,transparent_0)] bg-size-[26px_26px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Hospital Facilities"
            title="Everything you need, under one roof"
            description="Critical care, diagnostics, pharmacy and rehabilitation within the hospital, so treatment is faster and families have fewer places to go."
          />
          <Button to={PATHS.facilities} variant="outlineLight" className="self-start lg:self-auto">
            View all facilities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured && (
            <li className="sm:col-span-2 lg:row-span-2">
              <FacilityTile facility={featured} featured />
            </li>
          )}
          {others.map((facility) => (
            <li key={facility.slug}>
              <FacilityTile facility={facility} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
