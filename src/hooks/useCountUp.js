import { useEffect, useState } from 'react'

export default function useCountUp(end, { start = false, duration = 1800 } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }

    let frame
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, start, duration])

  return value
}
