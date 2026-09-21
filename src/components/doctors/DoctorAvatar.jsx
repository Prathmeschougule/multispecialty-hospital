// Shows the doctor's photo when `photo` is set in the doctors data, otherwise a styled placeholder.
export default function DoctorAvatar({ doctor, className = '' }) {
  if (doctor.photo) {
    return <img src={doctor.photo} alt={`Portrait of ${doctor.name}`} loading="lazy" className={`object-cover ${className}`} />
  }

  return (
    <div
      role="img"
      aria-label={`${doctor.name} (photo coming soon)`}
      className={`relative overflow-hidden bg-linear-to-b from-primary-100 via-ice to-primary-50 ${className}`}
    >
      <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMax meet" className="absolute inset-x-0 bottom-0 h-[88%] w-full" aria-hidden="true">
        <circle cx="100" cy="88" r="44" fill="#2A6F97" fillOpacity="0.22" />
        <path d="M18 240c0-66 38-102 82-102s82 36 82 102Z" fill="#2A6F97" fillOpacity="0.22" />
        <path d="M78 146l22 34 22-34" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="6" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
