import { MessageCircle, MessageCircleQuestion, Phone } from 'lucide-react'
import { hospital } from '../../../config/hospital'
import Accordion from '../../ui/Accordion'
import Button from '../../ui/Button'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'

export default function DepartmentFAQ({ department }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: department.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section id="faqs" className="scroll-mt-28 bg-primary-50/70 py-20 lg:py-24">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description={`Answers to common questions about ${department.title} at ${hospital.shortName}.`}
            />

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-card ring-1 ring-primary/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ice text-primary">
                <MessageCircleQuestion className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">Still have questions?</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink">
                Our team is happy to help. Reach us by phone or WhatsApp.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={hospital.appointments.href} variant="dark" size="sm">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Us
                </Button>
                <Button href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion items={department.faqs} />
        </div>
      </Container>
    </section>
  )
}
