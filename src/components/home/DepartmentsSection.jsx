import { ArrowRight } from 'lucide-react'
import { getDepartments } from '../../lib/content'
import { PATHS } from '../../routes/paths'
import DepartmentCard from '../departments/DepartmentCard'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function DepartmentsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-50/70 py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-ice blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Departments"
            title="Specialised departments, complete care"
            description="From everyday illness to complex surgery and critical injuries, our departments work together to give you coordinated treatment."
          />
          <Button to={PATHS.departments} variant="secondary" className="self-start lg:self-auto">
            View all departments
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {getDepartments().map((department, index) => (
            <li key={department.slug}>
              <DepartmentCard department={department} index={index} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
