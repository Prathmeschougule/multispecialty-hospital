import { CalendarCheck, Construction, Siren } from 'lucide-react'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { PATHS } from '../routes/paths'

// Temporary page used by routes that haven't been built yet.
export default function PlaceholderPage({ title, description, breadcrumbs }) {
  return (
    <>
      <Seo title={title} description={description ?? `${title} at ${hospital.fullName}.`} noindex />
      <PageBanner title={title} description={description} breadcrumbs={breadcrumbs ?? [{ label: title }]} />
      <Container className="py-20">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-primary/10">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ice text-primary">
            <Construction className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-bold">This page is being prepared</h2>
          <p className="mt-3 text-ink">
            Detailed information will be available here soon. Meanwhile, our team is happy to help you directly.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={PATHS.appointment}>
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Button>
            <Button href={hospital.emergency.href} variant="emergencyOutline">
              <Siren className="h-4 w-4" aria-hidden="true" />
              Emergency
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
