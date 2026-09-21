import Container from '../ui/Container'
import Breadcrumbs from './Breadcrumbs'

export default function PageBanner({ title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-900 via-primary-800 to-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.08)_1px,transparent_0)] bg-size-[26px_26px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

      <Container className="relative py-14 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>}
      </Container>
    </section>
  )
}
