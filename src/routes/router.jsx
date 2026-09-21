import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../components/layout/RootLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import PlaceholderPage from '../pages/PlaceholderPage'

const Departments = lazy(() => import('../pages/Departments'))
const DepartmentDetail = lazy(() => import('../pages/DepartmentDetail'))
const Appointment = lazy(() => import('../pages/Appointment'))
const Contact = lazy(() => import('../pages/Contact'))
const Doctors = lazy(() => import('../pages/Doctors'))
const Facilities = lazy(() => import('../pages/Facilities'))
const Gallery = lazy(() => import('../pages/Gallery'))
const FacilityDetail = lazy(() => import('../pages/FacilityDetail'))

// Pages not built yet render PlaceholderPage so every navigation link works.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <PlaceholderPage title="About Hospital" /> },

      {
        path: 'departments',
        children: [
          { index: true, element: <Departments /> },
          { path: ':slug', element: <DepartmentDetail /> },
        ],
      },

      {
        path: 'facilities',
        children: [
          { index: true, element: <Facilities /> },
          { path: ':slug', element: <FacilityDetail /> },
        ],
      },

      { path: 'doctors', element: <Doctors /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'appointment', element: <Appointment /> },
      { path: 'privacy-policy', element: <PlaceholderPage title="Privacy Policy" /> },
      { path: 'terms-of-use', element: <PlaceholderPage title="Terms of Use" /> },

      { path: '*', element: <NotFound /> },
    ],
  },
])
