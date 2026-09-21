import { Mail, MapPin, Phone, Siren } from 'lucide-react'
import { hospital } from '../../config/hospital'
import Container from '../ui/Container'

// Desktop: full contact bar. Mobile: slim emergency strip that is always one tap away.
export default function TopBar() {
  return (
    <>
      <a
        href={hospital.emergency.href}
        className="flex h-9 items-center justify-center gap-2 bg-emergency text-[13px] font-semibold text-white lg:hidden"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {hospital.emergency.availability} Emergency & Trauma · Tap to call {hospital.emergency.phone}
      </a>

      <div className="hidden bg-primary-950 text-[13px] text-white/75 lg:block">
        <Container className="flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href={hospital.emergency.href}
              className="inline-flex h-7 items-center gap-2 rounded-full bg-emergency px-3 font-semibold text-white transition-colors hover:bg-emergency-600"
            >
              <Siren className="h-3.5 w-3.5" aria-hidden="true" />
              {hospital.emergency.availability} Emergency: {hospital.emergency.phone}
            </a>
            <a href={hospital.appointments.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Appointments: {hospital.appointments.phone}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href={hospital.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {hospital.email}
            </a>
            <a
              href={hospital.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {hospital.shortLocation}
            </a>
          </div>
        </Container>
      </div>
    </>
  )
}
