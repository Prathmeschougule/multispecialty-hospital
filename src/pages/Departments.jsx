import DepartmentCard from '../components/departments/DepartmentCard'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Container from '../components/ui/Container'
import { getDepartments } from '../lib/content'

export default function Departments() {
  return (
    <>
      <Seo
        title="Departments"
        description="Orthopedic, Medicine, Surgery and Trauma Care departments at EKDANT Hospital, working together for coordinated medical, surgical and emergency care."
      />
      <PageBanner
        title="Our Departments"
        description="Specialised departments working together to provide coordinated medical, surgical and emergency care."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <section className="py-20 lg:py-24">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {getDepartments().map((department, index) => (
              <li key={department.slug}>
                <DepartmentCard department={department} index={index} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AppointmentCTA className="pt-0 lg:pt-0" />
    </>
  )
}
