import { getDepartments, getFacilities } from '../lib/content'
import { PATHS } from '../routes/paths'

export const footerNav = {
  departments: getDepartments().map((department) => ({ label: department.title, to: PATHS.department(department.slug) })),
  facilities: getFacilities().map((facility) => ({ label: facility.title, to: PATHS.facility(facility.slug) })),
  quickLinks: [
    { label: 'About Hospital', to: PATHS.about },
    { label: 'Doctors', to: PATHS.doctors },
    { label: 'Gallery', to: PATHS.gallery },
    { label: 'Book Appointment', to: PATHS.appointment },
    { label: 'Contact Us', to: PATHS.contact },
  ],
  legal: [
    { label: 'Privacy Policy', to: PATHS.privacy },
    { label: 'Terms of Use', to: PATHS.terms },
  ],
}
