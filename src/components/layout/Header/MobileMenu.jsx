import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CalendarCheck, ChevronDown, Clock, Phone, Siren, X } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { hospital } from '../../../config/hospital'
import useLockBodyScroll from '../../../hooks/useLockBodyScroll'
import { isNavItemActive, mainNav } from '../../../navigation/mainNav'
import { PATHS } from '../../../routes/paths'
import Button from '../../ui/Button'
import Logo from '../../ui/Logo'

const focusableSelector = 'a[href], button:not([disabled])'

function MobileSection({ item, expanded, pathname, onToggle }) {
  const active = isNavItemActive(item, pathname)
  const panelId = `mobile-section-${item.basePath.slice(1)}`

  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        className={`flex h-12 w-full items-center justify-between rounded-xl px-4 text-base font-semibold transition-colors hover:bg-primary-50 ${
          active ? 'text-primary' : 'text-heading'
        }`}
      >
        {item.label}
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-50 text-primary">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden" inert={!expanded}>
          <ul className="mb-2 ml-6 mt-1 space-y-0.5 border-l-2 border-primary/10 pl-3">
            {item.children.map((child) => {
              const current = pathname === child.to
              return (
                <li key={child.to}>
                  <Link
                    to={child.to}
                    aria-current={current ? 'page' : undefined}
                    className={`flex min-h-11 items-center justify-between gap-2 rounded-lg px-3 text-[15px] transition-colors ${
                      current ? 'bg-primary-50 font-semibold text-primary' : 'text-ink hover:bg-primary-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {child.label}
                      {child.emergency && (
                        <span className="rounded-full bg-emergency px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                          {hospital.emergency.availability}
                        </span>
                      )}
                    </span>
                    {current && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                to={item.footerLink.to}
                className="flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-[15px] font-semibold text-accent"
              >
                {item.footerLink.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default function MobileMenu({ open, onClose, onNavigate }) {
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState(null)
  const [wasOpen, setWasOpen] = useState(open)
  const panelRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Each time the drawer opens, expand the section containing the current page.
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setExpanded(mainNav.find((item) => item.children && isNavItemActive(item, pathname))?.label ?? null)
  }

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = [...panelRef.current.querySelectorAll(focusableSelector)].filter((el) => !el.closest('[inert]'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const handleResize = (event) => event.matches && onNavigate()

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleResize)
    }
  }, [open, onClose, onNavigate])

  return (
    <div id="mobile-menu" className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`} inert={!open}>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-primary-950/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        onClick={(event) => event.target.closest('a') && onNavigate()}
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between gap-3 border-b border-primary/10 px-5">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-50 text-primary transition-colors hover:bg-primary-100"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => {
              if (item.children) {
                return (
                  <MobileSection
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    expanded={expanded === item.label}
                    onToggle={() => setExpanded(expanded === item.label ? null : item.label)}
                  />
                )
              }

              const active = isNavItemActive(item, pathname)
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`flex h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors ${
                      active ? 'bg-primary-50 text-primary' : 'text-heading hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-primary/10 bg-primary-50/60 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <p className="flex items-center gap-2 text-sm text-ink">
            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
            {hospital.opdSummary}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button href={hospital.emergency.href} variant="emergency" size="sm">
              <Siren className="h-4 w-4" aria-hidden="true" />
              Emergency
            </Button>
            <Button href={hospital.appointments.href} variant="secondary" size="sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </Button>
          </div>
          <Button to={PATHS.appointment} className="w-full">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  )
}
