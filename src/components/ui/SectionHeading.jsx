export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', className = '' }) {
  const centered = align === 'center'
  const light = tone === 'light'

  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? 'text-ice' : 'text-accent-700'
          }`}
        >
          <span className={`h-px w-6 ${light ? 'bg-ice/60' : 'bg-accent/60'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-heading'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-ink'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
