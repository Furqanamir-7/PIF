import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import { DONATION_TIERS } from '../data/constants'

export default function Donate() {
  const [selected, setSelected] = useState(50)
  const [custom, setCustom] = useState('')

  const amount = selected === 'custom' ? Number(custom) || 0 : selected

  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">Donate Online</h1>
          <p className="section-subtitle mx-auto">
            Your donation provides food, shelter, and medical care for rescued animals and supports our youth programs.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DONATION_TIERS.map((tier) => {
            const key = tier.amount ?? 'custom'
            const isSelected = selected === key

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`card text-left transition ${
                  isSelected ? 'border-pif-cream bg-pif-dark ring-1 ring-pif-cream/40' : ''
                }`}
              >
                <p className="font-display text-3xl font-bold">
                  {tier.amount ? `$${tier.amount}` : 'Custom'}
                </p>
                <p className="mt-3 text-sm text-pif-cream/75">{tier.impact}</p>
              </button>
            )
          })}
        </div>

        {selected === 'custom' && (
          <div className="mt-6">
            <label htmlFor="custom-amount" className="mb-2 block text-sm font-medium">
              Enter custom amount ($)
            </label>
            <input
              id="custom-amount"
              type="number"
              min="1"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="w-full max-w-xs rounded-full border border-pif-cream/30 bg-pif-deep px-4 py-3 text-pif-cream focus:border-pif-cream focus:outline-none"
              placeholder="Enter amount"
            />
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-pif-cream/30 bg-pif-deep p-8 text-center">
          <p className="text-sm text-pif-cream/70">
            Selected donation: <span className="font-semibold text-pif-cream">${amount || 0}</span>
          </p>
          <button
            type="button"
            onClick={() => alert(`Thank you! Your $${amount} donation will be processed securely. (Stripe/PayPal integration placeholder)`)}
            className="btn-primary mt-6"
          >
            Donate Now — Secure Checkout
          </button>
          <p className="mt-4 text-xs text-pif-cream/50">256-bit SSL encrypted · Stripe / PayPal ready</p>
        </div>
      </FadeInSection>
    </div>
  )
}
