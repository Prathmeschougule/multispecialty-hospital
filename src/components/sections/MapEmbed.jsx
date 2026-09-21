import { useState } from 'react'
import { MapPin, Navigation, Play } from 'lucide-react'
import { hospital } from '../../config/hospital'

// The Google Maps iframe is heavy and third-party, so it loads only when the visitor
// asks for it. Directions still work without loading the map at all.
export default function MapEmbed({ className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-primary-50 shadow-card ring-1 ring-primary/10 ${className}`}>
      {loaded ? (
        <iframe
          title={`Map showing the location of ${hospital.fullName}`}
          src={hospital.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-primary-100 via-ice to-primary-50 p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(42_111_151/0.16)_1px,transparent_0)] bg-size-[24px_24px]"
          />
          <div className="relative max-w-sm text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-primary shadow-card">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-4 text-lg font-bold text-heading">{hospital.shortName}</p>
            <p className="mt-1 text-sm text-ink">{hospital.shortLocation}</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-700"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Load Google Map
              </button>
              <a
                href={hospital.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-primary ring-1 ring-primary/20 transition hover:ring-primary/40"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
