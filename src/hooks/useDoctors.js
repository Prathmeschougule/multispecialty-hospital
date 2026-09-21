import { useEffect, useState } from 'react'
import { fetchDoctors } from '../services/doctorsApi'

// Loads doctors from the data source (local JSON today, an API later).
export default function useDoctors() {
  const [state, setState] = useState({ doctors: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()

    fetchDoctors({ signal: controller.signal })
      .then((doctors) => setState({ doctors, loading: false, error: null }))
      .catch((error) => {
        if (error.name === 'AbortError') return
        setState({ doctors: [], loading: false, error })
      })

    return () => controller.abort()
  }, [])

  return state
}
