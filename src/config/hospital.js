// TODO: Replace every value marked PLACEHOLDER with EKDANT Hospital's real details before going live.

const appointmentDigits = '910000000000' // PLACEHOLDER – country code + number, digits only
const emergencyDigits = '910000000001' // PLACEHOLDER
const mapQuery = 'EKDANT Hospital Multispeciality & Trauma Center' // PLACEHOLDER – exact Google Maps listing name or address

export const hospital = {
  // Used for canonical URLs, Open Graph tags and structured data. No trailing slash.
  siteUrl: 'https://www.ekdanthospital.com', // PLACEHOLDER – set the real domain
  ogImage: '/og-image.jpg', // PLACEHOLDER – add a 1200x630 image to /public

  name: 'EKDANT HOSPITAL',
  shortName: 'EKDANT Hospital',
  subtitle: 'Multispeciality & Trauma Center',
  fullName: 'EKDANT Hospital Multispeciality & Trauma Center',
  tagline: 'Care You Can Trust, Blessings You Can Feel',

  emergency: {
    label: 'Emergency & Trauma',
    phone: '+91 00000 00001', // PLACEHOLDER
    href: `tel:+${emergencyDigits}`,
    availability: '24×7', // PLACEHOLDER – confirm emergency hours
  },
  ambulance: {
    phone: '108', // National ambulance number; replace if the hospital runs its own
    href: 'tel:108',
  },
  appointments: {
    phone: '+91 00000 00000', // PLACEHOLDER
    href: `tel:+${appointmentDigits}`,
  },
  whatsappHref: `https://wa.me/${appointmentDigits}`,
  email: 'info@ekdanthospital.com', // PLACEHOLDER
  emailHref: 'mailto:info@ekdanthospital.com',

  address: {
    line1: 'Hospital address line 1', // PLACEHOLDER
    line2: 'Area / Landmark', // PLACEHOLDER
    city: 'City', // PLACEHOLDER
    state: 'State', // PLACEHOLDER
    pincode: '000000', // PLACEHOLDER
  },
  shortLocation: 'City, State', // PLACEHOLDER
  // Optional – used in structured data when available
  geo: { latitude: null, longitude: null }, // PLACEHOLDER – from the Google Maps listing
  socialLinks: [], // PLACEHOLDER – e.g. ['https://www.facebook.com/...', 'https://www.instagram.com/...']

  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`,

  // PLACEHOLDER – confirm OPD timings
  timings: [
    { label: 'OPD (Monday – Saturday)', value: '9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM' },
    { label: 'OPD (Sunday)', value: 'Closed' },
    { label: 'Emergency & Trauma', value: 'Open 24 hours, all days', highlight: true },
  ],
  opdSummary: 'OPD: Mon–Sat · 9 AM–1 PM, 5 PM–9 PM',

  // Appointment booking rules – PLACEHOLDER, confirm OPD slots with the hospital
  appointmentRules: {
    closedWeekdays: [0], // 0 = Sunday (OPD closed; emergency stays open)
    maxDaysAhead: 60,
    slots: [
      { label: 'Morning', times: ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'] },
      { label: 'Evening', times: ['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'] },
    ],
  },

  // Homepage hero photo, served from /public
  images: {
    hero: '/hospital%20img.jpeg',
  },

  // PLACEHOLDER – use verified figures only
  stats: {
    yearsOfService: 10,
    patientsTreated: 50000,
  },
}

export const fullAddress = [
  hospital.address.line1,
  hospital.address.line2,
  `${hospital.address.city}, ${hospital.address.state} ${hospital.address.pincode}`,
]
