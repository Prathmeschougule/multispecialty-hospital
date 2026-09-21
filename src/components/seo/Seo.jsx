import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { hospital } from '../../config/hospital'

// React 19 hoists these tags into <head>, so each page can declare its own SEO.
// Static defaults also live in index.html for crawlers that do not run JavaScript.
export default function Seo({ title, description, image, type = 'website', noindex = false, children }) {
  const { pathname } = useLocation()

  // index.html carries static SEO tags for crawlers that do not run JavaScript.
  // Once React is running it owns these tags, so the static copies are removed to
  // avoid duplicate canonical / og tags.
  useEffect(() => {
    document.querySelectorAll('[data-static-seo]').forEach((element) => element.remove())
  }, [])

  const fullTitle = title ? `${title} · ${hospital.shortName}` : `${hospital.fullName} · ${hospital.tagline}`
  const canonical = `${hospital.siteUrl}${pathname}`
  const ogImage = `${hospital.siteUrl}${image ?? hospital.ogImage}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={hospital.fullName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </>
  )
}
