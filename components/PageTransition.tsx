'use client'

import { useEffect, useState, ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay to ensure paint, then fade in
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className="transition-opacity duration-500 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  )
}
