import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import PetCard from '../components/PetCard'
import { ADOPTION_STEPS, PETS } from '../data/constants'

const stepIcons = {
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  form: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
}

export default function Adopt() {
  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">Adopt a Pet</h1>
          <p className="section-subtitle mx-auto">
            Every adoption saves a life and opens space for another animal in need. Start your journey today.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PETS.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="section-title">How Adoption Works</h2>
            <p className="section-subtitle mx-auto">Our simple four-step process helps you find the perfect companion.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ADOPTION_STEPS.map((step) => (
              <article key={step.step} className="card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-pif-cream/40">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stepIcons[step.icon]} />
                  </svg>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-pif-cream/50">Step {step.step}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-pif-cream/75">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">
              Start Adoption Process
            </Link>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
