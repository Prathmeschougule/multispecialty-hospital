import { useMemo, useRef, useState } from 'react'
import { CalendarCheck, CircleAlert, Loader2, Phone } from 'lucide-react'
import { hospital } from '../../config/hospital'
import useDoctors from '../../hooks/useDoctors'
import { getDepartments } from '../../lib/content'
import { submitAppointment } from '../../services/appointmentsApi'
import {
  GENDERS,
  emptyAppointment,
  maxDateISO,
  normaliseMobile,
  todayISO,
  validateAppointment,
} from '../../utils/appointmentValidation'
import FormField, { controlClasses } from '../ui/FormField'

const FIELD_ORDER = ['name', 'mobile', 'age', 'gender', 'department', 'date', 'time', 'reason', 'consent']

export default function AppointmentForm({ initialValues, onSuccess }) {
  const [values, setValues] = useState({ ...emptyAppointment, ...initialValues })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [submitError, setSubmitError] = useState(null)
  const formRef = useRef(null)

  const { doctors, loading: doctorsLoading } = useDoctors()
  const departments = getDepartments()

  const departmentDoctors = useMemo(
    () => (values.department ? doctors.filter((doctor) => doctor.departments.includes(values.department)) : doctors),
    [doctors, values.department],
  )

  const setField = (field, value) => {
    setValues((current) => {
      const next = { ...current, [field]: value }
      // Changing department invalidates a doctor from another department.
      if (field === 'department' && next.doctor !== 'any') {
        const stillValid = doctors.some((doctor) => doctor.id === next.doctor && doctor.departments.includes(value))
        if (!stillValid) next.doctor = 'any'
      }
      if (submitted) setErrors(validateAppointment(next))
      return next
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(true)
    setSubmitError(null)

    const nextErrors = validateAppointment(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstField = FIELD_ORDER.find((field) => nextErrors[field])
      formRef.current?.querySelector(`[name="${firstField}"]`)?.focus()
      return
    }

    setStatus('submitting')
    try {
      const selectedDoctor = doctors.find((doctor) => doctor.id === values.doctor)
      const result = await submitAppointment({
        patientName: values.name.trim(),
        mobile: normaliseMobile(values.mobile),
        age: Number(values.age),
        gender: values.gender,
        department: values.department,
        departmentName: departments.find((item) => item.slug === values.department)?.title ?? '',
        doctorId: values.doctor === 'any' ? null : values.doctor,
        doctorName: selectedDoctor?.name ?? 'Any available doctor',
        preferredDate: values.date,
        preferredTime: values.time,
        reason: values.reason.trim(),
        submittedAt: new Date().toISOString(),
      })
      setStatus('idle')
      onSuccess({ values, result, doctorName: selectedDoctor?.name ?? 'Any available doctor' })
    } catch (error) {
      setStatus('error')
      setSubmitError(error.message)
    }
  }

  const busy = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-primary/10 sm:p-8">
      <fieldset disabled={busy} className="space-y-8">
        <div>
          <h2 className="text-lg font-bold">Patient details</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <FormField id="name" label="Patient Name" error={errors.name} required className="sm:col-span-2">
              {({ id, hasError, describedBy }) => (
                <input
                  id={id}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => setField('name', event.target.value)}
                  placeholder="Full name of the patient"
                  aria-invalid={hasError}
                  aria-describedby={describedBy}
                  className={controlClasses(hasError)}
                />
              )}
            </FormField>

            <FormField id="mobile" label="Mobile Number" error={errors.mobile} hint="We will call or message you on this number" required>
              {({ id, hasError, describedBy }) => (
                <div className="flex">
                  <span className="inline-flex h-12 shrink-0 items-center rounded-l-xl border border-r-0 border-primary/15 bg-primary-50/60 px-3 text-[15px] font-semibold text-ink">
                    +91
                  </span>
                  <input
                    id={id}
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={values.mobile}
                    onChange={(event) => setField('mobile', event.target.value)}
                    placeholder="10-digit mobile number"
                    aria-invalid={hasError}
                    aria-describedby={describedBy}
                    className={`${controlClasses(hasError)} rounded-l-none`}
                  />
                </div>
              )}
            </FormField>

            <FormField id="age" label="Age" error={errors.age} required>
              {({ id, hasError, describedBy }) => (
                <input
                  id={id}
                  name="age"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="120"
                  value={values.age}
                  onChange={(event) => setField('age', event.target.value)}
                  placeholder="Age in years"
                  aria-invalid={hasError}
                  aria-describedby={describedBy}
                  className={controlClasses(hasError)}
                />
              )}
            </FormField>

            <FormField id="gender" label="Gender" error={errors.gender} required className="sm:col-span-2">
              {({ hasError, describedBy }) => (
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-invalid={hasError} aria-describedby={describedBy} aria-label="Gender">
                  {GENDERS.map((gender) => {
                    const selected = values.gender === gender
                    return (
                      <label
                        key={gender}
                        className={`inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border px-5 text-[15px] font-semibold transition ${
                          selected
                            ? 'border-accent bg-accent text-white shadow-md shadow-accent/20'
                            : `bg-white text-heading/80 hover:border-primary/40 ${hasError ? 'border-emergency/50' : 'border-primary/15'}`
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={selected}
                          onChange={() => setField('gender', gender)}
                          className="sr-only"
                        />
                        {gender}
                      </label>
                    )
                  })}
                </div>
              )}
            </FormField>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <h2 className="text-lg font-bold">Appointment details</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <FormField id="department" label="Department" error={errors.department} required>
              {({ id, hasError, describedBy }) => (
                <select
                  id={id}
                  name="department"
                  value={values.department}
                  onChange={(event) => setField('department', event.target.value)}
                  aria-invalid={hasError}
                  aria-describedby={describedBy}
                  className={controlClasses(hasError)}
                >
                  <option value="">Select a department</option>
                  {departments.map((department) => (
                    <option key={department.slug} value={department.slug}>
                      {department.title}
                    </option>
                  ))}
                </select>
              )}
            </FormField>

            <FormField
              id="doctor"
              label="Doctor"
              hint={values.department ? 'Optional – we can assign an available doctor' : 'Select a department first to see its doctors'}
            >
              {({ id, describedBy }) => (
                <select
                  id={id}
                  name="doctor"
                  value={values.doctor}
                  onChange={(event) => setField('doctor', event.target.value)}
                  aria-describedby={describedBy}
                  className={controlClasses(false)}
                >
                  <option value="any">Any available doctor</option>
                  {!doctorsLoading &&
                    departmentDoctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} — {doctor.qualification}
                      </option>
                    ))}
                </select>
              )}
            </FormField>

            <FormField id="date" label="Preferred Date" error={errors.date} hint="OPD is closed on Sundays" required>
              {({ id, hasError, describedBy }) => (
                <input
                  id={id}
                  name="date"
                  type="date"
                  min={todayISO()}
                  max={maxDateISO()}
                  value={values.date}
                  onChange={(event) => setField('date', event.target.value)}
                  aria-invalid={hasError}
                  aria-describedby={describedBy}
                  className={controlClasses(hasError)}
                />
              )}
            </FormField>

            <FormField id="time" label="Preferred Time" error={errors.time} required className="sm:col-span-2">
              {({ hasError, describedBy }) => (
                <div className="space-y-4" role="radiogroup" aria-invalid={hasError} aria-describedby={describedBy} aria-label="Preferred time">
                  {hospital.appointmentRules.slots.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/70">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.times.map((time) => {
                          const selected = values.time === time
                          return (
                            <label
                              key={time}
                              className={`inline-flex h-11 cursor-pointer items-center rounded-xl border px-4 text-sm font-semibold transition ${
                                selected
                                  ? 'border-accent bg-accent text-white shadow-md shadow-accent/20'
                                  : `bg-white text-heading/80 hover:border-primary/40 ${hasError ? 'border-emergency/50' : 'border-primary/15'}`
                              }`}
                            >
                              <input
                                type="radio"
                                name="time"
                                value={time}
                                checked={selected}
                                onChange={() => setField('time', time)}
                                className="sr-only"
                              />
                              {time}
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FormField>

            <FormField
              id="reason"
              label="Reason For Visit"
              error={errors.reason}
              hint={`${values.reason.length}/500 characters`}
              required
              className="sm:col-span-2"
            >
              {({ id, hasError, describedBy }) => (
                <textarea
                  id={id}
                  name="reason"
                  rows={4}
                  maxLength={500}
                  value={values.reason}
                  onChange={(event) => setField('reason', event.target.value)}
                  placeholder="Briefly describe the symptoms or reason for the visit"
                  aria-invalid={hasError}
                  aria-describedby={describedBy}
                  className={`${controlClasses(hasError)} h-auto py-3 leading-relaxed`}
                />
              )}
            </FormField>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6">
          <label className="flex cursor-pointer gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(event) => setField('consent', event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-primary/30 text-accent focus:ring-2 focus:ring-accent/30"
            />
            <span className="text-sm leading-relaxed text-ink">
              I agree that {hospital.shortName} may contact me on the number provided to confirm this appointment request.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emergency">
              <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.consent}
            </p>
          )}

          {submitted && Object.keys(errors).length > 0 && (
            <p className="mt-4 rounded-xl bg-emergency-50 px-4 py-3 text-sm font-medium text-emergency-700" role="alert">
              Please correct the highlighted fields and submit again.
            </p>
          )}

          {submitError && (
            <div className="mt-4 rounded-xl bg-emergency-50 px-4 py-3 text-sm text-emergency-700" role="alert">
              <p className="font-semibold">We couldn’t send your request.</p>
              <p className="mt-1">
                Please try again, or call us on{' '}
                <a href={hospital.appointments.href} className="font-bold underline">
                  {hospital.appointments.phone}
                </a>
                .
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {busy ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending request…
                </>
              ) : (
                <>
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Request Appointment
                </>
              )}
            </button>
            <a
              href={hospital.appointments.href}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold text-primary ring-1 ring-primary/20 transition hover:bg-primary-50"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Prefer to call?
            </a>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
