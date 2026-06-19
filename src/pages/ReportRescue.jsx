import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import { PHONE, PHONE_DISPLAY } from '../data/constants'

export default function ReportRescue() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', description: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    if (!form.location.trim()) next.location = 'Location is required'
    if (!form.description.trim()) next.description = 'Description is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    alert('Thank you! Your rescue report has been submitted. Our team will respond shortly.')
    setForm({ name: '', phone: '', location: '', description: '' })
  }

  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">Report a Rescue</h1>
          <p className="section-subtitle mx-auto">
            Found an animal in need? Tell us the details and our rescue team will respond as quickly as possible.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-2xl px-4 py-16 md:px-6">
        <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
          {[
            { id: 'name', label: 'Your Name', type: 'text' },
            { id: 'phone', label: 'Phone Number', type: 'tel' },
            { id: 'location', label: 'Location', type: 'text' },
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
            <label htmlFor="description" className="mb-2 block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full rounded-xl border border-pif-cream/30 bg-pif-dark px-4 py-3 text-sm text-pif-cream focus:border-pif-cream focus:outline-none"
            />
            {errors.description && <p className="mt-1 text-xs text-red-400">{errors.description}</p>}
          </div>

          <div>
            <label htmlFor="photo" className="mb-2 block text-sm font-medium">
              Upload Photo (optional)
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="w-full text-sm text-pif-cream/70 file:mr-4 file:rounded-full file:border file:border-pif-cream/30 file:bg-pif-dark file:px-4 file:py-2 file:text-sm file:text-pif-cream"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Report
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-pif-cream/20 bg-pif-deep p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-pif-cream/80">
            <strong className="text-pif-cream">For emergencies,</strong> please call us directly.
          </p>
          <a href={`tel:${PHONE}`} className="btn-primary whitespace-nowrap text-xs">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </FadeInSection>
    </div>
  )
}
