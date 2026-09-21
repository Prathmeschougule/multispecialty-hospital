import { fullAddress, hospital } from '../../config/hospital'
import { getDepartments } from '../../lib/content'

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
  addressLocality: hospital.address.city,
  addressRegion: hospital.address.state,
  postalCode: hospital.address.pincode,
  addressCountry: 'IN',
}

// Hospital + LocalBusiness details for search engines. Rendered once, site-wide.
export function HospitalSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'LocalBusiness', 'EmergencyService'],
    '@id': `${hospital.siteUrl}/#hospital`,
    name: hospital.fullName,
    alternateName: hospital.name,
    slogan: hospital.tagline,
    url: hospital.siteUrl,
    image: `${hospital.siteUrl}${hospital.ogImage}`,
    logo: `${hospital.siteUrl}/favicon.svg`,
    telephone: hospital.appointments.phone,
    email: hospital.email,
    address: postalAddress,
    ...(hospital.geo.latitude && hospital.geo.longitude
      ? { geo: { '@type': 'GeoCoordinates', latitude: hospital.geo.latitude, longitude: hospital.geo.longitude } }
      : {}),
    ...(hospital.socialLinks.length ? { sameAs: hospital.socialLinks } : {}),
    hasMap: hospital.directionsUrl,
    availableService: getDepartments().map((department) => ({
      '@type': 'MedicalProcedure',
      name: department.title,
      description: department.description,
      url: `${hospital.siteUrl}/departments/${department.slug}`,
    })),
    medicalSpecialty: ['Orthopedic', 'InternalMedicine', 'Surgical', 'Emergency'],
    availableLanguage: ['en', 'hi', 'mr'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '17:00',
        closes: '21:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'emergency',
        telephone: hospital.emergency.phone,
        availableLanguage: ['en', 'hi', 'mr'],
        hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/PublicHolidays', opens: '00:00', closes: '23:59' },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'reservations',
        telephone: hospital.appointments.phone,
        email: hospital.email,
      },
    ],
    description: `${hospital.fullName} at ${fullAddress.join(', ')} offers emergency and trauma care, orthopedics, medicine and surgery with ICU, digital X-ray, C-arm, laboratory, pharmacy and physiotherapy.`,
  }

  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

// Breadcrumb trail for search results. `items` is [{ label, to? }] without the Home crumb.
export function BreadcrumbSchema({ items }) {
  if (!items?.length) return null

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: hospital.siteUrl },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.to ? { item: `${hospital.siteUrl}${item.to}` } : {}),
      })),
    ],
  }

  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}
