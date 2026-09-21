import { useCallback, useRef, useState } from 'react'
import { CalendarCheck, Menu, Phone } from 'lucide-react'
import { hospital } from '../../../config/hospital'
import useScrolled from '../../../hooks/useScrolled'
import { PATHS } from '../../../routes/paths'
import Button from '../../ui/Button'
import Container from '../../ui/Container'
import Logo from '../../ui/Logo'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

export default function Header() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  const closeMenuOnNavigate = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? 'border-primary/10 bg-white/90 shadow-card backdrop-blur-lg' : 'border-transparent bg-white'
        }`}
      >
        <Container
          className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
        >
          <Logo compact />
          <DesktopNav />

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button to={PATHS.appointment} size="sm">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Appointment
              </Button>
            </div>
            <a
              href={hospital.appointments.href}
              aria-label={`Call ${hospital.shortName} for appointments`}
              className="grid h-11 w-11 place-items-center rounded-full bg-primary-50 text-primary transition-colors hover:bg-primary-100 lg:hidden"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-700 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} onNavigate={closeMenuOnNavigate} />
    </>
  )
}
