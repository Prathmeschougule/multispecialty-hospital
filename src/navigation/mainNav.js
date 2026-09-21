import { getDepartments, getFacilities } from '../lib/content'
import { PATHS } from '../routes/paths'

export const mainNav = [
  { label: 'Home', to: PATHS.home },
  { label: 'About Hospital', shortLabel: 'About', to: PATHS.about },
  {
    label: 'Departments',
    to: PATHS.departments,
    basePath: PATHS.departments,
    variant: 'departments',
    children: getDepartments().map((department) => ({
      label: department.title,
      description: department.tagline,
      to: PATHS.department(department.slug),
      icon: department.icon,
      emergency: department.emergency,
    })),
    footerLink: { label: 'View all departments', to: PATHS.departments },
  },
  {
    label: 'Facilities',
    to: PATHS.facilities,
    basePath: PATHS.facilities,
    variant: 'facilities',
    children: getFacilities().map((facility) => ({
      label: facility.title,
      description: facility.tagline,
      to: PATHS.facility(facility.slug),
      icon: facility.icon,
    })),
    footerLink: { label: 'View all facilities', to: PATHS.facilities },
  },
  { label: 'Doctors', to: PATHS.doctors },
  { label: 'Gallery', to: PATHS.gallery },
  { label: 'Contact Us', shortLabel: 'Contact', to: PATHS.contact },
]

export const isNavItemActive = (item, pathname) =>
  item.basePath ? pathname.startsWith(item.basePath) : pathname === item.to
