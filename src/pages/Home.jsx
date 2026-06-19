import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import PetCard from '../components/PetCard'
import RescueMap from '../components/RescueMap'
import WireframeAnimals from '../components/WireframeAnimals'
import { EVENTS, PETS, PROGRAMS, STATS } from '../data/constants'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-pif-dark px-4 py-20 md:px-6 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cpath d='M80 180c20-40 50-60 80-60s60 20 80 60' fill='none' stroke='%23F4F0E6' stroke-width='2'/%3E%3Ccircle cx='110' cy='130' r='8' fill='none' stroke='%23F4F0E6'/%3E%3Ccircle cx='170' cy='130' r='8' fill='none' stroke='%23F4F0E6'/%3E%3Cpath d='M260 160c15-25 40-35 65-35s50 10 65 35' fill='none' stroke='%23F4F0E6' stroke-width='2'/%3E%3Cpath d='M285 125l-8-15 12 5 12-5-8 15' fill='none' stroke='%23F4F0E6'/%3E%3C/svg%3E")`,
            backgroundSize: '600px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pif-cream/60">Est. 2024</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            Play It Forward — Giving Every Pet a Second Chance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-pif-cream/80 md:text-lg">
            Adopt a pet, support youth programs, and help rescue animals find loving homes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/adopt" className="btn-primary min-w-[180px]">
              Adopt Now
            </Link>
            <Link to="/donate" className="btn-outline min-w-[180px]">
              Donate Now
            </Link>
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

      <FadeInSection className="bg-pif-deep px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="section-title">Our Impact in 3D</h2>
            <p className="section-subtitle mx-auto">
              Interact with our rescue figures — click the callouts to explore how we help dogs and cats.
            </p>
          </div>
          <WireframeAnimals />
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="section-title">Where We Serve</h2>
          <p className="section-subtitle mx-auto">
            Explore rescue centers, event locations, and partner shelters across our community.
          </p>
        </div>
        <RescueMap />
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
