import { CircleCheck, Siren } from 'lucide-react'
import { hospital } from '../../../config/hospital'
import SectionHeading from '../../ui/SectionHeading'

function EmergencyGuide({ guide }) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-emergency/20">
      <div className="flex items-center gap-3 bg-emergency px-6 py-4 text-white">
        <Siren className="h-5 w-5 shrink-0" aria-hidden="true" />
        <h3 className="text-lg font-bold text-white">{guide.title}</h3>
      </div>
      <ol className="grid gap-4 p-6 sm:grid-cols-2">
        {guide.steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-[15px] leading-snug text-heading/85">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emergency-50 text-sm font-bold text-emergency">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <div className="border-t border-emergency/10 bg-emergency-50/60 px-6 py-4">
        <a href={hospital.emergency.href} className="inline-flex items-center gap-2 font-bold text-emergency-700 hover:underline">
          <Siren className="h-4 w-4" aria-hidden="true" />
          Emergency: {hospital.emergency.phone}
        </a>
        <span className="mx-3 text-emergency/30" aria-hidden="true">|</span>
        <a href={hospital.ambulance.href} className="font-bold text-emergency-700 hover:underline">
          Ambulance: {hospital.ambulance.phone}
        </a>
      </div>
    </div>
  )
}

export default function DepartmentAbout({ department }) {
  return (
    <section id="about" className="scroll-mt-36">
      <SectionHeading eyebrow="About the Department" title={department.aboutTitle} className="max-w-none" />

      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink">
        {department.about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div
        className={`mt-10 rounded-3xl p-6 ring-1 sm:p-8 ${
          department.emergency ? 'bg-emergency-50/50 ring-emergency/10' : 'bg-linear-to-br from-primary-50 to-ice/60 ring-primary/10'
        }`}
      >
        <h3 className="text-xl font-bold">{department.conditionsTitle}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {department.conditions.map((condition) => (
            <li
              key={condition}
              className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3.5 text-[15px] font-medium leading-snug text-heading/85"
            >
              <CircleCheck className={`h-5 w-5 shrink-0 ${department.emergency ? 'text-emergency' : 'text-accent'}`} aria-hidden="true" />
              {condition}
            </li>
          ))}
        </ul>
      </div>

      {department.emergencyGuide && <EmergencyGuide guide={department.emergencyGuide} />}
    </section>
  )
}
