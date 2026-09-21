import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import { isNavItemActive, mainNav } from '../../../navigation/mainNav'
import NavDropdownPanel from './NavDropdownPanel'

const OPEN_DELAY = 120
const CLOSE_DELAY = 200

function NavLabel({ item }) {
  if (!item.shortLabel) return item.label
  return (
    <>
      <span className="xl:hidden">{item.shortLabel}</span>
      <span className="hidden xl:inline">{item.label}</span>
    </>
  )
}

function ActiveBar({ active }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-accent transition-transform duration-300 ${
        active ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  )
}

function DropdownItem({ item, active, open, pathname, onHoverOpen, onHoverClose, onToggle, onClose }) {
  const panelId = useId()
  const triggerRef = useRef(null)
  const panelRef = useRef(null)

  const focusPanelLink = (direction) => {
    const links = [...panelRef.current.querySelectorAll('a')]
    const index = links.indexOf(document.activeElement)
    const next = index === -1 ? (direction > 0 ? 0 : links.length - 1) : (index + direction + links.length) % links.length
    links[next]?.focus()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      onClose()
      triggerRef.current?.focus()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!open) onToggle()
      requestAnimationFrame(() => focusPanelLink(1))
    } else if (event.key === 'ArrowUp' && open) {
      event.preventDefault()
      focusPanelLink(-1)
    }
  }

  return (
    <li
      className="relative"
      onPointerEnter={(event) => event.pointerType === 'mouse' && onHoverOpen()}
      onPointerLeave={(event) => event.pointerType === 'mouse' && onHoverClose()}
      onKeyDown={handleKeyDown}
      onBlur={(event) => open && !event.currentTarget.contains(event.relatedTarget) && onClose()}
    >
      <div className={`flex items-center transition-colors ${active || open ? 'text-primary' : 'text-heading/85 hover:text-primary'}`}>
        <NavLink to={item.to} className="inline-flex h-10 items-center pl-2.5 text-[14px] font-semibold xl:pl-3">
          <NavLabel item={item} />
        </NavLink>
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${item.label} menu`}
          onClick={onToggle}
          className="grid h-10 w-7 place-items-center rounded-full pr-1 xl:w-8"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
      <ActiveBar active={active} />

      <div
        id={panelId}
        ref={panelRef}
        onClick={(event) => event.target.closest('a') && onClose()}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <NavDropdownPanel item={item} pathname={pathname} />
      </div>
    </li>
  )
}

export default function DesktopNav() {
  const { pathname } = useLocation()
  const [openLabel, setOpenLabel] = useState(null)
  const [lastPathname, setLastPathname] = useState(pathname)
  const timer = useRef(null)
  const navRef = useRef(null)

  // Close any open dropdown when the route changes (including back/forward).
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpenLabel(null)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    if (!openLabel) return
    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenLabel(null)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [openLabel])

  const schedule = (label, delay) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpenLabel(label), delay)
  }

  const setNow = (label) => {
    clearTimeout(timer.current)
    setOpenLabel(label)
  }

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center xl:gap-1">
        {mainNav.map((item) => {
          const active = isNavItemActive(item, pathname)

          if (!item.children) {
            return (
              <li key={item.label} className="relative">
                <NavLink
                  to={item.to}
                  end
                  className={`inline-flex h-10 items-center px-2.5 text-[14px] font-semibold transition-colors xl:px-3 ${
                    active ? 'text-primary' : 'text-heading/85 hover:text-primary'
                  }`}
                >
                  <NavLabel item={item} />
                </NavLink>
                <ActiveBar active={active} />
              </li>
            )
          }

          const open = openLabel === item.label
          return (
            <DropdownItem
              key={item.label}
              item={item}
              active={active}
              open={open}
              pathname={pathname}
              onHoverOpen={() => schedule(item.label, openLabel ? 0 : OPEN_DELAY)}
              onHoverClose={() => schedule(null, CLOSE_DELAY)}
              onToggle={() => setNow(open ? null : item.label)}
              onClose={() => setNow(null)}
            />
          )
        })}
      </ul>
    </nav>
  )
}
