import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router'
import { PATHS } from '../../routes/paths'
import { BreadcrumbSchema } from '../seo/StructuredData'

// items: [{ label, to? }] – the last item is the current page.
export default function Breadcrumbs({ items = [], tone = 'light', className = '' }) {
  const light = tone === 'light'
  const linkClasses = `transition-colors ${light ? 'hover:text-white' : 'hover:text-primary'}`

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <BreadcrumbSchema items={items} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${light ? 'text-white/80' : 'text-ink'}`}>
        <li>
          <Link to={PATHS.home} className={`inline-flex items-center gap-1.5 ${linkClasses}`}>
            <Home className="h-4 w-4" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className={`h-4 w-4 ${light ? 'text-white/40' : 'text-ink/40'}`} aria-hidden="true" />
              {last || !item.to ? (
                <span
                  aria-current={last ? 'page' : undefined}
                  className={last ? `font-semibold ${light ? 'text-white' : 'text-heading'}` : ''}
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
