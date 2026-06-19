import { Link } from 'react-router-dom'
import Logo from './Logo'
import { ADDRESS, EMAIL, NAV_LINKS, PHONE, PHONE_DISPLAY } from '../data/constants'

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 011-1h3z' },
  { label: 'Instagram', href: '#', icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z' },
  { label: 'Twitter', href: '#', icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
]

export default function Footer() {
  return (
    <footer className="border-t border-pif-cream/10 bg-pif-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14" />
            <div>
              <p className="font-display text-xl font-bold">Play It Forward</p>
              <p className="text-sm text-pif-cream/70">Giving every pet a second chance.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pif-cream">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-pif-cream/75 transition hover:text-pif-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pif-cream">Contact</h3>
          <ul className="space-y-3 text-sm text-pif-cream/75">
            <li>
              <a href={`tel:${PHONE}`} className="transition hover:text-pif-cream">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition hover:text-pif-cream">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pif-cream/40 text-pif-cream transition hover:bg-pif-cream hover:text-pif-dark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pif-cream">Newsletter</h3>
          <p className="mb-4 text-sm text-pif-cream/75">Stay updated on adoptions, events, and rescue stories.</p>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for subscribing! We will be in touch soon.')
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-pif-cream/30 bg-pif-dark px-4 py-3 text-sm text-pif-cream placeholder:text-pif-cream/40 focus:border-pif-cream focus:outline-none"
            />
            <button type="submit" className="btn-primary w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-pif-cream/10 py-6 text-center text-sm text-pif-cream/60">
        © {new Date().getFullYear()} Play It Forward. All rights reserved. Est. 2024
      </div>
    </footer>
  )
}
