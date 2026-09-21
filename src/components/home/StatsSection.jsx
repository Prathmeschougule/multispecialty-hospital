import { Building2, Clock, HeartPulse, Users } from 'lucide-react'
import useCountUp from '../../hooks/useCountUp'
import useInView from '../../hooks/useInView'
import { getStats } from '../../lib/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const icons = { emergency: Clock, years: HeartPulse, patients: Users, departments: Building2 }

function StatCard({ stat, start }) {
  const Icon = icons[stat.key]
  const count = useCountUp(stat.value ?? 0, { start: start && stat.value !== null })
  const finalText = stat.display ?? `${stat.value.toLocaleString('en-IN')}${stat.suffix}`
  const animatedText = stat.display ?? `${count.toLocaleString('en-IN')}${stat.suffix}`

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
      <span
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-50 transition-transform duration-500 group-hover:scale-150"
      />
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="relative mt-5 text-4xl font-extrabold tracking-tight text-heading tabular-nums">
        <span aria-hidden="true">{animatedText}</span>
        <span className="sr-only">{finalText}</span>
      </p>
      <p className="relative mt-1 text-sm font-semibold text-ink">{stat.label}</p>
    </div>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="pb-20 pt-16 lg:pb-24 lg:pt-20">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="EKDANT at a Glance"
            title="A hospital built around your care"
            description="Emergency response, specialist treatment and in-house diagnostics working together for faster, safer recovery."
          />
        </div>
        <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-8">
          {getStats().map((stat) => (
            <StatCard key={stat.key} stat={stat} start={inView} />
          ))}
        </div>
      </Container>
    </section>
  )
}
