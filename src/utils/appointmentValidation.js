import { hospital } from '../config/hospital'

export const GENDERS = ['Male', 'Female', 'Other']

export const emptyAppointment = {
  name: '',
  mobile: '',
  age: '',
  gender: '',
  department: '',
  doctor: 'any',
  date: '',
  time: '',
  reason: '',
  consent: false,
}

// Keeps only digits and drops a leading country code, so "+91 98765 43210" becomes "9876543210".
export const normaliseMobile = (value) => value.replace(/\D/g, '').replace(/^0+/, '').replace(/^91(?=\d{10}$)/, '')

export const todayISO = () => {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 10)
}

export const maxDateISO = () => {
  const date = new Date()
  date.setDate(date.getDate() + hospital.appointmentRules.maxDaysAhead)
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

export const isClosedDay = (isoDate) => {
  if (!isoDate) return false
  const [year, month, day] = isoDate.split('-').map(Number)
  const weekday = new Date(year, month - 1, day).getDay()
  return hospital.appointmentRules.closedWeekdays.includes(weekday)
}

export function validateAppointment(values) {
  const errors = {}

  const name = values.name.trim()
  if (!name) errors.name = 'Please enter the patient name'
  else if (name.length < 3) errors.name = 'Name must be at least 3 characters'
  else if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(name)) errors.name = 'Name can only contain letters, spaces, dots and hyphens'

  const mobile = normaliseMobile(values.mobile)
  if (!mobile) errors.mobile = 'Please enter a mobile number'
  else if (!/^[6-9]\d{9}$/.test(mobile)) errors.mobile = 'Enter a valid 10-digit Indian mobile number'

  const age = values.age.toString().trim()
  if (!age) errors.age = 'Please enter the patient age'
  else if (!/^\d{1,3}$/.test(age) || Number(age) < 1 || Number(age) > 120) errors.age = 'Enter an age between 1 and 120'

  if (!values.gender) errors.gender = 'Please select a gender'
  if (!values.department) errors.department = 'Please select a department'

  if (!values.date) errors.date = 'Please choose a preferred date'
  else if (values.date < todayISO()) errors.date = 'Please choose today or a future date'
  else if (values.date > maxDateISO()) errors.date = `Please choose a date within the next ${hospital.appointmentRules.maxDaysAhead} days`
  else if (isClosedDay(values.date)) errors.date = 'OPD is closed on Sundays. Please pick another day, or call our emergency number.'

  if (!values.time) errors.time = 'Please choose a preferred time'

  const reason = values.reason.trim()
  if (!reason) errors.reason = 'Please tell us briefly why you want to visit'
  else if (reason.length > 500) errors.reason = 'Please keep this under 500 characters'

  if (!values.consent) errors.consent = 'Please accept so we can contact you about this request'

  return errors
}
