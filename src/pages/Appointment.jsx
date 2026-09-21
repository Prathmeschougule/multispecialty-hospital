import { useEffect, useRef, useState } from 'react'
import { TriangleAlert } from 'lucide-react'
import { useSearchParams } from 'react-router'
import AppointmentAside from '../components/appointment/AppointmentAside'
import AppointmentForm from '../components/appointment/AppointmentForm'
import AppointmentSuccess from '../components/appointment/AppointmentSuccess'
import PageBanner from '../components/sections/PageBanner'
import Seo from '../components/seo/Seo'
import Container from '../components/ui/Container'
import { hospital } from '../config/hospital'
import { getDepartment } from '../lib/content'
import { isDemoMode } from '../services/appointmentsApi'

export default function Appointment() {
  const [searchParams] = useSearchParams()
  const [submission, setSubmission] = useState(null)
  const resultRef = useRef(null)

  // Pre-fill from links such as /appointment?department=orthopedics&doctor=d-001
  const departmentParam = searchParams.get('department')
  const initialValues = {
    department: getDepartment(departmentParam) ? departmentParam : '',
    doctor: searchParams.get('doctor') ?? 'any',
  }

  useEffect(() => {
    if (submission) resultRef.current?.focus()
  }, [submission])

  return (
    <>
      <Seo
        title="Book an Appointment"
        description={`Request an appointment at ${hospital.fullName}. Choose a department, doctor, date and time, and our team will call you to confirm.`}
      />

      <PageBanner
        title="Book an Appointment"
        description="Send us your details and our team will call you to confirm your appointment slot."
        breadcrumbs={[{ label: 'Appointment' }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            {import.meta.env.DEV && isDemoMode && (
              <p className="mb-6 flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="font-bold">Developer notice:</strong> no appointments API is configured, so submitted requests are
                  not delivered anywhere. Set <code className="rounded bg-amber-100 px-1">VITE_APPOINTMENTS_API_URL</code> in
                  your <code className="rounded bg-amber-100 px-1">.env</code> before launch.
                </span>
              </p>
            )}

            <div ref={resultRef} tabIndex={-1} className="outline-none">
              {submission ? (
                <AppointmentSuccess submission={submission} onBookAnother={() => setSubmission(null)} />
              ) : (
                <AppointmentForm initialValues={initialValues} onSuccess={setSubmission} />
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <AppointmentAside />
          </div>
        </Container>
      </section>
    </>
  )
}
