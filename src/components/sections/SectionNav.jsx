import { useMemo } from 'react'
import useActiveSection from '../../hooks/useActiveSection'
import Container from '../ui/Container'

// Sticky in-page navigation. Pass `sections` as a module-level constant: [{ id, label }].
export default function SectionNav({ sections, label = 'Page sections', className = '' }) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections])
  const active = useActiveSection(ids)

  return (
    <div className={`sticky top-16 z-30 border-y border-primary/10 bg-white/90 backdrop-blur-lg ${className}`}>
      <Container>
        <nav aria-label={label} className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max gap-1 py-2">
            {sections.map((section) => {
              const current = active === section.id
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={current ? 'location' : undefined}
                    className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                      current ? 'bg-primary text-white' : 'text-heading/75 hover:bg-primary-50 hover:text-primary'
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </div>
  )
}
