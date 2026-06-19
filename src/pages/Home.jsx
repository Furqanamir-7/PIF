import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import PetCard from '../components/PetCard'
import SafeHeroAnimalModel from '../components/SafeHeroAnimalModel'
import SafeRescueMap from '../components/SafeRescueMap'
import { EVENTS, PETS, PROGRAMS, STATS } from '../data/constants'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-pif-dark">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 top-1/2 hidden h-[min(520px,85vh)] w-[min(520px,85vh)] -translate-y-1/2 object-contain opacity-[0.07] md:block lg:left-0 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-6 lg:py-24">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pif-cream/60">Est. 2024</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Play It Forward — Giving Every Pet a Second Chance
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-pif-cream/80 md:text-lg lg:mx-0">
              Adopt a pet, support youth programs, and help rescue animals find loving homes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link to="/adopt" className="btn-primary min-w-[180px]">
                Adopt Now
              </Link>
              <Link to="/donate" className="btn-outline min-w-[180px]">
                Donate Now
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none lg:justify-self-end">
            <div className="absolute inset-0 rounded-full border border-pif-cream/10 bg-pif-deep/40 blur-0" />
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-pif-cream/25 bg-gradient-to-b from-pif-deep/80 to-pif-dark md:min-h-[400px] lg:min-h-[460px]">
              <SafeHeroAnimalModel className="h-full min-h-[320px] md:min-h-[400px] lg:min-h-[460px]" />
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="section-title">Featured Rescue Animals</h2>
          <p className="section-subtitle mx-auto">Meet some of our wonderful pets waiting for their forever homes.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PETS.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/adopt" className="btn-outline">
            View All Adoptable Pets
          </Link>
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="section-title">Where We Serve</h2>
          <p className="section-subtitle mx-auto">
            Explore rescue centers, event locations, and partner shelters across our community.
          </p>
        </div>
        <SafeRescueMap />
      </FadeInSection>

      <FadeInSection className="bg-pif-deep px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              Play It Forward is dedicated to rescuing animals in need while empowering youth through mentorship,
              compassion training, and community service. Together, we build a kinder world for pets and people.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-pif-cream/20 p-4 text-center">
                  <p className="font-display text-2xl font-bold md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-pif-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-8">
              Learn More
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-pif-cream/30">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
              alt="Volunteer caring for a rescued dog"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="section-title">Support Programs</h2>
          <p className="section-subtitle mx-auto">
            We combine animal rescue with youth development to create lasting community impact.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <article key={program.title} className="card">
              <h3 className="font-display text-lg font-bold">{program.title}</h3>
              <p className="mt-3 text-sm text-pif-cream/75">{program.description}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="bg-pif-deep px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="section-title">Upcoming Events</h2>
              <p className="section-subtitle">Join us at adoption fairs, volunteer days, and community fundraisers.</p>
            </div>
            <Link to="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EVENTS.map((event) => (
              <article key={event.id} className="card">
                <p className="text-xs font-semibold uppercase tracking-widest text-pif-cream/60">{event.date}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{event.title}</h3>
                <p className="mt-1 text-sm text-pif-cream/60">{event.location}</p>
                <p className="mt-3 text-sm text-pif-cream/75">{event.description}</p>
                <button type="button" className="btn-primary mt-5 text-xs">
                  RSVP
                </button>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </>
  )
}
