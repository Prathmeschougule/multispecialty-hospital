import { ArrowLeft, Siren } from 'lucide-react'
import { Link } from 'react-router'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { PATHS } from '../routes/paths'

const helpfulLinks = [
  { label: 'Departments', to: PATHS.departments },
  { label: 'Facilities', to: PATHS.facilities },
  { label: 'Contact Us', to: PATHS.contact },
]

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." noindex />
      <section className="bg-linear-to-b from-ice/60 to-white">
        <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <p className="bg-linear-to-br from-primary to-accent bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">We couldn't find that page</h1>
          <p className="mt-4 max-w-md text-lg text-ink">
            The page may have moved or no longer exists. Here are some helpful places to continue.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {helpfulLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary ring-1 ring-primary/15 transition hover:ring-primary/40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to={PATHS.home} variant="dark">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Button>
            <Button href={hospital.emergency.href} variant="emergencyOutline">
              <Siren className="h-4 w-4" aria-hidden="true" />
              Emergency: {hospital.emergency.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
