import { Clock, Mail, MapPin, MessageCircle, Phone, Siren } from 'lucide-react'
import { fullAddress, hospital } from '../../config/hospital'
import MapEmbed from '../sections/MapEmbed'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function ContactCard({ icon: Icon, label, value, href, external, tone = 'default', className = '' }) {
  const emergency = tone === 'emergency'

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`group flex items-center gap-4 rounded-2xl p-5 ring-1 transition duration-300 hover:-translate-y-0.5 hover:shadow-card ${
        emergency ? 'bg-emergency text-white ring-emergency hover:bg-emergency-600' : 'bg-white ring-primary/10 hover:ring-primary/20'
      } ${className}`}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
          emergency ? 'bg-white/15 text-white' : 'bg-ice text-primary group-hover:bg-primary group-hover:text-white'
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block text-xs font-semibold uppercase tracking-wider ${emergency ? 'text-white/75' : 'text-ink/70'}`}>
          {label}
        </span>
        <span className={`mt-0.5 block font-bold [overflow-wrap:anywhere] ${emergency ? 'text-lg text-white' : 'text-heading'}`}>{value}</span>
      </span>
    </a>
  )
}

export default function ContactSection() {
  return (
    <section className="bg-linear-to-b from-white to-primary-50/70 py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Contact & Location"
          title="Visit EKDANT Hospital"
          description="Reach us any time for emergencies, or during OPD hours for consultations and appointments."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <ContactCard
              icon={Siren}
              label={`${hospital.emergency.availability} Emergency & Trauma`}
              value={hospital.emergency.phone}
              href={hospital.emergency.href}
              tone="emergency"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={Phone} label="Appointments" value={hospital.appointments.phone} href={hospital.appointments.href} />
              <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with us" href={hospital.whatsappHref} external />
              <ContactCard icon={Mail} label="Email" value={hospital.email} href={hospital.emailHref} className="sm:col-span-2" />
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-primary/10">
              <h3 className="flex items-center gap-2 font-bold">
                <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                Hospital Timings
              </h3>
              <dl className="mt-3 divide-y divide-primary/10 text-sm">
                {hospital.timings.map((row) => (
                  <div key={row.label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                    <dt className="font-medium text-heading">{row.label}</dt>
                    <dd className={`font-semibold ${row.highlight ? 'text-emergency' : 'text-heading/80'}`}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <MapEmbed className="h-[380px] sm:h-[480px] lg:h-full lg:min-h-[520px]" />
            <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-relaxed text-ink">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="font-semibold text-heading">{hospital.shortName}</span> · {fullAddress.join(', ')}
              </span>
            </address>
          </div>
        </div>
      </Container>
    </section>
  )
}
