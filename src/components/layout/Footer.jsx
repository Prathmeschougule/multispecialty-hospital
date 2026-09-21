import { CalendarCheck, Mail, MapPin, Navigation, Phone, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { fullAddress, hospital } from '../../config/hospital'
import { footerNav } from '../../navigation/footerNav'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Logo from '../ui/Logo'

function FooterHeading({ children }) {
  return <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{children}</h2>
}

function FooterLinks({ title, links, className = '' }) {
  return (
    <div className={className}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-primary-950 pb-18 text-white/65 lg:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold text-white">Need urgent medical help?</p>
            <p className="mt-1 text-sm">Our emergency & trauma team is available {hospital.emergency.availability}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={hospital.emergency.href} variant="emergency">
              <Siren className="h-4 w-4" aria-hidden="true" />
              Emergency: {hospital.emergency.phone}
            </Button>
            <Button to={PATHS.appointment} variant="outlineLight">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 text-lg font-semibold italic leading-snug text-white/90">“{hospital.tagline}”</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              A multispeciality and trauma center providing emergency, surgical and medical care with compassion and expertise.
            </p>
          </div>

          <FooterLinks title="Departments" links={footerNav.departments} className="lg:col-span-2" />
          <FooterLinks title="Facilities" links={footerNav.facilities} className="lg:col-span-2" />
          <FooterLinks title="Quick Links" links={footerNav.quickLinks} className="lg:col-span-2" />

          <div className="sm:col-span-2 lg:col-span-2">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {fullAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li>
                <a href={hospital.appointments.href} className="flex gap-3 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {hospital.appointments.phone}
                </a>
              </li>
              <li>
                <a href={hospital.emailHref} className="flex gap-3 break-all transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {hospital.email}
                </a>
              </li>
              <li>
                <a
                  href={hospital.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 font-semibold text-white transition-colors hover:text-ice"
                >
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {hospital.fullName}. All rights reserved.
          </p>
          <p className="text-white/45 lg:max-w-md lg:text-center">
            Information on this website is for general awareness and is not a substitute for professional medical advice.
          </p>
          <ul className="flex gap-5">
            {footerNav.legal.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  )
}
