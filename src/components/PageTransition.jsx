import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function PageTransition() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div key={location.pathname} className="page-enter">
      <Outlet />
    </div>
  )
}
