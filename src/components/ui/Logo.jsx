import { Link } from 'react-router'
import { hospital } from '../../config/hospital'
import { PATHS } from '../../routes/paths'

export function LogoMark({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ekdant-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2A6F97" />
          <stop offset="1" stopColor="#2A9D8F" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#ekdant-logo-gradient)" />
      <path d="M26 14h12v12h12v12H38v12H26V38H14V26h12Z" fill="#fff" />
      <circle cx="32" cy="32" r="4.5" fill="#2A9D8F" />
    </svg>
  )
}

// `compact` is for the header, where space is tightest: it hides the subtitle on phones
// and again at the lg breakpoint, so the logo never pushes the page wider than the screen.
export default function Logo({ tone = 'dark', compact = false, className = '' }) {
  const light = tone === 'light'

  return (
    <Link
      to={PATHS.home}
      className={`group inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={`${hospital.fullName} home`}
    >
      <LogoMark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:rotate-6 sm:h-11 sm:w-11" />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate text-[0.95rem] font-extrabold tracking-[0.04em] sm:text-lg sm:tracking-[0.06em] ${
            light ? 'text-white' : 'text-heading'
          }`}
        >
          EKDANT <span className={light ? 'text-ice' : 'text-primary'}>HOSPITAL</span>
        </span>
        <span
          className={`mt-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.2em] ${light ? 'text-ice/75' : 'text-accent'} ${
            compact ? 'hidden sm:block lg:hidden xl:block' : ''
          }`}
        >
          {hospital.subtitle}
        </span>
      </span>
    </Link>
  )
}
