// Single access point for site content. Pages and components read data through
// these functions, so the source can later move to an API or CMS without touching the UI.
// Doctors are loaded separately through src/services/doctorsApi.js (API-ready).
import { hospital } from '../config/hospital'
import { departments } from '../data/departments'
import { facilities } from '../data/facilities'
import { galleryCategories, galleryItems } from '../data/gallery'
import { testimonials } from '../data/testimonials'

export const getDepartments = () => departments
export const getDepartment = (slug) => departments.find((department) => department.slug === slug)

export const getFacilities = () => facilities
export const getFacility = (slug) => facilities.find((facility) => facility.slug === slug)

export const getTestimonials = () => testimonials

export const getGalleryItems = () => galleryItems
export const getGalleryCategories = () => galleryCategories
export const getGalleryCategory = (slug) => galleryCategories.find((category) => category.slug === slug)
// One image per category for the homepage preview, so every area is represented.
export const getGalleryPreview = (limit = 5) =>
  galleryCategories
    .map((category) => galleryItems.find((item) => item.category === category.slug))
    .filter(Boolean)
    .slice(0, limit)

export const getStats = () => [
  { key: 'emergency', value: null, display: hospital.emergency.availability, label: 'Emergency & Trauma Care' },
  { key: 'years', value: hospital.stats.yearsOfService, suffix: '+', label: 'Years of Service' },
  { key: 'patients', value: hospital.stats.patientsTreated, suffix: '+', label: 'Patients Treated' },
  { key: 'departments', value: departments.length + facilities.length, suffix: '', label: 'Departments & Facilities' },
]
