// Stylised hospital building used in the hero until a real photo is set in config/hospital.js (images.hero).
const towerWindows = Array.from({ length: 6 }, (_, row) => Array.from({ length: 5 }, (_, col) => ({ row, col }))).flat()
const wingWindows = Array.from({ length: 4 }, (_, row) => Array.from({ length: 3 }, (_, col) => ({ row, col }))).flat()

export default function HospitalIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 600 460" className={className} role="img" aria-label="Illustration of EKDANT Hospital with its trauma center and an ambulance">
      {/* Sky details */}
      <circle cx="505" cy="72" r="34" fill="#FFF4D6" opacity="0.9" />
      <g fill="#fff" opacity="0.9">
        <ellipse cx="96" cy="92" rx="46" ry="15" />
        <ellipse cx="126" cy="80" rx="28" ry="17" />
        <ellipse cx="462" cy="150" rx="38" ry="12" />
        <ellipse cx="486" cy="141" rx="22" ry="13" />
      </g>
      <path d="M0 340c80-40 160-46 250-30s170 10 350-40v130H0Z" fill="#CFEBE6" />

      {/* Left wing */}
      <rect x="48" y="220" width="150" height="180" rx="8" fill="#fff" />
      <rect x="48" y="220" width="150" height="14" rx="4" fill="#E3F1F5" />
      {wingWindows.map(({ row, col }) => (
        <rect key={`lw-${row}-${col}`} x={68 + col * 44} y={248 + row * 36} width="28" height="22" rx="3" fill={(row + col) % 3 === 0 ? '#E0FBFC' : '#A9D8E6'} />
      ))}

      {/* Main tower */}
      <rect x="180" y="80" width="240" height="320" rx="12" fill="#fff" />
      <rect x="386" y="80" width="34" height="320" rx="6" fill="#E6F2F6" />
      <rect x="205" y="104" width="190" height="36" rx="7" fill="#2A6F97" />
      <text x="300" y="128" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" letterSpacing="1.5" fontFamily="Plus Jakarta Sans, system-ui, sans-serif">
        EKDANT HOSPITAL
      </text>
      {towerWindows.map(({ row, col }) => (
        <rect key={`tw-${row}-${col}`} x={200 + col * 37} y={160 + row * 30} width="25" height="20" rx="3" fill={(row * 2 + col) % 4 === 0 ? '#E0FBFC' : row % 2 ? '#8FCADB' : '#A9D8E6'} />
      ))}

      {/* Rooftop cross */}
      <rect x="268" y="36" width="64" height="48" rx="11" fill="#fff" stroke="#E3EEF2" strokeWidth="2" />
      <rect x="292" y="45" width="16" height="30" rx="3" fill="#D62839" />
      <rect x="285" y="52" width="30" height="16" rx="3" fill="#D62839" />

      {/* Main entrance */}
      <rect x="238" y="346" width="124" height="12" rx="4" fill="#2A9D8F" />
      <rect x="262" y="358" width="76" height="42" fill="#2F5D78" />
      <rect x="299" y="358" width="2" height="42" fill="#A9D8E6" />

      {/* Trauma center wing */}
      <rect x="400" y="236" width="172" height="164" rx="8" fill="#fff" />
      {[0, 1, 2].map((col) => (
        <rect key={`rw-${col}`} x={420 + col * 50} y="254" width="32" height="22" rx="3" fill="#A9D8E6" />
      ))}
      <rect x="418" y="292" width="136" height="26" rx="6" fill="#D62839" />
      <text x="486" y="309.5" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" letterSpacing="1.4" fontFamily="Plus Jakarta Sans, system-ui, sans-serif">
        TRAUMA CENTER
      </text>
      <rect x="428" y="330" width="116" height="10" rx="3" fill="#1C4B67" />
      <rect x="442" y="340" width="88" height="60" fill="#2F5D78" />
      <rect x="485" y="340" width="2" height="60" fill="#A9D8E6" />

      {/* Ground & road */}
      <rect x="36" y="398" width="548" height="10" rx="3" fill="#B9D9E0" />
      <rect x="0" y="408" width="600" height="52" fill="#45606F" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={`lane-${i}`} x={18 + i * 80} y="432" width="40" height="4" rx="2" fill="#fff" opacity="0.75" />
      ))}

      {/* Trees */}
      <rect x="22" y="364" width="6" height="36" fill="#7A5C40" />
      <circle cx="25" cy="352" r="22" fill="#2A9D8F" />
      <circle cx="12" cy="366" r="13" fill="#238579" />
      <rect x="586" y="368" width="5" height="32" fill="#7A5C40" />
      <circle cx="588" cy="356" r="18" fill="#2A9D8F" />

      {/* Ambulance */}
      <g transform="translate(300 382)">
        <rect x="46" y="-8" width="26" height="8" rx="2" fill="#D62839" className="animate-pulse" />
        <rect x="0" y="0" width="120" height="48" rx="8" fill="#fff" stroke="#D5E2E8" strokeWidth="1.5" />
        <rect x="94" y="12" width="40" height="36" rx="9" fill="#fff" stroke="#D5E2E8" strokeWidth="1.5" />
        <rect x="103" y="18" width="24" height="14" rx="3" fill="#8FCADB" />
        <rect x="0" y="30" width="134" height="6" fill="#D62839" />
        <rect x="36" y="7" width="8" height="18" rx="1.5" fill="#D62839" />
        <rect x="31" y="12" width="18" height="8" rx="1.5" fill="#D62839" />
        <circle cx="26" cy="50" r="11" fill="#1F2A37" />
        <circle cx="26" cy="50" r="4.5" fill="#CBD5E1" />
        <circle cx="108" cy="50" r="11" fill="#1F2A37" />
        <circle cx="108" cy="50" r="4.5" fill="#CBD5E1" />
      </g>
    </svg>
  )
}
