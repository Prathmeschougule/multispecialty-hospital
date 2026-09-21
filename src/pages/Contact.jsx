import { CalendarCheck, Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Siren } from 'lucide-react'
import MapEmbed from '../components/sections/MapEmbed'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { fullAddress, hospital } from '../config/hospital'
import { PATHS } from '../routes/paths'

function ContactCard({ icon: Icon, label, value, note, href, external, tone = 'default', className = '' }) {
  const emergency = tone === 'emergency'
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href ? { href, ...(external && { target: '_blank', rel: 'noopener noreferrer' }) } : {})}
      className={`group flex gap-4 rounded-3xl p-6 ring-1 transition duration-300 ${
        emergency
          ? 'bg-emergency text-white ring-emergency hover:bg-emergency-600'
          : 'bg-white ring-primary/10 hover:-translate-y-0.5 hover:shadow-card hover:ring-primary/25'
      } ${className}`}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
          emergency ? 'bg-white/15 text-white' : 'bg-ice text-primary group-hover:bg-primary group-hover:text-white'
        }`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block text-xs font-bold uppercase tracking-wider ${emergency ? 'text-white/75' : 'text-ink'}`}>{label}</span>
        <span className={`mt-1 block font-bold [overflow-wrap:anywhere] ${emergency ? 'text-xl text-white' : 'text-lg text-heading'}`}>
          {value}
        </span>
        {note && <span className={`mt-1 block text-sm ${emergency ? 'text-white/80' : 'text-ink'}`}>{note}</span>}
      </span>
    </Wrapper>
  )
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact ${hospital.fullName}: emergency number, appointment number, WhatsApp, email, address, working hours and directions.`}
      />

      <PageBanner
        title="Contact Us"
        description="Reach us any time for emergencies, or during OPD hours for appointments and enquiries."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <ContactCard
              icon={Siren}
              label={`Emergency & Trauma · ${hospital.emergency.availability}`}
              value={hospital.emergency.phone}
              note="Call immediately for accidents and medical emergencies"
              href={hospital.emergency.href}
              tone="emergency"
              className="lg:col-span-2"
            />
            <ContactCard
              icon={Phone}
              label="Appointments & Enquiries"
              value={hospital.appointments.phone}
              note={hospital.opdSummary}
              href={hospital.appointments.href}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Message us"
              note="Appointment requests and general questions"
              href={hospital.whatsappHref}
              external
            />
            <ContactCard icon={Mail} label="Email" value={hospital.email} note="We reply within working hours" href={hospital.emailHref} />
            <ContactCard
              icon={Navigation}
              label="Ambulance"
              value={hospital.ambulance.phone}
              note="For patient transport in an emergency"
              href={hospital.ambulance.href}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-primary/10 sm:p-8">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                  Hospital Address
                </h2>
                <address className="mt-4 text-[17px] not-italic leading-relaxed text-ink">
                  <span className="block font-semibold text-heading">{hospital.fullName}</span>
                  {fullAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <Button href={hospital.directionsUrl} target="_blank" rel="noopener noreferrer" variant="dark" className="mt-6">
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </Button>
              </div>

              <div className="rounded-3xl bg-white p-6 ring-1 ring-primary/10 sm:p-8">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                  Working Hours
                </h2>
                <dl className="mt-4 divide-y divide-primary/10">
                  {hospital.timings.map((row) => (
                    <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                      <dt className="font-medium text-heading">{row.label}</dt>
                      <dd className={`font-bold ${row.highlight ? 'text-emergency' : 'text-heading/80'}`}>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-2xl bg-emergency-50 p-4 text-sm leading-relaxed text-emergency-700">
                  Emergency and trauma care runs {hospital.emergency.availability}, including Sundays and public holidays.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MapEmbed className="h-[420px] lg:h-full lg:min-h-[560px]" />
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-linear-to-br from-primary-900 to-primary p-8 text-center text-white sm:p-10">
            <SectionHeading
              align="center"
              tone="light"
              eyebrow="Book an Appointment"
              title="Prefer to book online?"
              description="Send your details and our team will call you to confirm a convenient slot."
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to={PATHS.appointment} size="lg">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Book Appointment
              </Button>
              <Button href={hospital.appointments.href} variant="outlineLight" size="lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {hospital.appointments.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
