import { Suspense, useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { HospitalSchema } from '../seo/StructuredData'
import Footer from './Footer'
import Header from './Header/Header'
import MobileActionBar from './MobileActionBar'
import TopBar from './TopBar'

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading page">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-accent" />
    </div>
  )
}

// Screen readers do not announce page changes in a single-page app, so we announce
// the new page title ourselves after each navigation.
function RouteAnnouncer() {
  const { pathname } = useLocation()
  const [message, setMessage] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setMessage(document.title), 250)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <p aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </p>
  )
}

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <HospitalSchema />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
      <ScrollRestoration />
      <RouteAnnouncer />
    </div>
  )
}
