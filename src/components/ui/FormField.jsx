import { CircleAlert } from 'lucide-react'

export const controlClasses = (hasError) =>
  `h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-heading transition placeholder:text-ink/45 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-primary-50/60 ${
    hasError
      ? 'border-emergency/50 focus:border-emergency focus:ring-emergency/25'
      : 'border-primary/15 hover:border-primary/30 focus:border-accent focus:ring-accent/25'
  }`

export default function FormField({ id, label, error, hint, required, className = '', children }) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-heading">
        {label}
        {required && (
          <span className="text-emergency" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      {children({ id, hasError: Boolean(error), describedBy: [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined })}

      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-ink">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-emergency">
          <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
