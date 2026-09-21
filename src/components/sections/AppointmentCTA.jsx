import { Ambulance, CalendarCheck, CircleCheck, MessageCircle, Phone, Siren } from 'lucide-react'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'
import Button from '../ui/Button'
import Container from '../ui/Container'

const defaultPoints = ['Experienced specialists', 'Book online, by phone or WhatsApp', 'Diagnostics under one roof']

export default function AppointmentCTA({
  eyebrow = 'Book an Appointment',
  title = 'Ready to take the next step for your health?',
  description = 'Schedule a consultation at a time that suits you. Our team will confirm your appointment promptly.',
  bookTo = PATHS.appointment,
  bookLabel = 'Book Appointment',
  points = defaultPoints,
  emergency = false,
  className = '',
}) {
  return (
    <section className={`py-20 lg:py-24 ${className}`}>
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary-900 px-6 py-12 shadow-soft sm:px-10 lg:px-14 lg:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.06)_1px,transparent_0)] bg-size-[24px_24px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">{description}</p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-white/85">
                    <CircleCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {emergency ? (
              <div className="grid grid-cols-2 gap-3 lg:col-span-5">
                <Button href={hospital.emergency.href} variant="emergency" size="lg" className="col-span-2">
                  <Siren className="h-5 w-5" aria-hidden="true" />
                  Emergency: {hospital.emergency.phone}
                </Button>
                <Button href={hospital.ambulance.href} variant="outlineLight" size="md">
                  <Ambulance className="h-5 w-5" aria-hidden="true" />
                  Ambulance {hospital.ambulance.phone}
                </Button>
                <Button to={bookTo} variant="outlineLight" size="md">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  {bookLabel}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 lg:col-span-5">
                <Button to={bookTo} size="lg" className="col-span-2">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  {bookLabel}
                </Button>
                <Button href={hospital.appointments.href} variant="outlineLight" size="md">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </Button>
                <Button href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" variant="outlineLight" size="md">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
