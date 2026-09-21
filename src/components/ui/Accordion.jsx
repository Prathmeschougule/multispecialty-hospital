import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

// items: [{ question, answer }]
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const baseId = useId()

  return (
    <ul className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <li
            key={item.question}
            className={`rounded-2xl bg-white ring-1 transition-shadow duration-300 ${
              open ? 'shadow-card ring-primary/25' : 'ring-primary/10 hover:ring-primary/20'
            }`}
          >
            <h3 className="text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left sm:px-6"
              >
                <span className={`font-semibold leading-snug ${open ? 'text-primary' : 'text-heading'}`}>{item.question}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                    open ? 'rotate-180 bg-primary text-white' : 'bg-primary-50 text-primary'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden" inert={!open}>
                <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink sm:px-6">{item.answer}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
