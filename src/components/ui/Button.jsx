import { Link } from 'react-router'

const variants = {
  primary: 'bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-600 hover:shadow-accent/35',
  secondary: 'bg-white text-primary ring-1 ring-primary/20 hover:bg-primary-50 hover:ring-primary/40',
  dark: 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-700',
  light: 'bg-white text-primary-900 shadow-lg shadow-black/10 hover:bg-ice',
  outlineLight: 'text-white ring-1 ring-white/40 hover:bg-white/10 hover:ring-white/70',
  emergency: 'bg-emergency text-white shadow-lg shadow-emergency/30 hover:bg-emergency-600',
  emergencyLight: 'bg-white text-emergency-700 shadow-lg shadow-black/10 hover:bg-emergency-50',
  emergencyOutline: 'bg-white text-emergency ring-1 ring-emergency/30 hover:bg-emergency-50 hover:ring-emergency/50',
}

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base',
}

export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
