import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { getFacility } from '../../../lib/content'
import { PATHS } from '../../../routes/paths'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'

export default function DepartmentFacilities({ department }) {
  const items = department.facilities
    .map(({ slug, note }) => ({ facility: getFacility(slug), note }))
    .filter(({ facility }) => facility)

  return (
    <section id="facilities" className="scroll-mt-28 py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Facilities"
              title="Supported by in-house facilities"
              description={`Our ${department.shortTitle.toLowerCase()} team works hand in hand with the hospital's own diagnostic, critical care and support services.`}
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {items.map(({ facility, note }) => {
              const Icon = facility.icon
              return (
                <li key={facility.slug}>
                  <Link
                    to={PATHS.facility(facility.slug)}
                    className="group flex h-full gap-4 rounded-3xl bg-white p-6 ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-soft hover:ring-primary/25"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ice text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-lg font-bold text-heading">{facility.fullTitle}</span>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-ink/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-1.5 block text-[15px] leading-relaxed text-ink">{note}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
