import FadeInSection from '../components/FadeInSection'
import { EVENTS } from '../data/constants'

export default function Events() {
  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">Events</h1>
          <p className="section-subtitle mx-auto">
            Join us for adoption fairs, youth volunteer days, and community fundraisers throughout the year.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <article key={event.id} className="card flex flex-col">
              <div className="mb-4 inline-flex w-fit rounded-full border border-pif-cream/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                {event.date}
              </div>
              <h2 className="font-display text-2xl font-bold">{event.title}</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-pif-cream/60">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </p>
              <p className="mt-4 flex-1 text-sm text-pif-cream/75">{event.description}</p>
              <div className="mt-6 flex gap-3">
                <button type="button" className="btn-primary flex-1 text-xs">
                  RSVP
                </button>
                <button type="button" className="btn-outline flex-1 text-xs">
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </FadeInSection>
    </div>
  )
}
