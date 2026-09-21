import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { getDepartment } from '../../../lib/content'
import { PATHS } from '../../../routes/paths'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'

export default function FacilityDepartments({ facility }) {
  const departments = facility.relatedDepartments.map(getDepartment).filter(Boolean)
  if (!departments.length) return null

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Works With"
          title="Departments supported by this facility"
          description="Our departments and facilities work together, so diagnosis and treatment stay under one roof."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => {
            const Icon = department.icon
            return (
              <li key={department.slug}>
                <Link
                  to={PATHS.department(department.slug)}
                  className={`group flex h-full flex-col rounded-3xl p-6 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                    department.emergency
                      ? 'bg-emergency-50/60 ring-emergency/15 hover:ring-emergency/30'
                      : 'bg-white ring-primary/10 hover:ring-primary/25'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${
                        department.emergency
                          ? 'bg-emergency text-white'
                          : 'bg-ice text-primary group-hover:bg-primary group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-ink/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{department.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{department.tagline}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
