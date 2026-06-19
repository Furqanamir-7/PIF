import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import HeroAnimalModel from '../components/HeroAnimalModel'
import { PROGRAMS, STATS } from '../data/constants'

export default function About() {
  return (
    <div>
      <section className="border-b border-pif-cream/10 bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">About & Mission</h1>
          <p className="section-subtitle mx-auto">
            Play It Forward bridges animal rescue and youth mentorship to build compassionate communities.
          </p>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Our Story</h2>
            <p className="mt-6 text-pif-cream/80 leading-relaxed">
              Founded in 2024, Play It Forward was born from a simple belief: every animal deserves a second chance,
              and every young person deserves the opportunity to make a difference. We rescue, rehabilitate, and
              rehome pets while teaching youth the values of empathy, responsibility, and community service.
            </p>
            <p className="mt-4 text-pif-cream/80 leading-relaxed">
              Through our integrated programs, young volunteers work alongside experienced caregivers — learning life
              skills while directly saving lives. It is a model where compassion grows in both directions.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-pif-cream/20 p-4 text-center">
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-pif-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-pif-cream/30">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop"
              alt="Youth volunteer with rescued animals"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="bg-pif-deep px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-pif-cream/30 bg-pif-deep">
            <HeroAnimalModel compact={false} className="h-[420px] md:h-[480px]" />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">What We Do</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((program) => (
            <article key={program.title} className="card">
              <h3 className="font-display text-xl font-bold">{program.title}</h3>
              <p className="mt-3 text-sm text-pif-cream/75">{program.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="btn-primary">
            Support Our Mission
          </Link>
          <Link to="/contact" className="btn-outline">
            Get Involved
          </Link>
        </div>
      </FadeInSection>
    </div>
  )
}
