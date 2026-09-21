import { ArrowRight, Siren } from 'lucide-react'
import { Link } from 'react-router'
import { hospital } from '../../../config/hospital'

function DepartmentLink({ child, current }) {
  const Icon = child.icon
  const emergency = child.emergency

  return (
    <Link
      to={child.to}
      aria-current={current ? 'page' : undefined}
      className={`group/link flex h-full items-start gap-3 rounded-xl p-3.5 outline-offset-0 ring-1 transition-colors ${
        emergency
          ? 'bg-emergency-50/70 ring-emergency/15 hover:bg-emergency-50 focus-visible:bg-emergency-50'
          : `ring-transparent hover:bg-primary-50 focus-visible:bg-primary-50 ${current ? 'bg-primary-50' : ''}`
      }`}
    >
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
          emergency
            ? 'bg-emergency text-white'
            : 'bg-ice text-primary group-hover/link:bg-primary group-hover/link:text-white'
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${emergency ? 'text-emergency-700' : current ? 'text-primary' : 'text-heading'}`}>
            {child.label}
          </span>
          {emergency && (
            <span className="rounded-full bg-emergency px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
              {hospital.emergency.availability}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-ink/80">{child.description}</span>
      </span>
    </Link>
  )
}

function FacilityLink({ child, current }) {
  const Icon = child.icon

  return (
    <Link
      to={child.to}
      aria-current={current ? 'page' : undefined}
      className={`group/link flex items-center gap-3 rounded-xl p-2.5 outline-offset-0 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50 ${
        current ? 'bg-primary-50' : ''
      }`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ice text-primary transition-colors group-hover/link:bg-primary group-hover/link:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold ${current ? 'text-primary' : 'text-heading'}`}>{child.label}</span>
        <span className="block text-xs leading-snug text-ink/80">{child.description}</span>
      </span>
    </Link>
  )
}

export default function NavDropdownPanel({ item, pathname }) {
  const isDepartments = item.variant === 'departments'

  return (
    <div className={`${isDepartments ? 'w-[36rem]' : 'w-80'} rounded-2xl bg-white p-2 shadow-soft ring-1 ring-primary/10`}>
      <ul className={isDepartments ? 'grid grid-cols-2 gap-1.5' : 'space-y-0.5'}>
        {item.children.map((child) => (
          <li key={child.to}>
            {isDepartments ? (
              <DepartmentLink child={child} current={pathname === child.to} />
            ) : (
              <FacilityLink child={child} current={pathname === child.to} />
            )}
          </li>
        ))}
      </ul>

      <div className="mt-1.5 flex items-center justify-between gap-3 border-t border-primary/10 px-3 pb-1 pt-3">
        <Link
          to={item.footerLink.to}
          className="group/footer inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-600"
        >
          {item.footerLink.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/footer:translate-x-0.5" aria-hidden="true" />
        </Link>
        {isDepartments && (
          <a
            href={hospital.emergency.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-emergency px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-emergency-600"
          >
            <Siren className="h-3.5 w-3.5" aria-hidden="true" />
            Emergency: {hospital.emergency.phone}
          </a>
        )}
      </div>
    </div>
  )
}
