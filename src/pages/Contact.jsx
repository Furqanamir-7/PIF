import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import RescueMap from '../components/RescueMap'
import { ADDRESS, EMAIL, PHONE, PHONE_DISPLAY } from '../data/constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) next.email = 'Valid email is required'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    alert('Thank you for reaching out! We will get back to you within 24 hours.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle mx-auto">
            Have questions about adoption, volunteering, or donations? We would love to hear from you.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
              {[
                { id: 'name', label: 'Name', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    value={form[field.id]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    className="w-full rounded-xl border border-pif-cream/30 bg-pif-dark px-4 py-3 text-sm text-pif-cream focus:border-pif-cream focus:outline-none"
                  />
                  {errors[field.id] && <p className="mt-1 text-xs text-red-400">{errors[field.id]}</p>}
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-pif-cream/30 bg-pif-dark px-4 py-3 text-sm text-pif-cream focus:border-pif-cream focus:outline-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE}` },
                { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { label: 'Address', value: ADDRESS },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl border border-pif-cream/20 p-4">
                  <p className="w-16 text-xs font-semibold uppercase tracking-widest text-pif-cream/50">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-pif-cream/80 hover:text-pif-cream">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-pif-cream/80">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-display text-2xl font-bold">Find Us</h2>
            <RescueMap />
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
