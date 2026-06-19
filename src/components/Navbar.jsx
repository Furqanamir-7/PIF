import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS } from '../data/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-pif-cream/10 bg-pif-dark/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="Play It Forward home">
          <Logo className="h-11 w-11 md:h-12 md:w-12" />
          <span className="hidden font-display text-lg font-bold text-pif-cream sm:block">Play It Forward</span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-pif-cream/30 p-2 text-pif-cream md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? 'bg-pif-deep text-pif-cream' : 'text-pif-cream/80 hover:text-pif-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/donate" className="btn-primary ml-2 px-5 py-2.5 text-xs">
              Donate Now
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-pif-cream/10 bg-pif-dark px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm ${
                      isActive ? 'bg-pif-deep text-pif-cream' : 'text-pif-cream/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary w-full">
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
