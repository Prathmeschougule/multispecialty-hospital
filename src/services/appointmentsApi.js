// All appointment requests go through this function, so the hospital can connect a
// real backend (or the RMS API) without changing the form.
//
// To connect an API:
//   1. set VITE_APPOINTMENTS_API_URL in .env (e.g. https://api.example.com/appointments)
//   2. the endpoint receives a JSON POST with the payload below and should reply
//      with JSON such as { "reference": "EK-250916-1234", "status": "received" }
//
// WARNING: while VITE_APPOINTMENTS_API_URL is not set, the form runs in demo mode:
// requests are NOT delivered anywhere. Configure the endpoint before going live.
const API_URL = import.meta.env.VITE_APPOINTMENTS_API_URL

export const isDemoMode = !API_URL

const makeReference = () => {
  const date = new Date()
  const stamp = `${String(date.getFullYear()).slice(2)}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  return `EK-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`
}

export async function submitAppointment(payload, { signal } = {}) {
  if (isDemoMode) {
    // Simulated request so the loading and success states behave like the real thing.
    await new Promise((resolve) => setTimeout(resolve, 900))
    if (import.meta.env.DEV) console.warn('[appointments] Demo mode: request not sent.', payload)
    return { reference: makeReference(), status: 'received' }
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  })

  if (!response.ok) throw new Error(`Appointment request failed (${response.status})`)

  const data = await response.json().catch(() => ({}))
  return { reference: data.reference ?? makeReference(), status: data.status ?? 'received' }
}
