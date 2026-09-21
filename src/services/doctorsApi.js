import localData from '../data/doctors.json'

// Doctors are loaded through this one function, so the hospital can move from the
// local JSON file to a real API without changing any component.
//
// To switch to an API:
//   1. set VITE_DOCTORS_API_URL in .env (e.g. https://api.example.com/doctors)
//   2. the endpoint must return either an array of doctors or { doctors: [...] }
//      using the same field names as src/data/doctors.json
const API_URL = import.meta.env.VITE_DOCTORS_API_URL

const normalise = (list) =>
  list
    .filter((doctor) => doctor.active !== false)
    .map((doctor) => ({
      ...doctor,
      departments: doctor.departments ?? [],
      experienceYears: Number(doctor.experienceYears) || 0,
    }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name))

export async function fetchDoctors({ signal } = {}) {
  if (!API_URL) return normalise(localData.doctors)

  const response = await fetch(API_URL, { signal })
  if (!response.ok) throw new Error(`Could not load doctors (${response.status})`)

  const payload = await response.json()
  return normalise(Array.isArray(payload) ? payload : (payload.doctors ?? []))
}
