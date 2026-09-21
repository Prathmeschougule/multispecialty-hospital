import { CalendarCheck, MessageCircle, Phone, Siren } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'

const itemClasses = 'flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-semibold'

export default function MobileActionBar() {
  const { pathname } = useLocation()
  if (pathname === PATHS.appointment) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-primary/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgb(20_58_81/0.18)] backdrop-blur-lg lg:hidden">
      <div className="grid h-16 grid-cols-4 gap-1.5 px-2 py-1.5">
        <a href={hospital.emergency.href} className={`${itemClasses} bg-emergency-50 text-emergency`}>
          <Siren className="h-5 w-5" aria-hidden="true" />
          Emergency
        </a>
        <a href={hospital.appointments.href} className={`${itemClasses} text-primary`}>
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${itemClasses} text-primary`}>
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <Link to={PATHS.appointment} className={`${itemClasses} bg-accent text-white shadow-md shadow-accent/30`}>
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Book
        </Link>
      </div>
    </div>
  )
}
