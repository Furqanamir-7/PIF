import { Link } from 'react-router-dom'

export default function PetCard({ pet }) {
  return (
    <article className="card group overflow-hidden p-0">
      <div className="aspect-square overflow-hidden">
        <img
          src={pet.image}
          alt={`${pet.name}, ${pet.breed}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{pet.name}</h3>
        <p className="mt-1 text-sm text-pif-cream/70">
          {pet.breed} · {pet.age}
        </p>
        <Link to="/adopt" className="btn-primary mt-4 w-full text-xs">
          Meet Me
        </Link>
      </div>
    </article>
  )
}
